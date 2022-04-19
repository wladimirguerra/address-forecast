import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { DayForecastPanel, DayForecastPanelProps } from "./DayForecastPanel";
import forecast from "../../../test/resources/forecast.json";

export default {
  title: "Components/DayForecastPanel",
  component: DayForecastPanel,
} as Meta;

const Template: Story<DayForecastPanelProps> = (args) => (
  <DayForecastPanel {...args} />
);

export const Default = Template.bind({});

Default.args = {
  forecastPeriods: forecast.properties.periods.slice(1, 3).map((period) => {
    const { startTime, endTime, ...rest } = period;

    return {
      ...rest,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    };
  }),
};
