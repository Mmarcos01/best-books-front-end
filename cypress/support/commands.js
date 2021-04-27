// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// From auth0 Cypress integration https://auth0.com/blog/end-to-end-testing-with-cypress-and-auth0/ - modified
Cypress.Commands.add('login', () => {
  cy.forceVisit('https://best-books.us.auth0.com/v2/logout').then(() => {
    cy.visit('');
  });
  cy.get('[cy-data=login-button]').click();
  cy.get('#username').type(Cypress.env('AUTH_USERNAME'));
  cy.get('#password').type(Cypress.env('AUTH_PASSWORD'));
  cy.contains('Continue').click();
});


// -- Save localStorage between tests
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

// -- Visit multiple domains in one test
Cypress.Commands.add('forceVisit', url => {
  cy.window().then(win => {
    return win.open(url, '_self');
  });
});