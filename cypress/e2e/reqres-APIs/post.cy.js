/// <reference types= 'cypress' />



describe('API POST Request Test', () => {
    it('Should make a POST request and perform assertions', () => {
      // Define the payload for the POST request
      const payload = {
        key: 'value'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://api.example.com/data', // Replace with the actual endpoint
        headers: {
          // Add any required headers here
          'Authorization': 'Bearer your_token_here'
        },
        body: payload
      }).then((response) => {
        // Assertions on response status
        expect(response.status).to.eq(201); // Assuming the server responds with 201 Created
  
        // Assertions on response body
        expect(response.body).to.have.property('message').to.eq('Data created successfully');
  
        // Optionally, you can perform additional assertions
        // expect(response.body).to.have.property('createdField').to.eq('expected_value');
  
        // Assertions on response headers
        expect(response.headers).to.have.property('content-type').to.include('application/json');
      });
    });
  });