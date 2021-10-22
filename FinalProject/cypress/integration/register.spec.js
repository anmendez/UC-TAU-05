/// <reference types="cypress" />
describe('Register', () => {
    before(() => {
        cy.visit('/signup');
    });
    context('Fill in the form', () =>{
        it('Should fill in the register form', () => {
            cy.get("#firstName").type("Edgar");
            cy.get("#lastName").type("Johns");
            cy.get("#username").type("Katharina_Bernier");
            cy.get("#password").type("secret");
            cy.get("#confirmPassword").type("secret");
            cy.get(".MuiTouchRipple-root").should("be.visible");
        });
    })
    context('Click Sign up button', () => {
        it('Should click the sign up button', () => {
            cy.get(".MuiButton-label").click();
        });
    })
});
