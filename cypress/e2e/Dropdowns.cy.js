describe('Dropdowns',()=>{


    const zohoUrl="https://www.zoho.com/commerce/free-demo.html"
    const dummyUrl="https://www.dummyticket.com/dummy-ticket-for-visa-application/"
    it('dropdown with select tag',()=>{

    
        cy.visit(zohoUrl)

        //select a country 
        cy.get("#zcf_address_country").select('Germany')

    })

    it.only('dropdown without select tag',()=>{

    
        cy.visit(dummyUrl)

        //select the country dropdown
        cy.get('#select2-billing_country-container').click()

        cy.get(".select2-search__field").type('Germany')

    })



})