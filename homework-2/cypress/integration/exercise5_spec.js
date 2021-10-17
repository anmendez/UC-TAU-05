/// <reference types="cypress" />
describe('Exercise 5', () => {
    before(() => {
        cy.visit('/challenges/actions')
    });
    context('Double click element', () =>{
        it('Should double click text field', () => {
            cy.get('.action-div').contains('Double click to edit').dblclick({force: true});
            cy.get('.action-div').next().get('.action-input-hidden');     
        });
    });
});