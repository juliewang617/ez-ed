import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";

test("Footer renders successfully", () => {
  render(<Footer />);

  const element = screen.getByText(
    "Ez-Ed @ 2024. | Created by Julie Wang. Contact me at juliewang617@gmail.com."
  );
  expect(element).toBeInTheDocument();
});
