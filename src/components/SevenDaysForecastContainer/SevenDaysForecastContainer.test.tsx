import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import renderer from "react-test-renderer";
import { SevenDaysForecastContainer } from "./SevenDaysForecastContainer";
import forecast from "../../../test/resources/forecast.json";

describe("SevenDaysForecastContainer", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  beforeAll(() => {
    store = configureMockStore([thunk])({
      forecast: { selectedAddressForecast: forecast },
    });
  });

  test("match snapshot", () => {
    const result = renderer
      .create(
        <Provider store={store}>
          <SevenDaysForecastContainer />
        </Provider>
      )
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
