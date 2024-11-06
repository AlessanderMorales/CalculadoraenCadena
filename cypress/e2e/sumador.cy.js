describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#cadena").type("4");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", 4);
  });
});
