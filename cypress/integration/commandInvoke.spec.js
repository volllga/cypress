Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('invoke command', () => {

    it('invoke command', () => {
        cy.visit('http://automationpractice.com/');

        cy.contains('.login', 'Sign in').click();

        cy.get('[for="email"]').should('contain', 'Email address');

        cy.get('[for="email"]').then(label => {                            //JQuery object
            expect(label.text()).to.equal('Email address');
        });

        cy.get('[for="email"]').invoke('text').then(text => {
            expect(text).to.equal('Email address');
        });
    })

    it('invoke command verify the class name', () => {
        cy.visit('http://uitestingplayground.com/click');

        cy.get('#badButton')
            .invoke('attr', 'class')
            .should('contain', 'btn-primary')

        cy.get('#badButton')
            .click()
            .invoke('attr', 'class')
            .should('contain', 'btn-success');

        // то же самое
        cy.get('#badButton')
            .click()
            .invoke('attr', 'class')
            .then(classValue => {
                expect(classValue).to.contain('btn-success');
            });
    })

    it.only('assert value', () => {

        cy.visit('https://www.techlistic.com/p/selenium-practice-form.html');

        cy.get('#continents').select('Europe')
            .invoke('prop', 'value').should('contain', 'Europe')
        })
})