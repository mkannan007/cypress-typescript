import { user, homePage, loginPage, signupPage } from "pages/base.page";

describe('Login Test cases', () => {
    it.only('should be able to login', () => {

        homePage.load()

        cy.task('log', 'teststststts');
        // cy.log(homePage.isConsentDisplayed().toString());

        cy.log('--------------------------------------');
        cy.log('--------------------------------------');
        homePage.clickSignupLogin();


        loginPage.signup(user);

        signupPage.fillForm(user);

        // cy.task('log', productsPage.isInventoryContainerDisplayed());

        // expect(productsPage.isInventoryContainerDisplayed()).to.be.true;
    });
});
