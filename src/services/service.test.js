import { axios } from "./httpService";

test("Data is correct ", () => {
  expect(axios).toMatchSnapshot();
});
