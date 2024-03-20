import { defineConfig } from 'cypress';

export default defineConfig({
    
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    reporterOptions: {
        reportDir: 'cypress/report',
        charts: true,
        reportPageTitle: 'Cypress Inline Reporter',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: true,
        videoOnFailOnly: true,
        quiet: false,
    },
    e2e: {
        baseUrl: 'https://www.automationexercise.com/',
        video: true,
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            require('cypress-mochawesome-reporter/plugin')(on);

            on('task', {
                log(message) {
                    console.info(message);
                    return message;
                },
            });
            return config;
        },
    },
});
