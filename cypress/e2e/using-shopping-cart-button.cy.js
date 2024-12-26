// npx cypress open

describe("using shopping cart button", () => {

  beforeEach(() => {
    cy.visit("https://stickerfy.herokuapp.com/");
  
    cy.title().should("be.equal", "Stickerfy");
  })


  it("select and buy Happy Stickerfy", () => {
    
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

  it("select and buy Sad Stickerfy", () => {
    
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

  it("select and buy Angry Stickerfy", () => {
    
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

  it("select one of each sticker and buy", () => {

    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cf9"]') //select Happy sticker 
      .contains('Add to cart')
      .click();
    
    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cfa"]')  //select Angry sticker
      .contains('Add to cart')
      .click();
    
    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cfb"]') //select Sad sticker
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
    cy.contains('h4', 'Total: $17').should('be.visible')
    cy.contains('h4', 'Thanks for your order!').should('be.visible')
  });

  it("select two Happy sticker and one of each sticker and buy all", () => {

    Cypress._.times(2, () => {
      cy.get(
        'a[href="/add-to-cart/5dd8e2b26c26d0000a675cf9"]') //select Happy sticker 
        .contains('Add to cart')
        .click();
    })
      
    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cfa"]')  //select Angry sticker
      .contains('Add to cart')
      .click();
      
    cy.get(
      'a[href="/add-to-cart/5dd8e2b26c26d0000a675cfb"]') //select Sad sticker
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
      cy.contains('h4', 'Total: $22.5').should('be.visible')
      cy.contains('h4', 'Thanks for your order!').should('be.visible')
  });

});
