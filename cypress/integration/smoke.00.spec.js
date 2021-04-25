/// <reference types="cypress" />

describe('Authenticated', () => {
  describe('login', () => {
    it('should successfully log into our app', () => {
      cy.login();
      cy.get('[cy-data=logout-button]').should('be.visible');
    });
  });
});
