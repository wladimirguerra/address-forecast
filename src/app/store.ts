import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import forecastReducer from "../features/forecast/forecastSlice";

export const store = configureStore({
  reducer: {
    forecast: forecastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
