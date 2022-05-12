// https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-your-first-test
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

// https://docs.cypress.io/guides/getting-started/testing-your-app
describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
    //
    cy.get("h1").should("contain", "QA Exercise"); //Changed from 'My Exercises to QA Exercises'
  });
});

describe("It can add a box", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");

    cy.get(".addBtn").click();
    cy.get(".addBtn").click();

    cy.get(".boxes > :nth-child(2)").contains("1");
  });
});

/**
 * This test verifies adding 20 boxes,
 * contents of each box and verifies the button
 * is disabled after clicking 20 times
 */
describe("add upto 20 boxes", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
    for (let i = 1; i <= 20; i++) {
      cy.get(".addBtn").click();
      cy.get(`.boxes > :nth-child(${i})`).contains(`${i - 1}`);
    }

    cy.get(`.addBtn`).should("be.disabled");
  });
});

/**
 * This test verifies the error message
 * when clicking remove button when there are no boxes on
 * the UI.
 */
describe("verify error on remove boxes", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");

    cy.get(".addBtn").click();
    cy.get(`.boxes > :nth-child(1)`).contains(`0`);
    cy.get(".removeBtn").click();
    cy.get(".removeBtn").click();

    cy.get("p").should("contain", "Can't Process Request");
  });
});

/**
 * This test verifies that remove button
 * should be disabled when there are no boxes
 */
describe("verify remove button is disabled", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
    cy.get(".removeBtn").should("be.disabled");
  });
});
