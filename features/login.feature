@regression @loginFeature
Feature: [Epic HW-148] - Login

  As a Headway product owner I want only users with valid and active credentials to have access to the system to prevent unauthorized access

  Scenario: [HW-548] Login - Login screen
    Given I am on the login page
    Then the Login Screen is shown with the welcome message "Welcome to Headway"

  Scenario: [HW-1532] Login - Login screen
    Given I am on the login page
    When clicks on the Login button
    Then the Microsoft login is shown

  Scenario: [HW-1533] Login - Log in error for invalid user
    Given I am on the login page
    And clicks on the Login button
    And the Microsoft login is shown
    When I login with wrong username "invalid-email@gdmseeds.com"
    Then an error message is displayed in the Microsoft login pop-up "This username may be incorrect. Make sure you typed it correctly. Otherwise, contact your admin."

@only
  Scenario Outline: [HW-1536] Login - Log in error for invalid password
    Given I am on the login page
    When I login with username <validUsername> and wrong password <invalidPassword>
    Then an error message is displayed in the Microsoft log in pop-up for wrong password <paswordErrormessage>
    Examples:
      |      validUsername       |   invalidPassword   |                        paswordErrormessage                                   |
      | ext.hmartin@gdmseeds.com | InvalidPassword123! | Your account or password is incorrect. If you don't remember your password,  |

  Scenario Outline: [HW-1539] As a user, I can log into the headway web page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    Examples:
      |        username          |    password      | message        |
      | ext.hmartin@gdmseeds.com | MansaContrasena! | Series Manager |