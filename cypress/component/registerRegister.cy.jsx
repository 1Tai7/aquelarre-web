import React from "react";
import Register from "../../src/components/register/register";
import { BrowserRouter } from "react-router-dom";

describe("<Register />", () => {
  beforeEach(() => {
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  });

  it("renders", () => {
    // see: https://on.cypress.io/mounting-react

    cy.get(".register-body").should("be.visible");
  });
  it("errores", () => {
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    cy.get(".form-register > button").click();
  });

  it("llenar datos", () => {
    cy.get("#mostrar-emojis").click();
    cy.get(".avatar-container > :nth-child(1)").click();
    cy.get("#nombre").type("testing");
    cy.get("#alias").type("testing");
    cy.get("#contrasena").type("123456789");
    cy.get("#email").type("testing@testing.com");
    cy.get(".form-register > button").click();

    cy.get(":nth-child(16)").should("be.visible");
    // cy.get(":nth-child(15)").should("be.visible");
  });

  it("el correo ya esta registrado", () => {
    cy.get("#mostrar-emojis").click();
    cy.get(".avatar-container > :nth-child(1)").click();
    cy.get("#nombre").type("testing");
    cy.get("#alias").type("testing");
    cy.get("#contrasena").type("123456789");
    cy.get("#email").type("testing@testing.com");
    cy.get(".form-register > button").click();

    cy.get(":nth-child(15)").should("be.visible");
  });
});
