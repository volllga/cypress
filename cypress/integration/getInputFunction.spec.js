const text = "dress";
const locator = "#search_query_top";

function getInput(locator, text) {
    cy.get(locator).type(text);
}
describe("different locators", () => {

    beforeEach("before each test go to base URL", () => {
        cy.visit("/");
    })

    it("search on the main page", () => {
        getInput(locator, text);
        cy.get(locator).click();
        cy.get(locator).clear()
    });

    it("search by attribute name", () => {
        cy.visit('/index.php?controller=contact')
        getInput("#message", "my little message")
    });


})
