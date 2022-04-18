import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  GeocodeAddress,
  GeocodeCoordinate,
  GeocodeResult,
  getGeocode,
} from "../../api/geocode";
import {
  Forecast,
  ForecastGrid,
  getForecast,
  getForecastGrid,
} from "../../api/forecast";

export interface ForecastSliceState {
  addresses: GeocodeAddress[];
  selectedAddress?: GeocodeAddress;
  fetchingAddresses?: boolean;
  addressFetchError?: boolean;
  /**
   * Forecast Grids cache
   */
  forecastGrids: ForecastGrid[];
  selectedAddressForecast?: Forecast;
  fetchingForecast?: boolean;
  forecastFetchError?: boolean;
}

// Thunks
export const fetchAddresses = createAsyncThunk(
  "forecast/fetchAddresses",
  async (address: string) => {
    const geocodeResult: GeocodeResult = await getGeocode(address);
    return geocodeResult.result.addressMatches;
  }
);

export const fetchForecast = createAsyncThunk<
  Forecast,
  GeocodeCoordinate,
  { state: RootState }
>(
  "forecast/fetchForecast",
  async (coordinates: GeocodeCoordinate, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    let grid = getState().forecast.forecastGrids.find(
      (forecastGrid) =>
        forecastGrid.latitude === coordinates.y &&
        forecastGrid.longitude === coordinates.x
    );

    if (!grid) {
      // Cache forecast grid to speed up next query to the same
      // coordinates
      grid = await getForecastGrid(coordinates);
      dispatch(addForecastGrid(grid));
    }

    return getForecast(grid);
  }
);

export const forecastSliceSlice = createSlice({
  name: "forecastSlice",
  initialState: {
    addresses: [],
    forecastGrids: [],
  } as ForecastSliceState,
  reducers: {
    selectAddress: (state, action: PayloadAction<GeocodeAddress>) => {
      state.selectedAddress = action.payload;
    },
    addForecastGrid: (state, action: PayloadAction<ForecastGrid>) => {
      state.forecastGrids.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddresses.pending, (state) => {
      state.fetchingAddresses = true;
      state.addressFetchError = true;
    });
    builder.addCase(fetchAddresses.fulfilled, (state, action) => {
      state.fetchingAddresses = false;
      state.addresses = action.payload;
    });
    builder.addCase(fetchAddresses.rejected, (state) => {
      state.addressFetchError = true;
      state.fetchingAddresses = false;
    });
    builder.addCase(fetchForecast.pending, (state) => {
      state.fetchingForecast = true;
      state.forecastFetchError = false;
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.fetchingForecast = false;
      state.selectedAddressForecast = action.payload;
    });
    builder.addCase(fetchForecast.rejected, (state) => {
      state.forecastFetchError = true;
      state.fetchingForecast = false;
    });
  },
});

// Selectors
export const fetchingAddressesSelector = (state: RootState) =>
  state.forecast.fetchingAddresses;
export const addressesSelector = (state: RootState) => state.forecast.addresses;
export const { selectAddress, addForecastGrid } = forecastSliceSlice.actions;

export default forecastSliceSlice.reducer;
