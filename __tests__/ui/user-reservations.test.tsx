import { render, screen } from "@testing-library/react";
import { UserReservations } from "@/components/user/UserReservations";

test("user reservatoins page shows correct purchase button text", async () => {
  render(<UserReservations userId={1} />);
  const purchaseButtonText = await screen.findByRole("button", {
    name: /Purchase more tickets/i,
  });
  expect(purchaseButtonText).toBeInTheDocument();
});

test("user reservatoins page shows no reservation item and displays button with 'purchase ticket' text", async () => {
  render(<UserReservations userId={0} />);

  const purchaseButtonText = await screen.findByRole("button", {
    name: /Purchase tickets/i,
  });
  expect(purchaseButtonText).toBeInTheDocument();

  const ticketsHeading = await screen.queryByRole("heading", {
    name: /Your Tickets/i,
  });
  expect(ticketsHeading).not.toBeInTheDocument();
});
