import renderer from "react-test-renderer";
import { DayForecastPanel } from "./DayForecastPanel";
import { getDayForecastMock } from "../../../test/utils";

describe("DayForecastPanel", () => {
  test("match snapshot", () => {
    const result = renderer
      .create(<DayForecastPanel forecastPeriods={getDayForecastMock()} />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
