import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {
  SevenDaysForecastContainer,
  SevenDaysForecastContainerProps,
} from "./SevenDaysForecastContainer";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import forecast from "../../../test/resources/forecast.json";
import { Provider } from "react-redux";

const store = configureMockStore([thunk])({
  forecast: { selectedAddressForecast: forecast },
});

export default {
  title: "Components/SevenDaysForecastContainer",
  component: SevenDaysForecastContainer,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: Story<SevenDaysForecastContainerProps> = (args) => (
  <SevenDaysForecastContainer {...args} />
);

export const Default = Template.bind({});
