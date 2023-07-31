describe('Capture SS and videos',()=>{

    it('Capture ss',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

        cy.wait(3000)
        
        //capture ss
        cy.screenshot('homepage')

    })
})