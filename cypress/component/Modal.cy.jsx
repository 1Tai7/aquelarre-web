import { BrowserRouter } from "react-router-dom";
import App from "./../../src/main.jsx";
import Modal from "../../src/components/modal/modal.jsx";

describe("Modal.cy.jsx", () => {
  const data = {
    providerId: "firebase",
    proactiveRefresh: {
      user: {
        uid: "wMPfqhuRJJYxrrjdGlGl24cLouw2",
        email: "testalgo@testalgo.com",
        emailVerified: false,
        isAnonymous: false,
        providerData: [
          {
            providerId: "password",
            uid: "testalgo@testalgo.com",
            displayName: null,
            email: "testalgo@testalgo.com",
            phoneNumber: null,
            photoURL: null,
          },
        ],
        stsTokenManager: {
          refreshToken:
            "AMf-vBxT8jDx4Tvv3IZiMbdmqCjnYISw1Z2GqYcIlUi7-6gvdZ5sI7wdf3PzmH_1tQJTV0K9BXK2Evu6RFpsbsh2jvuya7AsO2A-0-LT5y7K8SU0bP6PcPTXlObv9UdoZNLXHf0i1lBcWHuu1UQ1b-Xyy61Iil93NA3IBGgkUK8k_YPmlA8PBew65EH-jEoGPH60Jqj49wY2W1uPtW1d5xDERsMdEIbmjQ",
          accessToken:
            "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJjNDAxN2U3MGE4MWM5NTMxY2YxYjY4MjY4M2Q5OThlNGY1NTg5MTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXF1ZWxhcnJlLTFiZWM4IiwiYXVkIjoiYXF1ZWxhcnJlLTFiZWM4IiwiYXV0aF90aW1lIjoxNzQxMTUzOTkzLCJ1c2VyX2lkIjoid01QZnFodVJKSll4cnJqZEdsR2wyNGNMb3V3MiIsInN1YiI6IndNUGZxaHVSSkpZeHJyamRHbEdsMjRjTG91dzIiLCJpYXQiOjE3NDExNTM5OTMsImV4cCI6MTc0MTE1NzU5MywiZW1haWwiOiJ0ZXN0YWxnb0B0ZXN0YWxnby5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdGFsZ29AdGVzdGFsZ28uY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BcX0_DLBp-x5ltsvk-VWqpeFmLnPMwMB7t62r6G_Mpbk1ujk6OPQNsa7fqbu0vu7zyOceltsZAYNoJNi0S94oYaBG9N41mBo1uAKfl1SIR1qajmnoFW9QCVFGhDwntSDeeFn_Ma8Gvw5Y3tsjUuH866IXlLhEWTbf3FCn9UfBsQT3q--rFvUh1HkOABaL79bnCnN0HU9xLQvDIEEUaa6BaBrgzFtOnw1FQYWjZpN_FOyHeYvzWjBqM2zxmvQLIgT4m-sZmDi4KQxqONpDwIC6QBlowiWdMOhNgVk9EGJ-UCzXyv_8O7HWy9fhPtxP84VMMN1ZhP0QXB2Ses7Vk7I5g",
          expirationTime: 1741157593351,
        },
        createdAt: "1741043028452",
        lastLoginAt: "1741153993389",
        apiKey: "AIzaSyA2s9hRWlSGhFO55i0YpCeNtIYViXyFY4w",
        appName: "[DEFAULT]",
      },
      isRunning: true,
      timerId: 27,
      errorBackoff: 30000,
    },
    reloadUserInfo: {
      localId: "wMPfqhuRJJYxrrjdGlGl24cLouw2",
      email: "testalgo@testalgo.com",
      passwordHash: "UkVEQUNURUQ=",
      emailVerified: false,
      passwordUpdatedAt: 1741043028452,
      providerUserInfo: [
        {
          providerId: "password",
          federatedId: "testalgo@testalgo.com",
          email: "testalgo@testalgo.com",
          rawId: "testalgo@testalgo.com",
        },
      ],
      validSince: "1741043028",
      lastLoginAt: "1741153993389",
      createdAt: "1741043028452",
      lastRefreshAt: "2025-03-05T05:53:13.389Z",
    },
    reloadListener: null,
    uid: "wMPfqhuRJJYxrrjdGlGl24cLouw2",
    auth: {
      apiKey: "AIzaSyA2s9hRWlSGhFO55i0YpCeNtIYViXyFY4w",
      authDomain: "aquelarre-1bec8.firebaseapp.com",
      appName: "[DEFAULT]",
      currentUser: {
        uid: "wMPfqhuRJJYxrrjdGlGl24cLouw2",
        email: "testalgo@testalgo.com",
        emailVerified: false,
        isAnonymous: false,
        providerData: [
          {
            providerId: "password",
            uid: "testalgo@testalgo.com",
            displayName: null,
            email: "testalgo@testalgo.com",
            phoneNumber: null,
            photoURL: null,
          },
        ],
        stsTokenManager: {
          refreshToken:
            "AMf-vBxT8jDx4Tvv3IZiMbdmqCjnYISw1Z2GqYcIlUi7-6gvdZ5sI7wdf3PzmH_1tQJTV0K9BXK2Evu6RFpsbsh2jvuya7AsO2A-0-LT5y7K8SU0bP6PcPTXlObv9UdoZNLXHf0i1lBcWHuu1UQ1b-Xyy61Iil93NA3IBGgkUK8k_YPmlA8PBew65EH-jEoGPH60Jqj49wY2W1uPtW1d5xDERsMdEIbmjQ",
          accessToken:
            "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJjNDAxN2U3MGE4MWM5NTMxY2YxYjY4MjY4M2Q5OThlNGY1NTg5MTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXF1ZWxhcnJlLTFiZWM4IiwiYXVkIjoiYXF1ZWxhcnJlLTFiZWM4IiwiYXV0aF90aW1lIjoxNzQxMTUzOTkzLCJ1c2VyX2lkIjoid01QZnFodVJKSll4cnJqZEdsR2wyNGNMb3V3MiIsInN1YiI6IndNUGZxaHVSSkpZeHJyamRHbEdsMjRjTG91dzIiLCJpYXQiOjE3NDExNTM5OTMsImV4cCI6MTc0MTE1NzU5MywiZW1haWwiOiJ0ZXN0YWxnb0B0ZXN0YWxnby5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdGFsZ29AdGVzdGFsZ28uY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BcX0_DLBp-x5ltsvk-VWqpeFmLnPMwMB7t62r6G_Mpbk1ujk6OPQNsa7fqbu0vu7zyOceltsZAYNoJNi0S94oYaBG9N41mBo1uAKfl1SIR1qajmnoFW9QCVFGhDwntSDeeFn_Ma8Gvw5Y3tsjUuH866IXlLhEWTbf3FCn9UfBsQT3q--rFvUh1HkOABaL79bnCnN0HU9xLQvDIEEUaa6BaBrgzFtOnw1FQYWjZpN_FOyHeYvzWjBqM2zxmvQLIgT4m-sZmDi4KQxqONpDwIC6QBlowiWdMOhNgVk9EGJ-UCzXyv_8O7HWy9fhPtxP84VMMN1ZhP0QXB2Ses7Vk7I5g",
          expirationTime: 1741157593351,
        },
        createdAt: "1741043028452",
        lastLoginAt: "1741153993389",
        apiKey: "AIzaSyA2s9hRWlSGhFO55i0YpCeNtIYViXyFY4w",
        appName: "[DEFAULT]",
      },
    },
    stsTokenManager: {
      refreshToken:
        "AMf-vBxT8jDx4Tvv3IZiMbdmqCjnYISw1Z2GqYcIlUi7-6gvdZ5sI7wdf3PzmH_1tQJTV0K9BXK2Evu6RFpsbsh2jvuya7AsO2A-0-LT5y7K8SU0bP6PcPTXlObv9UdoZNLXHf0i1lBcWHuu1UQ1b-Xyy61Iil93NA3IBGgkUK8k_YPmlA8PBew65EH-jEoGPH60Jqj49wY2W1uPtW1d5xDERsMdEIbmjQ",
      accessToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJjNDAxN2U3MGE4MWM5NTMxY2YxYjY4MjY4M2Q5OThlNGY1NTg5MTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXF1ZWxhcnJlLTFiZWM4IiwiYXVkIjoiYXF1ZWxhcnJlLTFiZWM4IiwiYXV0aF90aW1lIjoxNzQxMTUzOTkzLCJ1c2VyX2lkIjoid01QZnFodVJKSll4cnJqZEdsR2wyNGNMb3V3MiIsInN1YiI6IndNUGZxaHVSSkpZeHJyamRHbEdsMjRjTG91dzIiLCJpYXQiOjE3NDExNTM5OTMsImV4cCI6MTc0MTE1NzU5MywiZW1haWwiOiJ0ZXN0YWxnb0B0ZXN0YWxnby5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdGFsZ29AdGVzdGFsZ28uY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BcX0_DLBp-x5ltsvk-VWqpeFmLnPMwMB7t62r6G_Mpbk1ujk6OPQNsa7fqbu0vu7zyOceltsZAYNoJNi0S94oYaBG9N41mBo1uAKfl1SIR1qajmnoFW9QCVFGhDwntSDeeFn_Ma8Gvw5Y3tsjUuH866IXlLhEWTbf3FCn9UfBsQT3q--rFvUh1HkOABaL79bnCnN0HU9xLQvDIEEUaa6BaBrgzFtOnw1FQYWjZpN_FOyHeYvzWjBqM2zxmvQLIgT4m-sZmDi4KQxqONpDwIC6QBlowiWdMOhNgVk9EGJ-UCzXyv_8O7HWy9fhPtxP84VMMN1ZhP0QXB2Ses7Vk7I5g",
      expirationTime: 1741157593351,
    },
    accessToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJjNDAxN2U3MGE4MWM5NTMxY2YxYjY4MjY4M2Q5OThlNGY1NTg5MTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXF1ZWxhcnJlLTFiZWM4IiwiYXVkIjoiYXF1ZWxhcnJlLTFiZWM4IiwiYXV0aF90aW1lIjoxNzQxMTUzOTkzLCJ1c2VyX2lkIjoid01QZnFodVJKSll4cnJqZEdsR2wyNGNMb3V3MiIsInN1YiI6IndNUGZxaHVSSkpZeHJyamRHbEdsMjRjTG91dzIiLCJpYXQiOjE3NDExNTM5OTMsImV4cCI6MTc0MTE1NzU5MywiZW1haWwiOiJ0ZXN0YWxnb0B0ZXN0YWxnby5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdGFsZ29AdGVzdGFsZ28uY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BcX0_DLBp-x5ltsvk-VWqpeFmLnPMwMB7t62r6G_Mpbk1ujk6OPQNsa7fqbu0vu7zyOceltsZAYNoJNi0S94oYaBG9N41mBo1uAKfl1SIR1qajmnoFW9QCVFGhDwntSDeeFn_Ma8Gvw5Y3tsjUuH866IXlLhEWTbf3FCn9UfBsQT3q--rFvUh1HkOABaL79bnCnN0HU9xLQvDIEEUaa6BaBrgzFtOnw1FQYWjZpN_FOyHeYvzWjBqM2zxmvQLIgT4m-sZmDi4KQxqONpDwIC6QBlowiWdMOhNgVk9EGJ-UCzXyv_8O7HWy9fhPtxP84VMMN1ZhP0QXB2Ses7Vk7I5g",
    displayName: null,
    email: "testalgo@testalgo.com",
    emailVerified: false,
    phoneNumber: null,
    photoURL: null,
    isAnonymous: false,
    tenantId: null,
    providerData: [
      {
        providerId: "password",
        uid: "testalgo@testalgo.com",
        displayName: null,
        email: "testalgo@testalgo.com",
        phoneNumber: null,
        photoURL: null,
      },
    ],
    metadata: { createdAt: "1741043028452", lastLoginAt: "1741153993389" },
  };

  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.setItem("data", win.JSON.stringify(data));
    });
  });

  it("correr la app", () => {
    cy.mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    cy.get("body").should("be.visible");
  });

  it("modal", () => {
    cy.get("h1").click();

    cy.window().then((win) => {
      const valor = win.sessionStorage.getItem("data");
      expect(valor).to.eq(win.JSON.stringify(data));
    });
    cy.get(".header-options > :nth-child(2)").should("be.visible");
    cy.get(".header-options > :nth-child(2)").click();
  });
  it("los errores se pueden ver", () => {
    cy.get(".btn-text > button").click();
    cy.get(".input-info-container > :nth-child(2)").should("be.visible");
  });

  it("quitar errores", () => {
    cy.get('[placeholder="Título"]').type("El título de mi tarea");
    cy.get('[placeholder="#tag, #example, #horror"]').type("#hola, #mundo");
    cy.get('[data-testid="textarea"]').type("Esto es un texto de prueba");
    cy.get(".btn-text > button").click();
    cy.get(".container-all-posts").should("be.visible");
    cy.get(":nth-child(1) > .hashtag-button > a").click();
    cy.get("h1").click();
  });
});
