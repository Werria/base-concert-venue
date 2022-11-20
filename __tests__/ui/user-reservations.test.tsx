import { render, screen } from "@testing-library/react";
import { UserReservations } from "@/components/user/UserReservations";

test("user reservatoins page shows correct purchase button text", async () => {
  render(<UserReservations userId={1} />);
  const purchaseButtonText = await screen.findByRole("button", {
    name: /Purchase more tickets/i,
  });
  expect(purchaseButtonText).toBeInTheDocument();
});
