Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Check actual visit of all pages of access.com', () => {

  let urls = ['', 'login/', 'register','reset-password/','listing-report/houses-for-rent','listing-report/houses-for-sale','listing-report/condos-for-rent','listing-report/condos-for-sale','listing-report/apartments-for-rent','listing-report/apartments-for-sale','listing-report/residential-land-for-sale','listing-report/foreclosed-properties','listing-report/commercial-spaces-for-rent','listing-report/commercial-spaces-for-sale','listing-report/serviced-office-for-rent','listing-report/traditional-offices-for-rent','find-an-agent','agent-tools','blog','about-us','contact-us']

  urls.forEach((urlList) => {
    it(`Check "${urlList}"`, {failOnStatusCode:false}, () => {
        urlList.toString()

        cy.visit('/'+ urlList).its('status').should('not.be.oneOf', [404, 500]);
    })
  })
})