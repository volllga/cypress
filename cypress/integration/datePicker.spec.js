Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('data picker', () => {
    const date = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const today = new Intl.DateTimeFormat('en-AU', options).format(date);

    it('get today (default) data', () => {
        console.log(today);
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#dateOfBirthInput').should('have.value', today);
    })

    it('get data hard-coding', () => {
        // this is a hard coding
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('June');
        cy.get('.react-datepicker__year-select').select('2014');
        cy.get('.react-datepicker__month').contains('24').click();
        cy.get('#dateOfBirthInput').should('have.value', '24 Jun 2014');
    })

    it('get data', () => {
        // падает на Jul и Jun
        let n = Math.random() * 10000;
        // let date = new Date(1985, 7, 27);
        date.setDate(date.getDate() - n); // now - 5 days
        console.log(date);
        const datePast = date.toLocaleString('en-AU', {day: '2-digit', month: 'short', year: 'numeric'});
        // you can use const datePast = pastDay + ' ' + pastMonth + ' ' + pastYear;
        // const datePast = new Intl.DateTimeFormat('en-AU', options).format(data + 5); // change format of data
        console.log(datePast);
        const pastDay = date.getDate();
        let pastMonth = date.toLocaleString('en-AU', {month: 'long'});
        pastMonth = pastMonth[0].toUpperCase() + pastMonth.slice(1);
        const pastYear = date.getFullYear();

        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select(pastMonth);
        cy.get('.react-datepicker__year-select').select(pastYear.toString());
        cy.get('.react-datepicker__month').contains(pastDay).click();
        cy.get('#dateOfBirthInput').should('have.value', datePast);

    })
})