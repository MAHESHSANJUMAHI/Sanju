Feature: Verify Login functionality

    Scenario: Verify Login with Valid credentials

        Given User Launch the Application
        When  User enter username as "Admin" password as "admin123"
        And   User clicks on login Button
        Then  User should be navigated to Dashbaord page

    Scenario: Verify Login with Valid username and Invalid Password

        Given User Launch the Application
        When  User enter username as "Admin" password as "dghjh"
        And   User clicks on login Button
        Then  User should get login error message 


    Scenario: Verify Login with Invalid username and Valid password

        Given User Launch the Application
        When user enter username as 'sgdgdds' password as 'admin123'
        And User clicks on login Button 
        Then  User should get login error message 

    Scenario: Verify Login with Invalid username nad Invalid password 

        Given User Launch the Application
        When user enter username as 'ffyfhhfh' password as 'ghdfhgf'
        And User clicks on login Button
        Then  User should get login error message 

    Scenario: Verify Login without username nad password 

        Given User Launch the Application 
        When User clicks on login Button 
        Then  User should get login error message 