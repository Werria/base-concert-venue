it("skips client-side bundle, confirming data from isr cache", () => {
  // reference: https://glebbahmutov.com/blog/ssr-e2e/#removing-application-bundle
  cy.request("/shows")
    .its("body")
    .then((html) => {
      // remove the application code bundle
      const staticHtml = html.replace('<script src="/bundle.js"></script>', "");
      cy.state("document").write(html);
    });
  // now we can use "normal" Cypress api to confirm
  // number of list element
  cy.findAllByText(/2022 apr 1[567]/i).should("have.length", 3);
});
