/// <reference types="cypress" />
describe('Exercise 1', () => {
    before(() => {
        cy.visit('/challenges/actions')
    });
    context('Step 1', () =>{
        it('Should type email inside the email input', () => {
            cy.get('.form-group #email1').type('fake@email.com').should('have.value','fake@email.com');
        });
    })
    context('Step 2', () => {
        it('Should send ctrl A to select and delete input', () => {
            cy.get('.form-group #email1').type('{selectall}{del}');
            cy.get('.form-group #email1').should('be.empty');
        });
    })
    context('Step 3', () => {
        it('Should force typing the words in disabled area', () => {
            cy.get('.action-disabled').type('Text typed inside disabled textarea', { force: true });
            cy.get('.action-disabled').invoke('attr','value','Text typed inside disabled textarea').should('have.attr','value','Text typed inside disabled textarea', { force: true });
            
        });
    })
});
