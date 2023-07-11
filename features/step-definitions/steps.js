const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/home.page');
const loginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When ("clicks on the Login button", async () => {
    await LoginPage.clickOnLoginButton()
});

When ("I login with wrong username {string}", async (invalidEmail) => {
    await LoginPage.loginWithInvalidUser(invalidEmail)
});

When (/^I login with username (.+) and wrong password (.+)$/, async (validUsername, invalidPassword) => {
    await LoginPage.loginWithInvalidPassword(validUsername, invalidPassword);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.seriesManagerTitle).toBeExisting();
    await expect(SecurePage.seriesManagerTitle).toHaveTextContaining(message);
});

Then("the Login Screen is shown with the welcome message {string}", async (welcomeMessage) => {
    await expect(LoginPage.welcomeMessage).toBeExisting();
    await expect(LoginPage.welcomeMessage).toHaveTextContaining(welcomeMessage);
});

Then ("the Microsoft login is shown", async ()=> {
    await expect(LoginPage.inputUsername).toBeExisting();
    await expect(browser).toHaveUrlContaining('https://login.microsoftonline.com');
});

Then ("an error message is displayed in the Microsoft login pop-up {string}", async (invalidUsernameMessage) => {
    await expect(loginPage.usernameErrorMessage).toHaveText(invalidUsernameMessage)
});

Then (/^an error message is displayed in the Microsoft log in pop-up for wrong password (.*)$/, async (paswordErrormessage) => {
    await expect(loginPage.passwordErrorMessage).toHaveText(paswordErrormessage)
});