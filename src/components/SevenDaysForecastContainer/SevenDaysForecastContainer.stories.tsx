import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {
  SevenDaysForecastContainer,
  SevenDaysForecastContainerProps,
} from "./SevenDaysForecastContainer";

export default {
  title: "Components/SevenDaysForecastContainer",
  component: SevenDaysForecastContainer,
} as Meta;

const Template: Story<SevenDaysForecastContainerProps> = (args) => (
  <SevenDaysForecastContainer {...args} />
);

export const Default = Template.bind({});
