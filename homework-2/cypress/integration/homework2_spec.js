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