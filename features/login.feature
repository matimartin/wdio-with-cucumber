@regression @loginFeature
Feature: Login

  Feature description

  Scenario: Login - Login screen
    Given I am on the login page
    Then the Login Screen is shown with the welcome message "Welcome to the heaven"

  Scenario: Login - Login screen
    Given I am on the login page
    When clicks on the Login button
    Then the Microsoft login is shown

  Scenario: Login - Log in error for invalid user
    Given I am on the login page
    And clicks on the Login button
    And the Microsoft login is shown
    When I login with wrong username "invalid-email@google.com"
    Then an error message is displayed in the Microsoft login pop-up "This username may be incorrect. Make sure you typed it correctly"

@only
  Scenario Outline: Login - Log in error for invalid password
    Given I am on the login page
    When I login with username <validUsername> and wrong password <invalidPassword>
    Then an error message is displayed in the Microsoft log in pop-up for wrong password <paswordErrormessage>
    Examples:
      |      validUsername         |   invalidPassword     |       paswordErrormessage            |
      | somevalidemailn@google.com | InvalidPassword123! | Your account or password is incorrect. |

  Scenario Outline: As a user, I can log into the headway web page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    Examples:
      |        username            |      password        |     message       |
      | somevalidemailn@google.com | SupersecurePassword! | Some Cool Message |
