describe('Dropdowns',()=>{


    const zohoUrl="https://www.zoho.com/commerce/free-demo.html"
    it('dropdown with select tag',()=>{

    
        cy.visit(zohoUrl)

        //select a country 
        cy.get("#zcf_address_country").select('Germany')

    })
})