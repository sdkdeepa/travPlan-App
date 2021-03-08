import { daysremaining } from '../client/js/util';;

test("tests if the length of days between current and starting date ", () => {
  expect(daysremaining("2021-03-12", "2021-03-10")).toBe(4);
});