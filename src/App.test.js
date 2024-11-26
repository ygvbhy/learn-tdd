import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// 카운터가 0 인지 테스트
test("the counterr starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

// 마이너스 버튼의 텍스트가 '-' 인지 테스트
test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

// 플러스 버튼의 텍스트가 '+' 인지 테스트
test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

// 플러스 버튼을 누르면 카운터가 1 증가하는지 테스트
test("when the plus button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

// 마이너스 버튼을 누르면 카운터가 1 감소하는지 테스트
test("when the minus button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});
