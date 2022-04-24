const email = 'bob_jonny@gmail.com'
const wrongEmail = "bob_jonnygmail.com"
describe("sign IN form", () => {

    it("CREATE AN ACCOUNT with valid email", () => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
        cy.get('#email_create').type(email);
        cy.contains('Create an account').click();
    });

    it("CREATE AN ACCOUNT with invalid email", () => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
        cy.get('#email_create').type(wrongEmail);
        cy.contains('Create an account').click();

    })
})