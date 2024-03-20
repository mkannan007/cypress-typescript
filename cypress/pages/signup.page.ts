import { UserModel } from "models/user.model";

export class SignUpPage {
    protected locators: {
        text_center: string;
        title_mr: string;
        title_mrs: string;
        name: string;
        email: string;
        password: string;
        dobDays: string;
        dobMonths: string;
        dobYears: string;
    };

    constructor() {
        this.locators = {
            text_center: '.text-center',
            title_mr: '#id_gender1',
            title_mrs: '#uniform-id_gender2',
            name: '#name',
            email: '#email',
            password: '#password',
            dobDays: '#days',
            dobMonths: '#months',
            dobYears: '#years',
        }
    }

    private get textCenter(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.text_center);
    }

    private get titleMr(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.title_mr);
    }

    private get titleMrs(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.title_mrs);
    }

    private get nameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.name);
    }

    private get emailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.email);
    }

    private get passwordField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.password);
    }

    private get dobDays(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.dobDays);
    }

    private get dobMonths(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.dobMonths);
    }

    private get dobYears(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.dobYears);
    }

    public load() {
        cy.visit('/signup');
    }

    public getTextCenterDisplayed() {
        return this.textCenter.first().then((element) => {
            return element.text().toString();
        });
    }

    public selectTitleMr() {
        this.titleMr.should('not.be.checked').click({ force: true }).should('be.checked');
    }

    public selectTitleMrs() {
        this.titleMrs.click();
    }

    public enterName(name: string) {
        this.nameField.clear;
        this.nameField.type(name);
    }

    public enterEmail(email: string) {
        this.emailField.type(email);
    }

    public enterPassword(password: string) {
        this.passwordField.type(password);
    }

    public selectDay(day: string) {
        this.dobDays.select(day);
    }

    public selectMonth(month: string) {
        this.dobMonths.select(month);
    }

    public selectYear(year: string) {
        this.dobYears.select(year);
    }

    public fillForm(user: UserModel) {
        this.selectTitleMr();
        this.selectTitleMrs();
        this.enterName(user.setFirstname() + ' ' + user.setLastname());
        // this.enterEmail(user.setEmail());
        this.enterPassword(user.setPassword());
        this.selectDay('12');
        this.selectMonth('January');
        this.selectYear('1990');
    }
}