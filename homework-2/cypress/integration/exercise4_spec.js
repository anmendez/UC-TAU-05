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

           /* **Env Variable is not cooperating :v**
           cy.eyesOpen({
                appName: 'Testing Playground',
                testName: 'Red dots in position',
              });
              cy.eyesCheckWindow( );
              cy.eyesClose();*/
        });
    });
    context('Multiple clicks and force', () =>{
        it('Should show a popover for each clicked element', () => {
            cy.get('.label-primary').click({ multiple: true });
            cy.get('.popover-content').contains('clicked').should('be.visible');
        });
        it('Should force click on covered button', () => {
            cy.get('.btn-primary').click({ force: true });
            cy.contains('This popover shows up because we forced the click on the button').should('be.visible');
        });
    });
});