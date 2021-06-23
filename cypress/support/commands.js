import LoginPage from '../integration/examples/pageObjects/loginPageObjs'
const login=new LoginPage()
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
 Cypress.Commands.add('login', () => { 
     cy.visit('https://www.d3a.io/projects')
     login.getEmail().type('abhishekkachroo10@gmail.com')
     login.getPassword().type('Germany@2022')
     login.getLoginButton().click()
     login.getLoginH2Text().should('have.text','Login')
  })
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


