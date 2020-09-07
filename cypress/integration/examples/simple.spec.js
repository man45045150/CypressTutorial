// describe('My first simple test with cypress',()=>{
//     it('True should be Ture',()=>{
//         expect(true).to.equal(true)
//     })

//     it('5 should be 5',()=>{
//         expect(5).to.equal(5)
//     })
// })

// describe('Another describe block',()=>{
//     it('False should be false',()=>{
//         expect(false).to.equal(false)
//     })
// })

// describe('Brower Actions',()=>{
//     it('should load correct url',()=>{
//         // default timeout 40s.
//         cy.visit('http://example.com/',{timeout:10000})
//         // overwrite 10s.
//     })

//     it('should check correct url',()=>{
//         cy.url().should('include','example.com')
//     })

//     it('should wait for 3 seconds',()=>{
//         cy.wait(3000)
//     })

//     it('should pause the execution',()=>{
//         cy.pause()
//     })

//     it('should check for correct element on the page',()=>{
//         cy.get('h1').should('be.visible')
//     })
// })

describe('Brower Actions', () => {
	it('should load books website url', () => {
		// default timeout 40s.
		cy.visit('http://books.toscrape.com/', { timeout: 10000 })
		// overwrite 10s.
		cy.url().should('include', 'books.toscrape.com')
		cy.log('Before Reload')
		cy.reload()
		cy.log('After Reload')
	})

	it('should click on Travel category', () => {
		cy.get('a').contains('Travel').click()

		cy.get('h1').contains('Travel')
	})

	it('should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11)
	})

	it('should click on Poetry category', () => {
		cy.get('a').contains('Poetry').click()
	})

	it('should click on Olio book detail', () => {
		cy.get('a').contains('Olio').click()
	})

	it('should have correct price tag : Olio book price', () => {
		cy.get('.price_color').contains('£23.88')
	})
})
