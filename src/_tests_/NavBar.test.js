import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import "@testing-library/jest-dom";

test("NavBar renders successfully", () => {
  render(<NavBar />);

  const element = screen.getByText("Ez-Ed");
  expect(element).toBeInTheDocument();
});
