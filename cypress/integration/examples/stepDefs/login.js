/// <reference types="Cypress"/>
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pageObjects/homePageObjs";
import LoginPage from '../pageObjects/loginPageObjs'
const login =new LoginPage()
const home =new HomePage()


Given('User is on D3A Login Page',function(){
    cy.visit(this.data.site)
    login.getLoginH2Text().should('have.text','Login')
})
When('User enters Email and Password',function(){
    login.getEmail().type(this.data.email)
    login.getPassword().type(this.data.password)
})

When('User clicks on Login button',function(){
    login.getLoginButton().click()
    cy.wait(2000)
})

Then('Validate user is logged in and navigated to Home Page',function(){
    home.getHomeH1().should('have.text','Home')

})
