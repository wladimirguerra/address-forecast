import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { GeocodeAddress } from "../../api/geocode";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addressesSelector,
  fetchAddresses,
  fetchForecast,
  fetchingAddressesSelector,
  selectedAddressSelector,
} from "../../features/forecast/forecastSlice";

export interface AddressSearchProps {}

export const AddressSearch: React.FC<AddressSearchProps> = (props) => {
  const {} = props;
  const fetchingAddresses = useAppSelector(fetchingAddressesSelector);
  const addresses = useAppSelector(addressesSelector);
  const [addressQuery, setAddressQuery] = useState("");
  const [address] = useDebounce(addressQuery, 1000);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const selectedAddress = useAppSelector(selectedAddressSelector);

  useEffect(() => {
    if (address.trim() && address !== selectedAddress?.matchedAddress)
      dispatch(fetchAddresses(address));
  }, [address]);

  const handleChange = (event: any, newValue: GeocodeAddress | null) => {
    dispatch(fetchForecast(newValue));
  };

  return (
    <Autocomplete<GeocodeAddress>
      id="asynchronous-demo"
      sx={{ width: 500 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option.matchedAddress === value.matchedAddress
      }
      value={
        selectedAddress ?? {
          matchedAddress: "",
          coordinates: { x: Infinity, y: Infinity },
        }
      }
      onChange={handleChange}
      inputValue={addressQuery ?? ""}
      onInputChange={(event, newValue) => setAddressQuery(newValue)}
      getOptionLabel={(option) => option.matchedAddress}
      options={addresses}
      loading={fetchingAddresses}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Address"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {fetchingAddresses ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <InputAdornment position={"end"}>
                    <Search />
                  </InputAdornment>
                )}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};
