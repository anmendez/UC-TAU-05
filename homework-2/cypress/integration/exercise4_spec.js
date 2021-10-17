/// <reference types="cypress" />
describe('Exercise 4', () => {
    before(() => {
        cy.visit('/challenges/actions')
    });
    context('Popover and canvas', () =>{
        it('Should display a popover element', () => {
            cy.get('.action-btn').click({ force: true });
            cy.contains('This popover shows up on click').should('be.visible');            
        });
        it('Should show up red dots in their corresponding position', () => {
            cy.get('#action-canvas').click(80, 75);
            cy.get('#action-canvas').click(170, 75);
            cy.get('#action-canvas').click(80, 165);
            cy.get('#action-canvas').click(125, 190);
            cy.get('#action-canvas').click(150, 185);
            cy.get('#action-canvas').click(170, 165);

           
        });
    });
    /*context('Multiple clicks and force', () =>{
        it('', () => {
            cy.get('#couponCode1').type('I love Cypress{enter}');
            cy.contains('Your form has been submitted!').should('be.visible');
        });
    });*/
});