/// <reference types="cypress" />
describe('Exercise 3', () => {
    before(() => {
        cy.visit('/challenges/actions')
    });
    context('Submitting a form', () =>{
        it('Should submit form', () => {
            cy.get('#couponCode1').type('I love Cypress{enter}');
            cy.contains('Your form has been submitted!').should('be.visible');
        });
    });
});