/// <reference types="cypress" />

describe('Authenticated', () => {
  before(() => {
    cy.login();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    // cy.login();
    cy.restoreLocalStorage();
    Cypress.Cookies.defaults({
      preserve: /[\s\S]*/,
    });
  });

  describe('Landing Page', () => {
    it('should see landing page', () => {
      cy.get('[cy-data=logout-button]').should('be.visible');
    });

    it('i need to write more tests');
  });
  describe('Profile Page', () => {
    it('should see profile page', () => {
      cy.visit('profile');
      cy.get('[cy-data=logout-button]').should('be.visible');
    });
  });
});
