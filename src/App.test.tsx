import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./App";

describe("App", () => {
  it("counts click", async () => {
    render(<App />);

    await userEvent.click(screen.getByRole("button", { name: "count is 0" }));

    expect(screen.getByRole("button")).toHaveTextContent("count is 1");
  });
});
