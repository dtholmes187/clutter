before(function () {
  cy.wait(500)
  cy.request('POST', 'http://localhost:3141/fn/clutter/post', {"message":"A meow from agent3141","stamp":1520931499163})
  cy.wait(200)
  cy.request('POST', 'http://localhost:3141/fn/clutter/post', {"message":"A second meow from agent3141","stamp":1520931499200})
  cy.wait(200)
  cy.request('POST', 'http://localhost:5141/fn/clutter/post', {"message":"A meow from agent5141","stamp":1520931499163})
  cy.wait(200)
  cy.request('POST', 'http://localhost:5141/fn/clutter/post', {"message":"A second meow from agent5141","stamp":1520931499200})
})
