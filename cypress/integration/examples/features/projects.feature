Feature: Projects Page Feature

Scenario: Ability to create Project
Given User is on Home Page
When User clicks on Project Icon in Menu
And User clicks on New Project button
And User adds Project Name and Description
And User clicks on Add button
Then Validate Project is created and displayed on Home Page  