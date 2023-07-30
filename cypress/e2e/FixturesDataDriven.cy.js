describe('Fixture demo',()=>{

    it('Access through fixtures',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangeHRM').then((data)=>{
            
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()

            


        })

            


        })
    })
