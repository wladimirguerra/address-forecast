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
  selectedAddress?: GeocodeAddress | null | undefined;
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
  GeocodeAddress | null,
  { state: RootState }
>("forecast/fetchForecast", async (address, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  dispatch(selectAddress(address));
  if (!address) return {} as Forecast;

  const coordinates: GeocodeCoordinate = address.coordinates;
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
});

export const forecastSliceSlice = createSlice({
  name: "forecastSlice",
  initialState: {
    addresses: [],
    forecastGrids: [],
  } as ForecastSliceState,
  reducers: {
    selectAddress: (
      state,
      action: PayloadAction<GeocodeAddress | null | undefined>
    ) => {
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
      state.addresses = action.payload;
      state.fetchingAddresses = false;
    });
    builder.addCase(fetchAddresses.rejected, (state, action) => {
      state.addressFetchError = true;
      state.fetchingAddresses = false;
      console.error(action.error);
    });
    builder.addCase(fetchForecast.pending, (state) => {
      state.fetchingForecast = true;
      state.forecastFetchError = false;
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.fetchingForecast = false;
      state.selectedAddressForecast = action.payload;
    });
    builder.addCase(fetchForecast.rejected, (state, action) => {
      state.forecastFetchError = true;
      state.fetchingForecast = false;
      console.error(action.error);
    });
  },
});

// Selectors
export const fetchingAddressesSelector = (state: RootState) =>
  state.forecast.fetchingAddresses;
export const addressesSelector = (state: RootState) => state.forecast.addresses;
export const forecastPeriodsSelector = (state: RootState) =>
  state.forecast.selectedAddressForecast?.properties?.periods;
export const selectedAddressSelector = (state: RootState) =>
  state.forecast.selectedAddress;

export const { selectAddress, addForecastGrid } = forecastSliceSlice.actions;

export default forecastSliceSlice.reducer;
