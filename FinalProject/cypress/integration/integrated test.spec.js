/// <reference types="cypress" />
describe('Integrated end to end test suit', () => {
    before(() => {
        cy.visit('/signin');
    });

    context('Fill in the login form', () =>{
        it('Should fill in the login form', () => {
            cy.get("#username").type("ofonsecasa");
            cy.get("#password").type("secret");
            cy.get(".MuiButton-label").click();
        });
        it('Should assert the account has been created', () => {
            cy.contains("Logout").should("be.visible");
        });
    })
    context('Register with a bank account account', () =>{
        it('Should click Next button',() => {
            cy.get('.MuiButton-label').contains('Next').click({force:true});
        });
        it('Should fill out the create bank account form',() => {
            cy.get('input[placeholder*="Bank Name"]').type("Bac San Jose");
            cy.get('input[placeholder*="Routing Number"]').type("123456789");
            cy.get('input[placeholder*="Account Number"]').type("123456789");
        });
        it('Should click Save button',() => {
            cy.contains('Save').click();
            cy.contains('Finished').should("be.visible");
            cy.contains('Done').click();
        });
        it('Should assert the bank account has been created', () =>{
            cy.contains('Bank Accounts').click();
            cy.contains('No Bank Accounts').should('not.be.visible');
        });
    })

    context('Create a bank account', () => {
        it('Should click Create button',() => {
            cy.get('.MuiGrid-root').contains('Create').click({force:true});
        });
        it('Should fill out the create bank account form',() => {
            cy.get('input[placeholder*="Bank Name"]').type("Banco Costa Rica");
            cy.get('input[placeholder*="Routing Number"]').type("123456789");
            cy.get('input[placeholder*="Account Number"]').type("123456789");
        });
        it('Should click Save button',() => {
            cy.contains('Save').click();
            cy.contains('Banco Costa Rica').should('be.visible');
        });
    });

    context('Delete a bank account', () => {
        it('Should click the Delete button',() => {
            cy.get('.MuiGrid-root').contains('Delete').click({force:true});
            cy.contains('(Deleted)').should('be.visible');
        });
    });

    context('Create a new transaction', () => {
        it('Should go to Home page',() => {
            cy.contains('Home').click({force:true});
    
        });
        it('Should create a new transaction',() => {
            cy.get('.MuiGrid-root').contains('Create A Transaction').click({force:true});
            cy.get('#user-list-search-input').type('Andrea Mendez');
            cy.contains('Andrea Mendez').click();

            cy.get('#amount').type('1000');
            cy.get('#transaction-create-description-input').type('Lorem Ipsum Dolor sit');
            cy.get('.MuiGrid-root').contains('Request').click({force:true});

            cy.contains('Create Another Transaction').should('be.visible');
        });
    });
});