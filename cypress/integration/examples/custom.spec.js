describe('Custom Commands', () => {
	it('should login to application usin custom cypress command', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.login('username', 'password')
	})
})
