describe('Dropdowns',()=>{


    const zohoUrl="https://www.zoho.com/commerce/free-demo.html"
    const dummyUrl="https://www.dummyticket.com/dummy-ticket-for-visa-application/"
    const autostaticdropdown="https://www.wikipedia.org/"
    const dynamicDropdown="https://www.google.com/"

    it('dropdown with select tag',()=>{

    
        cy.visit(zohoUrl)

        //select a country 
        cy.get("#zcf_address_country").select('Germany')

    })

    it('dropdown without select tag',()=>{

    
        cy.visit(dummyUrl)

        //select the country dropdown
        cy.get('#select2-billing_country-container').click()

        cy.get(".select2-search__field").type('Germany').type('{enter}')

    })

    it('Auto suggested static dropdowns',()=>{

    
        cy.visit(autostaticdropdown)

        //get the input box 
        cy.get('#searchInput').type("Bangladesh")

        //get all the suggested items
        cy.get(".suggestion-title").contains('Bangladesh national cricket team').click()

    })

    it.only('Auto suggested dynamic dropdowns',()=>{

    
        cy.visit(dynamicDropdown)

        //get the input box 
        cy.get("textarea[name='q']").type('cypress automation')

        cy.wait(3000)

        //get all the suggested items
        cy.get("div.wM6W7d>span").each(($el,index,$list)=>{
            if($el.text()=="cypress automation tutorial"){

                cy.wrap($el).click()
            }
        })
    })





})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })
