describe('Liquidation',()=>{

    it('Contact us',()=>{
       
        //visit url
        cy.visit("https://devauction.vegasliquidationstore.com/contact-us")

        //username
        cy.get("#username").type("Test")
        //email 
        cy.get("#email").type("tabassumkabir123@gmail.com")
        //subject 
        cy.get("#subject").type("Test")
        //message 
        cy.get("#message").type("Testing purpose")
        //click on send message 
        cy.get(".btn.btn-submit").click()
    }



        
    )



})

    

    