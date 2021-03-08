import { daysremaining } from '../client/js/util';;

test("Return the length of days between current date and departure", () => {
  expect(daysremaining("2021-03-12", "2021-03-10")).toBe(4);
});