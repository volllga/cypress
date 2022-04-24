describe('then and wrap metods', () => {

    it('', () => {
        cy.visit('https://demoqa.com/');
        cy.contains('div', 'Forms').click();
        cy.contains('ul', 'Practice Form').click();
        // cy.contains('div', 'Student Registration Form').find('#userName-wrapper [id="userName-label"]').should('contain', 'Name');
        // cy.contains('div', 'Student Registration Form').find('#userEmail-label').should('contain', 'Email');

        //selenium
        // const nameForm = cy.contains('div', 'Student Registration Form');
        // nameForm.find('userName-wrapper').should('contain', 'Name');

        cy.contains('div', 'Student Registration Form').then(studRegForm => {
            const nameLabel = studRegForm.find('#userName-wrapper [id="userName-label"]').text(); //JQuery
            console.log(studRegForm.find('#userName-wrapper [id="userName-label"]'));
            const emailLabel = studRegForm.find('#userEmail-label').text();
            console.log(nameLabel, emailLabel);
            expect(nameLabel).to.equal('Name'); //chai assertion
            expect(emailLabel).to.equal('Email');

            cy.contains('div', 'Student Registration Form').then(secondForm =>{
                const emailLabel2 = studRegForm.find('#userEmail-label').text();
                expect(emailLabel2).to.equal(emailLabel);

                cy.wrap(secondForm).find('#userName-wrapper [id="userName-label"]') // cypress from JQuery
                                    .should('contain', 'Name');
            })
        } )

    })
})

// https://phptravels.com/demo