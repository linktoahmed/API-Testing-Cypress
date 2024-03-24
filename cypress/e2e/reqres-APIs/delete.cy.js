/// <reference types= 'cypress' />



describe('API DELETE Request Test', () => {
    it('Should make a DELETE request and perform assertions', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://api.example.com/data/123', // Replace with the actual endpoint
        headers: {
          // Add any required headers here
          'Authorization': 'Bearer your_token_here'
        }
      }).then((response) => {
        // Assertions on response status
        expect(response.status).to.eq(204); // Assuming the server responds with 204 No Content
  
        // Optionally, you can perform additional assertions
        // expect(response.body).to.be.empty;
  
        // Assertions on response headers
        expect(response.headers).to.have.property('content-type').to.include('application/json');
      });
    });
  });