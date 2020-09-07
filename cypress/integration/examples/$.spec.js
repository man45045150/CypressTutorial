describe('Cypress.$ Function', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
	})
	it('Expose jQuery element in the current window', () => {
		const signInButton = Cypress.$('#signin_button')
		signInButton.click()
	})
})
