describe('check pages inside user', () => {

  beforeEach('login', () => {
    cy.visit('/login')

    cy.get('#login-email').type(Cypress.env('userName'))
    cy.get('#login-password').type(Cypress.env('pass'))
    cy.get('#inner-login-form > .row > .login__card-body--signin > .btn').click()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  });

  it('check dashboard', () => {
    // cy.intercept('GET', '/account/dashboard').as('searchIntercept')
    // cy.wait('@searchIntercept',{ timeout: 30000 }).its('response.statusCode').should('eq',200)

    cy.url().then(currentUrl => {
      cy.request(currentUrl).then(response => {
        cy.log(currentUrl)
        expect(response.status).to.eq(200); // Change to the expected status code
        });
      });
  });

  it('check profile', () => {
    // cy.intercept('GET', '/account/dashboard').as('searchIntercept')
    // cy.wait('@searchIntercept',{ timeout: 30000 }).its('response.statusCode').should('eq',200)

    cy.get('.header-user-controls__item--profile',{ timeout: 30000 }).click()
    cy.get('.header-user-controls__nav-menu > ul > :nth-child(2) > a',{ timeout: 30000 }).click()

    // cy.intercept('GET', '/profile').as('profile')
    // cy.wait('@profile',{ timeout: 30000 }).its('response.statusCode').should('eq',200)

    cy.url().then(currentUrl => {
      cy.request(currentUrl).then(response => {
        cy.log(currentUrl)
        expect(response.status).to.eq(200); // Change to the expected status code
        });
      });
  });

  it('check properties favorite', () => {
    // cy.intercept('GET', '/account/dashboard').as('searchIntercept')
    // cy.wait('@searchIntercept',{ timeout: 30000 }).its('response.statusCode').should('eq',200)

    cy.get('.header-user-controls__item--profile',{ timeout: 30000 }).click()
    cy.get('.header-user-controls__nav-menu > ul > :nth-child(3) > a',{ timeout: 30000 }).click()

    // cy.intercept('GET', '/starred/properties').as('starred')
    // cy.wait('@starred',{ timeout: 30000 }).its('response.statusCode').should('eq',200)

    cy.url().then(currentUrl => {
      cy.request(currentUrl).then(response => {
        cy.log(currentUrl)
        expect(response.status).to.eq(200); // Change to the expected status code
        });
      });
  });
});