import React, { createContext, ReactNode, useContext } from "react";
import { Period } from "../../../api/forecast";

export interface ForecastPeriodState extends Partial<Period> {}

export const ForecastPeriodContext = createContext<ForecastPeriodState>({});

export const ForecastPeriodProvider: React.FC<{
  value: ForecastPeriodState;
  children: ReactNode;
}> = ({ value, children }) => {
  return (
    <ForecastPeriodContext.Provider value={value}>
      {children}
    </ForecastPeriodContext.Provider>
  );
};

export const useForecastPeriodValues = () => useContext(ForecastPeriodContext);
