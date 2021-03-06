import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { DayForecastPanel, DayForecastPanelProps } from "./DayForecastPanel";
import { getDayForecastMock } from "../../../test/utils";

export default {
  title: "Components/DayForecastPanel",
  component: DayForecastPanel,
} as Meta;

const Template: Story<DayForecastPanelProps> = (args) => (
  <DayForecastPanel {...args} />
);

export const Default = Template.bind({});

Default.args = {
  forecastPeriods: getDayForecastMock(),
};
