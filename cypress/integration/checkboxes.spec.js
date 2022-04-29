describe('check boxes', () => {

    before('visit rahulshettyacademy.com ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    })

    it('check one checkbox', () => {
        cy.get('[type="checkbox"]')
            .eq(1)
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked');
    })

    it('check all checkboxes', () => {
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked')
            .eq(2)
            .click()
            .should('not.be.checked');
        console.log(cy.get('[type="checkbox"]'));
    })

    it('list of checkboxes', () => {
        cy.get('[type="checkbox"]').then(boxes => { // .then Enables you to work with the subject yielded from the previous command.
            console.log(boxes);
            cy.wrap(boxes);
        })
    })
})