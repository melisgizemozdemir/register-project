import { errorMessages } from "../../src/components/Register";

beforeEach(() => {
  cy.visit('/');
});

describe('Register Page', () => {

  describe('Error Messages', () => {

    it('Name throws error for 2 chars', () => {
      cy.get('[data-cy = "ad-input"]').type('me');
      cy.contains(errorMessages.ad);
    });

    it('Surname throws error for 2 chars', () => {
      cy.get('[data-cy = "soyad-input"]').type('oz');
      cy.contains(errorMessages.soyad);
    });

    it('Email input throws error for melis@wit.', () => {
      cy.get('[data-cy = "email-input"]').type('melis@wit.');
      cy.contains(errorMessages.email);
    });

    it('Password input throws error for 1234', () => {
      cy.get('[data-cy = "password-input"]').type('1234');
      cy.contains(errorMessages.password);
    });

    it('Button is disabled for unvalidated inputs.', () => {
      cy.get('[data-cy = "password-input"]').type('1234');
      cy.get('[data-cy = "submit-button"]').should('be.disabled');
    });

  });

  describe('Button enabled for validated inputs', () => {

    it.only('button enabled', () => {
      cy.get('[data-cy = "ad-input"]').type('Melis');
      cy.get('[data-cy = "soyad-input"]').type('Ozdemir');
      cy.get('[data-cy = "email-input"]').type('melis@wit.com.tr');
      cy.get('[data-cy = "password-input"]').type('1234Aa**');
      cy.get('[data-cy = "submit-button"]').should('not.be.disabled');
    });

  });

  it.only('Submits form on validated inputs', () => {
      cy.get('[data-cy = "ad-input"]').type('Melis');
      cy.get('[data-cy = "soyad-input"]').type('Ozdemir');
      cy.get('[data-cy = "email-input"]').type('melis@wit.com.tr');
      cy.get('[data-cy = "password-input"]').type('1234Aa**');
      cy.get('[data-cy = "submit-button"]').click();
      
      cy.get('[data-cy = "response-message"]').should('be.visible');

  });

});



 


