/// <reference types="cypress" />
describe('Exercise 6', () => {
    before(() => {
        cy.visit('/challenges/actions')
    });
    context('Right click element', () =>{
        it('Should right click text field', () => {
            cy.get('.rightclick-action-div').contains('Right click to edit').rightclick();
            cy.get('.rightclick-action-div.hidden').contains('Right click to edit');   
        });
    });
});