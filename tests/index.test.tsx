import { render, fireEvent } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  test("clicking on Docs link takes user to the right page", () => {
    const { getByRole, getByText } = render(<Home />);

    // Locate the link using an accessible name
    const docsLink = getByRole("link", { name: /Docs ->/i });

    const click = fireEvent.click(docsLink);

    // You can add an assertion to check the URL or other behaviors

    // assert click event
    expect(click).toBeTruthy();

    // assert docsLink been clicked

    expect(
      getByText(/Find in-depth information about Next.js features and API./i)
    ).toBeInTheDocument();
  });
});
