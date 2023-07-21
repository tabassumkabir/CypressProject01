
describe('first test',()=>{

    const url="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
it('Verify title',()=>{

    cy.visit(url)

    

    cy.title().should('eq','OrangeHRM')

})

it('Verify Login',()=>{

    cy.visit(url)
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get("button[type='submit']").click()
    
    //verify dashboard page 

   cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
})
})