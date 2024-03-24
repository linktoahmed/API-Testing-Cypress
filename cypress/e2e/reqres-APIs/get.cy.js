/// <reference types= 'cypress' />



describe('API GET Request Tests', () => {
    it('Should make a GET request and GET Single User', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/2',
        // headers: {
          // Add any required headers here
        //  'Authorization': 'Bearer your_token_here'
        // },
        // Optionally, you can pass query parameters here
        // qs: {
        //   param1: 'value1',
        //   param2: 'value2'
        // }
      }).then((response) => {
        // Assertions on response status
        expect(response.status).to.eq(200);
  
        // Assertions on response body
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('id').to.eq(2);
        expect(response.body.data).to.have.property('email').to.eq('janet.weaver@reqres.in');
        expect(response.body.data).to.have.property('first_name').to.eq('Janet');
        expect(response.body.data).to.have.property('last_name').to.eq('Weaver');
        expect(response.body.data).to.have.property('avatar').to.eq('https://reqres.in/img/faces/2-image.jpg');

        expect(response.body).to.have.property('support');
        expect(response.body.support).to.have.property('url').to.eq('https://reqres.in/#support-heading');
        expect(response.body.support).to.have.property('text').to.eq('To keep ReqRes free, contributions towards server costs are appreciated!');
    
        // Optionally, you can perform additional assertions
        // expect(response.body.data[0].name).to.eq('expected_name');
  
        // Assertions on response headers
        expect(response.headers).to.have.property('content-type').to.include('application/json');
    });
    });
  });