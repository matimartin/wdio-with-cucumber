const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnLogin(){
        return $('button._primary_1cvem_5._loginbutton_1ogk7_56');
    }

    get welcomeMessage(){
        return $('h1._title_x6167_5');
    }

    get inputUsername () {
        return $('#i0116');
    }

    get btnNext(){
        return $('#idSIButton9');
    }

    get inputPassword () {
        return $('#i0118');

    }

    get btnSignIn () {
        return $('#idSIButton9');
    }

    get btnSendMessageToPhoneNumber () {
        return $('div[data-bind="text: display"]');
    }

    get checkbox1 () {
        return $('#idChkBx_SAOTCC_TD');
    }

    get btnVerify () {
        return $('#idSubmit_SAOTCC_Continue');
    }

    get checkbox2 () {
        return $('#KmsiCheckboxField');
    }

    get btnStaySignIn () {
        return $('#idSIButton9');
    }

    get usernameErrorMessage(){
        return $('#usernameError');
    }

    get passwordErrorMessage(){
        return $('#passwordError');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.btnLogin.click();
        await this.inputUsername.setValue(username);
        await this.btnNext.click();

        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSignIn.waitForDisplayed();
        await this.btnSignIn.waitForExist();

        await this.btnSignIn.click();
        await this.btnSendMessageToPhoneNumber.click();


        await this.checkbox1.waitForDisplayed();
        await browser.pause(20000);
        await this.checkbox1.click();
        await this.btnVerify.click();

        await this.checkbox2.waitForDisplayed();
        await this.checkbox2.click();
        await this.btnStaySignIn.click();
    }

    async clickOnLoginButton() {
        await this.btnLogin.click();
    }

    async loginWithInvalidUser(invalidUsername) {
        await this.inputUsername.setValue(invalidUsername)
        await this.btnNext.click();
    }

    async loginWithInvalidPassword(username, wrongPassword) {
        await this.btnLogin.click();
        await this.inputUsername.setValue(username);
        await this.btnNext.click();

        await this.inputPassword.setValue(wrongPassword);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
