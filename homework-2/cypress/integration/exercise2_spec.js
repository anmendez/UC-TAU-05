/// <reference types="cypress" />
describe('Exercise 2', () => {
    before(() => {
        cy.visit('/challenges/actions')
    });
    context('Part 1: Focus', () =>{
        it('Should turn label & input border into orange color', () => {
            cy.get('#password1').type('1q2w3e4r');
            cy.get('#password1').prev().should('have.attr','style', 'color: orange;')
            cy.get('#password1').prev().should('have.css','border', '0px none rgb(255, 165, 0)')
        });
    });

    context('Part 2: Blur', () => {
        it('Should turn label and input border into red color', () => {
            cy.get('#fullName1').click();
            cy.get('#fullName1').prev().click();
            cy.get('#fullName1').prev().should('have.attr','style', 'color: red;')
            cy.get('#fullName1').prev().should('have.css','border', '0px none rgb(255, 0, 0)')

        });
    })
});