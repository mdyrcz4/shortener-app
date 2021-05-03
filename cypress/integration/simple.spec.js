describe("My first test", function () {
    it("Get types and asserts", function () {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();

        cy.url()
            .should('include', '/commands/actions');

        cy.get('.action-email')
            .type('fake@example.com')
            .should('have.value', 'fake@example.com');
    });
})