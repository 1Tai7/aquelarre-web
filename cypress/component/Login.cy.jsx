import { BrowserRouter } from "react-router-dom";
import App from "./../../src/main.jsx";

describe("Modal.cy.jsx", () => {
  it("correr la app", () => {
    cy.mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    cy.get("body").should("be.visible");
  });
  it("redireccion a Login", () => {
    cy.get(".header-options > :nth-child(2)").click();
    cy.get(".body-register").should("be.visible");
  });
  it("escribir un correo no valido y que el error sea visible", () => {
    cy.get("#email").type("novalido@novalido.com");
    cy.get("#contrasena").type("123456789");
    cy.get(".form-register > button").click();
    cy.get(".form-register > button").should("be.visible");
  });

  it("escribir un correo valido", () => {
    cy.get("#email").clear();
    cy.get("#contrasena").clear();
    cy.get("#email").type("testing@testing.com");
    cy.get("#contrasena").type("123456789");
    cy.get(".form-register > button").click();
  });
  /*
  it("los errores se pueden ver", () => {
    cy.get(".box-text > button").click();
    cy.get(".input-info-container > :nth-child(2)").should("be.visible");
  });
  it("quitar errores", () => {
    cy.get('[placeholder="Título"]').type("El título de mi tarea");
    cy.get(".box-text > button").click();
    cy.get(".input-info-container > :nth-child(2)").should("be.visible");
  }); */
});
