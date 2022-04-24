// cypress recommend create your own locator: data-cy="something"

describe("different locators", () => {

    before('code before all tests', () => {
        cy.visit("http://automationpractice.com/index.php");
    })

    beforeEach('code before each test', () => {

    })

    afterEach("after each test clear text field", () => {
        cy.get(".button-search").click();
        cy.get("#search_query_top").click().clear()
    })

    it("search by ID locator and class name", () => {
        cy.get("#search_query_top").type("first");
    });

    it("search by tag name", () => {
        cy.get("footer");
    });

    it("search by attribute name", () => {
        cy.get('[placeholder]').type("search by attribute name");
    });

    it("search by attribute name and value", () => {
        cy.get('[placeholder="Search"]').type("search by attribute name and value");
    });

    it("search by class value", () => {
        cy.get('[class="search_query form-control ac_input"]').type("search by class value");
    });

    it("search by tag and attribute name with value", () => {
        cy.get('input[placeholder="Search"]').type("tag and attribute name with value");
    });

    it("search by two attributes", () => {
        cy.get('[type="text"][autocomplete="off"]').type("search by two attributes");
    });

    it("complex locator", () => {
        cy.get('input.search_query[autocomplete="off"]').type("complex locator");
    });

    it("child of element with text", () => {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.contains("#login_form", "Email address");
    });

    it.only("child of element with text", () => {
        cy.visit("/index.php?controller=authentication&back=my-account")
        cy.get("#email")
            .parents('form')
            .find('a')
            .should('contain', 'Forgot your password?');
    });


})
