describe('Assertions',()=>{

    const url="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    it('implicit assertion',()=>{

        cy.visit(url)
        cy.url().should('include','orangehrmlive.com')
        .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain','orangehrm')
     
        //verifying the picture of OrangeHRM is visible
        cy.get('.orangehrm-login-branding > img').should('be.visible')

    })
})