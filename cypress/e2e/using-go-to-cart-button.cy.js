


describe("using go to cart button to buy stickers", () => {


  it(" open main page, select and buy Happy Stickerfy", () => {
    cy.visit("https://stickerfy.herokuapp.com/");
    
    cy.title().should("be.equal", "Stickerfy");
    
    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cf9"]')
      .contains('Add to cart')
      .click();

    cy.get(
      'a[href="/shopping-cart/"]')
      .contains("Shopping Cart")
      .click();

    cy.get(
      'a[href="/checkout"]')
      .contains("Checkout")
      .click();
    
    cy.contains('h1','Checkout').should('be.visible')
    cy.contains('h4', 'Total: $5.5').should('be.visible')
    cy.contains('h4', 'Thanks for your order!').should('be.visible')
  });

  it(" open main page, select and buy Sad Stickerfy", () => {
    cy.visit("https://stickerfy.herokuapp.com/");
    
    cy.title().should("be.equal", "Stickerfy");
    
    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cfb"]')
      .contains('Add to cart')
      .click();

    cy.get(
      'a[href="/shopping-cart/"]')
      .contains("Shopping Cart")
      .click();

    cy.get(
      'a[href="/checkout"]')
      .contains("Checkout")
      .click();
    
    cy.contains('h1','Checkout').should('be.visible')
    cy.contains('h4', 'Total: $7').should('be.visible')
    cy.contains('h4', 'Thanks for your order!').should('be.visible')
  });

  it(" open main page, select and buy Angry Stickerfy", () => {
    cy.visit("https://stickerfy.herokuapp.com/");
    
    cy.title().should("be.equal", "Stickerfy");
    
    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cfa"]')
      .contains('Add to cart')
      .click();

    cy.get(
      'a[href="/shopping-cart/"]')
      .contains("Shopping Cart")
      .click();

    cy.get(
      'a[href="/checkout"]')
      .contains("Checkout")
      .click();
    
    cy.contains('h1','Checkout').should('be.visible')
    cy.contains('h4', 'Total: $4.5').should('be.visible')
    cy.contains('h4', 'Thanks for your order!').should('be.visible')
  });




});
