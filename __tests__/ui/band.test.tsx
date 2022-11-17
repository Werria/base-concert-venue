import { render, screen } from "@testing-library/react";
import BandComponent from "@/pages/bands/[bandId]";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";

test("band component displays correct band informtion", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("band component displays correct band error", () => {
  render(<BandComponent band={null} error={"Somthing went wrong!"} />);

  const heading = screen.getByRole("heading", {
    name: /Somthing went wrong/i,
  });

  expect(heading).toBeInTheDocument();
});
