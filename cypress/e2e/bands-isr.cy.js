it("skips client-side bundle, confirming data from isr cache", () => {
  // reference: https://glebbahmutov.com/blog/ssr-e2e/#removing-application-bundle
  cy.request("/bands")
    .its("body")
    .then((html) => {
      // remove the application code bundle
      const staticHtml = html.replace('<script src="/bundle.js"></script>', "");
      cy.state("document").write(html);
    });
  // now we can use "normal" Cypress api to confirm
  cy.findByRole("heading", { name: /The Wandering Bunnies/i }).should("exist");
  cy.findByRole("heading", { name: /Shamrock Pete/i }).should("exist");
  cy.findByRole("heading", { name: /The Joyous Nun Riot/i }).should("exist");
});
