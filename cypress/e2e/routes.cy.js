it("displays correct heading when navigating to show route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /shows/i }).click();
  cy.findByRole("heading", { name: /upcoming shows/i }).should("exist");
});

it("checks the bands route", () => {
  cy.visit("/");
  cy.findByRole("button", { name: /bands/i }).click();
  cy.findByRole("heading", { name: /Our Illustrious Performers/i }).should(
    "exist"
  );
});

it("displays correct band name for band route that existed at build time", () => {
  cy.task("db:reset").visit("/bands/1");
  cy.findByRole("heading", { name: /Shamrock Pete/i }).should("exist");
});

it("displays correct message for unkhnown band id route", () => {
  cy.task("db:reset").visit("/bands/12345");
  cy.findByRole("heading", { name: /Error: band not found/i }).should("exist");
});
