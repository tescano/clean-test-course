describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });
  it('selects Handhelds', () => {
    cy.contains('Handhelds').click(); //verifies HomePage contains Handhelds, if so, click it.
    cy.contains('Cheese Burger');
    cy.contains('Fajita Tacos');
  });
  it('selects Appeteasers', () => {
    cy.contains('Appeteasers').click();
    cy.contains('Tater Tots');
    cy.contains('Buffalo Wings');
    cy.contains('Cheese Burger').should('not.exist');// verifies Cheese Burger is not presented
    cy.contains('Fajita Tacos').should('not.exist');
  });
});
