describe('Dropdowns', () => {

    before('go to the site', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });

    it('choose one option', () => {
        cy.get('#dropdown-class-example').select('option2')
            .should('contain', 'Option2');  // cy.get('').should('have.css', 'background-color', 'rgb(34,43.69)'
    });

    it('choose a list of options', () => {
        cy.get('#dropdown-class-example').then(options => {


            cy.get('#dropdown-class-example option').each( item => {
                const text = item.text().trim();
                console.log(item, text);
                cy.wrap(item).should('contain', text)
            })
        })
    })
})

