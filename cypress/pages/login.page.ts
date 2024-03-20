import { UserModel } from "models/user.model";

export class LoginPage {
    protected locators: {
        signupName: string;
        signupEmail: string,
        signupButton: string,
    };

    constructor() {
        this.locators = {
            signupName: '[data-qa="signup-name"]',
            signupEmail: '[data-qa="signup-email"]',
            signupButton: '[data-qa="signup-button"]',
        };
    }

    private get signupNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.signupName);
    }

    private get signupEmailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.signupEmail);
    }

    private get signupButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.signupButton);
    }

    public load() {
        cy.visit('/login');
    }

    public signup(user: UserModel) {
        this.signupNameField.type(`${user.setFirstname()} ${user.setLastname()}`);
        this.signupEmailField.type(user.setEmail());
        this.signupButton.click();
    }
}