import { describe, it, expect } from "@jest/globals";
import { render } from "@testing-library/react-native";
import App from "@/App";

describe("App", () => {
  it("renders", () => {
    const screen = render(<App />);
    const textNode = screen.getByText(
      "Open up App.js to start working on your app!"
    );

    expect(textNode).toBeTruthy();
  });
});
