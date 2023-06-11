describe('Example Cypress Test', () => {
  it('Should perform actions and assertions', () => {
    cy.window().then((window) => {
      // Access and assert on the variables within the window context
      cy.wrap(window.team).should('deep.equal', players);

      // Modify the variables within the window context
      window.team[3] = 'Dhoni';

      // Perform assertions after modifying the variables
      cy.wrap(window.team).should('deep.equal', players);

      // Continue with more actions and assertions
      // ...
    });
  });
});
