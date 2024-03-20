export class ProductsPage {
    protected locators: {
        inventoryContainer: string;
    }

    constructor() {
        this.locators = {
            inventoryContainer: '#inventory_container',
        };
    }

    private get inventoryContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.locators.inventoryContainer);
    }

    public load() {
        cy.visit('/inventory.html');
    }

    public isInventoryContainerDisplayed() {
        return this.inventoryContainer.should('be.visible');
    }
}