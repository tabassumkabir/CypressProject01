describe('verify text',()=>{

    it('Enter and click',()=>{

        cy.visit("https://demo.zeuz.ai/web/level/one/actions/save_text?fbclid=IwAR1RWkecKy-gf2r6vEfHT8JsPtEEIKJQNrGs2A2iynC1veVCgSpWRUh2byY")


        //get the text
        cy.get("#randomText").then($randomtext=>{

            const randomText=$randomtext.text()

            //get the input box and type the text
            cy.get("#enter_text").type(randomText)


        })

        

        //click on verify
        cy.get("#verify_id").click()

        //verify the success message 
        cy.get("#text_showing").should('have.text',"You have successfully verified the text")

    })
})