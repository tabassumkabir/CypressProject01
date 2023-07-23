describe('Checking UI elements',()=>{

    const RadioAndCheckbox="https://itera-qa.azurewebsites.net/home/automation"

    it('Verify radio button',()=>{

        cy.visit(RadioAndCheckbox)

        //check  visibility of radio buttons 
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        //select one of the options 
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')


    })

    it.only('Verifying checkboxes',()=>{

        cy.visit(RadioAndCheckbox)

        //check visibility of checkboxes
        cy.get('#monday').should('be.visible')

        //select all the checkboxes 
        cy.get("input.form-check-input[type='checkbox']").check()

        //unselect all the checkboxes 
        cy.get("input.form-check-input[type='checkbox']").uncheck()


        //selecting first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check()



    })
})