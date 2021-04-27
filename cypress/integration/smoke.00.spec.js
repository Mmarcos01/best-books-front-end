/// <reference types="cypress" />

describe('Authenticated', () => {
  before(() => {
    cy.login();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
    Cypress.Cookies.defaults({
      preserve: /[\s\S]*/,
    });
  });

  describe('Landing Page', () => {
    it('should see landing page', () => {
      cy.get('[cy-data=logout-button]').should('be.visible');
    });
  });

  describe('Profile Page', () => {
    it('should see profile page', () => {
      cy.visit('profile');
      cy.get('[cy-data=user-email]').should('contain.text', Cypress.env('AUTH_USERNAME'));
      cy.get('[cy-data=logout-button]').should('be.visible');
    });
  });

  describe('Bookshelf Page', () => {
    it('should see bookshelf page', () => {
      cy.visit('bookshelf');
      cy.get('h1').should('contain.text', 'BookShelf');
      cy.get('[cy-data=logout-button]').should('be.visible');
    });
  });
});
