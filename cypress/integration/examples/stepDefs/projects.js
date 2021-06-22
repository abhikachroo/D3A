/// <reference types="Cypress"/>
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../pageObjects/homePageObjs'
import ProjectPage from "../pageObjects/projectObjs";
const home= new HomePage()
const project= new ProjectPage()

Given('User is on Home Page',function(){
    home.getHomeH1().should('have.text','Home')
})
When('User clicks on Project Icon in Menu',function(){
    home.getProjectsIcon().click()
})
When('User clicks on New Project button',function(){
    project.getNewProject().click()
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