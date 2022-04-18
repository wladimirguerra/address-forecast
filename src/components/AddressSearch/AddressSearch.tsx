import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { GeocodeAddress } from "../../api/geocode";
import { useAppSelector } from "../../app/hooks";
import {
  addressesSelector,
  fetchingAddressesSelector,
} from "../../features/forecast/forecastSlice";

export interface AddressSearchProps {}

export const AddressSearch: React.FC<AddressSearchProps> = (props) => {
  const {} = props;
  const fetchingAddresses = useAppSelector(fetchingAddressesSelector);
  const addresses = useAppSelector(addressesSelector);

  const [open, setOpen] = useState(false);

  return (
    <Autocomplete<GeocodeAddress>
      id="asynchronous-demo"
      sx={{ width: 300 }}
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
