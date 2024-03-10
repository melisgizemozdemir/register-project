import { errorMessages } from "../../src/components/Register";

beforeEach(() => {
  cy.visit('/');
});

describe('Register Page', () => {
  describe('Error Page', () => {
  it('name input throws error for 2 chars', () => {

    //Act
    cy.get('[data-cy = "ad-input"]').type('em');
    //Assert
    cy.contains(errorMessages.ad);


  });

  it('Surname input throws error for 2 chars', () => {

    //Act
    cy.get('[data-cy = "soyad-input"]').type('sa');

    //Assert
    cy.contains(errorMessages.soyad);
  });

  it('Email input throws error for 2 chars', () => {

    //Act
    cy.get('[data-cy = "email-input"]').type('mre@wit.');

    //Assert
    cy.contains(errorMessages.email);
  });

  it('Password input throws error for 2 chars', () => {

    //Act
    cy.get('[data-cy = "password-input"]').type('1234');
    //Assert
    cy.contains(errorMessages.password);


  });

  it('Button is disabled for unvalidated inputs.', () => {

    //Act
    cy.get('[data-cy = "password-input"]').type('1234');
    //Assert
    cy.get('[data-cy = "submit-button"]').should('be.disabled');
  });

});

});
