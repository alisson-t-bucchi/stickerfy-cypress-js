// npx cypress open

//Authentication errors (401)
//Authorization errors (403)
//Server errors (500)
//Invalid inputs 


describe('Backend tests', () => {
    const endpoints = [
        'https://stickerfy.herokuapp.com/',
        'https://stickerfy.herokuapp.com/shopping-cart/', 
        'https://stickerfy.herokuapp.com/checkout'
    ];
    endpoints.forEach((endpoint) => {
        it(`shoul return status 200 for ${endpoint}`, () => {
            cy.request({
                method: 'GET',
                url: endpoint,
                failOnStatusCode: true, 
            }).then((response) => {
                //cy.log(`Response status code: ${response.status}`); 
                expect(response.status).to.equal(200); 
            });
        })
    });

    it(`should handle 404 error for non-existent endpoint`, () => {
        cy.request({
          method: 'GET',
          url: 'https://stickerfy.herokuapp.com/non-existent-endpoint',
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.equal(404);
        });
    });
}); 