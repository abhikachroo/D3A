/// <reference types="Cypress"/>
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../pageObjects/homePageObjs'
import ProjectPage from "../pageObjects/projectObjs";
import LoginPage from "../pageObjects/loginPageObjs";
const home= new HomePage()
const project= new ProjectPage()
const login =new LoginPage()

Given('User is on Home Page',function(){
    cy.login()
})
When('User clicks on Project Icon in Menu',function(){
    home.getProjectsIcon().click()
})
When('User clicks on New Project button',function(){
    project.getNewProject().click()
    cy.wait(2000)
})
When('User adds Project Name and Description',function(){
    project.getProjectName().type(this.data.projectName)
    project.getProjectDesc().type(this.data.projectDesc)
})
When('User clicks on Add button',function(){
    project.getAddButton().click()
})
Then('Validate Project is created and displayed on Home Page',function(){
    project.getCreateProjectName().should('have.text',this.data.projectName)
})

Given('Project is created by User',function(){
    home.getProjectsIcon().click()
    project.getCreateProjectName().should('have.text',this.data.projectName)
})
When('User clicks on Project Name',function(){   
    home.getProjectsIcon().click()
    project.getCreateProjectName().click()
})
When('User clicks on new Simulation button',function(){
    
    project.getNewSimulationButton().click()
})
When('User enters Simulation details',function(){
    project.getSimulationName().clear()
    project.getSimulationName().type(this.data.simulationName)
})
When('User clicks on Next button',function(){
    project.getNextButton().click()
    cy.wait(2000)
})
Then('Validate Simulation is created under Project',function(){    
    home.getProjectsIcon().click()
    project.getCreatedSimulationName().should('have.text',this.data.simulationName)  
})