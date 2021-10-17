/// <reference types="cypress" />
describe('Exercise 2', () => {
    before(() => {
        cy.visit('/challenges/actions')
    });
    context('Part 1: Focus', () =>{
        it('Should type email inside the email input', () => {
            cy.get('#password1').type('1q2w3e4r').click();
            cy.get('label').contains('Password').should('have.css','color','orange');
        });
    })
    context('Part 2: Blur', () => {
        //it('Should send ctrl A to select and delete input', () => {
        //    cy.get('#password1').type('1q2w3e4r').click();
        //    cy.get('#password1').should('have.css', 'border', '5px solid orange')
        //});
    })
});