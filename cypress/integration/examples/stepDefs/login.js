/// <reference types="Cypress"/>
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../pageObjects/loginPageObjs'
const login =new LoginPage()



Given('User is on D3A Landing Page',function(){
    cy.visit(this.data.site)
})

When('User clicks on Login button',function(){
    login.getLoginButton().click()
})

Then('User is navigated to Login Page',function(){

})

Given('User is on D3A Login Page',function(){

})
When('User enters Email and Password',function(){
    login.getEmail().type(this.data.email)
    login.getPassword().type(this.data.password)
})

When('User clicks on Login button',function(){
    login.getLoginButton().click()
})

Then('User is logged in and navigated to Home Page',function(){
    
})
