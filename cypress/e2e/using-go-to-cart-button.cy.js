import { slowCypressDown } from "cypress-slow-down";

describe("using go to cart button to buy stickers", () => {
  var TIME = 3000;
  it("open main page", () => {
    cy.visit("https://stickerfy.herokuapp.com/");

    cy.time(TIME);

    cy.title().should("be.equal", "Stickerfy");
  });

  it("select and buy Happy Stickerfy", () => {
    cy.get(
      '//a[@href="/add-to-cart/5dd8e2b26c26d0000a675cf9" and text()="Add to cart"'
    );
  });
});
