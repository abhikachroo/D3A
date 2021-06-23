Feature: Projects Page Feature

Scenario: Ability to create Project
Given User is on Home Page
When User clicks on Project Icon in Menu
And User clicks on New Project button
And User adds Project Name and Description
And User clicks on Add button
Then Validate Project is created and displayed on Home Page 

Scenario: Ability to create Simulation in Project
Given User is on Home Page 
And Project is created by User
When User clicks on Project Name
And User clicks on new Simulation button
And User enters Simulation details
And User clicks on Next button
Then Validate Simulation is created under Project   