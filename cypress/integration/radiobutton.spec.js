//document.querySelector('#checkBoxOption1').checked   Ответ будет false or true

describe('lesson 03-14 Check radiobuttons'  , () =>{

    it('radio button', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.contains('legend','Radio Button Example')
            .parents('fieldset')
            .find('.radioButton')
            .then(radiobuttons => {

                console.log(radiobuttons);

                cy.wrap(radiobuttons)
                    .first()
                    .check({force: true})  // {force: true} flag works if element don't visible in DOM
                    .should('be.checked');

                cy.wrap(radiobuttons)
                    .eq(1)  //index of the radio buttons list
                    .check()
                    .should('be.checked');

                cy.wrap(radiobuttons)
                    .first()
                    .should('not.be.checked');

                cy.wrap(radiobuttons)
                    .eq(2)  //index of the radio buttons list
                    .check()
                    .should('be.checked');

                cy.wrap(radiobuttons)
                    .eq(1)
                    .should('not.be.checked');  //'be.disabled'
            })

    })
})