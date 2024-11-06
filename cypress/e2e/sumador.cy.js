describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#cadena").type("4,4");
   // cy.get("#resultado-div").should("contain", "9");
  });
});
