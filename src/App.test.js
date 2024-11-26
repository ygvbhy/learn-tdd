import { render, screen } from "@testing-library/react";
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
