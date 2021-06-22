Feature: Login & Landing Page Feature

Scenario: Login Page Navigation
Given User is on D3A Landing Page
When User clicks on Login button
Then Validate user is navigated to Login Page

Scenario: Login to D3A
Given User is on D3A Login Page
When User enters Email and Password
And User clicks on Login button
Then Validate user is logged in and navigated to Home Page


    