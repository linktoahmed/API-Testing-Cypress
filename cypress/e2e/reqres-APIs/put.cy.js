/// <reference types= 'cypress' />



describe('API PUT Request Test', () => {
    it('Should make a PUT request and perform assertions', () => {
      // Define the payload for the PUT request
      const payload = {
        key: 'updated_value'
      };
  
      cy.request({
        method: 'PUT',
        url: 'https://api.example.com/data/123', // Replace with the actual endpoint
        headers: {
          // Add any required headers here
          'Authorization': 'Bearer your_token_here'
        },
        body: payload
      }).then((response) => {
        // Assertions on response status
        expect(response.status).to.eq(200);
  
        // Assertions on response body
        expect(response.body).to.have.property('message').to.eq('Data updated successfully');
  
        // Optionally, you can perform additional assertions
        // expect(response.body).to.have.property('updatedField').to.eq('expected_value');
  
        // Assertions on response headers
        expect(response.headers).to.have.property('content-type').to.include('application/json');
      });
    });
  });