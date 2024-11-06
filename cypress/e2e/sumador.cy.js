describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#cadena").type("4");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", 4);
  });

    it("Muestra el resultado de la suma con delimitador personalizado ';'", () => {
    cy.visit("/");
    cy.get("#cadena").type("//[;] 5;5");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", 10);
  });
});

