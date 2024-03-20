export class HomePage {
    protected locators: {
        signupLogin: string;
        consent: string;
    }

    constructor() {
        this.locators = {
            signupLogin: 'a[href="/login"]',
            consent: '[aria-label="Consent]',
        }
    }

    private get signupLoginLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.signupLogin);
    }

    private get consent(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.consent);
    }

    public load(): void {
        cy.visit('/');
    }

    public isConsentDisplayed() {
        return cy.isElementDisplayed(this.locators.consent);
    }

    public clickConsent(): void {
        this.consent.click();
    }

    public clickSignupLogin(): void {
        this.signupLoginLink.click();
    }
}