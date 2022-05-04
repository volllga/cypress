Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Tool Tips', () => {

    it('', () => {
        cy.visit('https://demoqa.com/tool-tips');

    })

    it('', () => {

    })


})