Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('tables', () => {

    it('edit', () => {
        cy.visit('http://the-internet.herokuapp.com/tables');

        cy.get('#table1').contains('tr', 'Frank').then(tableRow => {
            cy.wrap(tableRow).find('[href="#edit"]')
                .invoke('prop', 'baseURI').should('not.contain', "#edit");

            cy.wrap(tableRow).find('[href="#edit"]').click()
                .invoke('prop', 'baseURI').should('contain', "#edit");

            cy.wrap(tableRow).find('td')
                .eq(2).should('contain', "fbach@yahoo.com");
        });
    });

    it('delete', () => {
        cy.visit('http://the-internet.herokuapp.com/tables');

        cy.get('#table1').contains('tr', 'Jason').then(tableRow => {
            cy.wrap(tableRow).find('[href="#delete"]')
                .invoke('prop', 'baseURI').should('not.contain', "#delete");

            cy.wrap(tableRow).find('[href="#delete"]').click()
                .invoke('prop', 'baseURI').should('contain', "#delete");
        });
    });

    // it('add', () => {
    //     cy.get('thead').find('button-add').click();
    //     cy.get('thead').find('tr').eg(2).then(tableRow => {
    //         cy.wrap(tableRow).find('[placeholder="Name"]').type('Andy');
    //         cy.wrap(tableRow).find('[placeholder="age"]').type('23');
    //         cy.wrap(tableRow).find('button-save').click();
    //         а далее - проверить, что данные сохранились - смотри выше
    //     });
    // });

    it('search', () => {
        cy.visit('https://demoqa.com/webtables');

        cy.get('[placeholder="Type to search"]').type('Alden');
        cy.wait(500);
        cy.get('[class="input-group-append"]').click();
        cy.get('[role="row"] div').should('contain','Alden');

            //cy.get('table tr').each(tableRow => {
            //    cy.wrap(tableRow).find('td').eq(0)
            //       .should('contain', 'Alden')
            //     });

            // .then(tableRow => {
            // cy.wrap(tableRow).find('[href="#delete"]')
            //     .invoke('prop', 'baseURI').should('not.contain', "#delete");
            //
            // cy.wrap(tableRow).find('[href="#delete"]').click()
            //     .invoke('prop', 'baseURI').should('contain', "#delete");
    });

    it('search through a list', () => {
        cy.visit('https://demoqa.com/webtables');

        const names = ['Alden', 'Kierra', 'Cierra', 'xxx'];

        cy.wrap(names).each(name => {
            cy.get('[placeholder="Type to search"]').clear().type(name);
            cy.wait(500);
            cy.get('[class="input-group-append"]').click();
            if(name === 'xxx'){
                cy.get('[class="rt-td"] span').should("not.contain", 'xxx');  // no results
            } else {
                cy.get('[role="row"] div').should("contain", name);
            }
        });
    });
})