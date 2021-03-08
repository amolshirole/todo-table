import App from "./App";

test("App is render correct ", () => {
  expect(App).toMatchSnapshot();
});
