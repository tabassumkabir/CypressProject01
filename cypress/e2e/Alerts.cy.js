describe('Handling Alerts',()=>{

    const alertUrl="https://the-internet.herokuapp.com/javascript_alerts"

    //Js alerts: it will have some text and OK button

    it('Js alert1',()=>{

        cy.visit(alertUrl)

        //click on the alert button 
        cy.get("button[onclick='jsAlert()']").click()

        //to get the message on alert window
        cy.on('window : alert',(t)=>{

            expect(t).to.contains('I am a JS Alert')
        })

        //validate the success message 
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('Js alert2 using OK button ',()=>{

        cy.visit(alertUrl)

        //click on the 2nd alert button 
        cy.get("button[onclick='jsConfirm()']").click()

        //to get the message on alert window
        cy.on('window : confirm',(t)=>{

            expect(t).to.contains('I am a JS Confirm')
        
        })


        //validate the success message 
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Js alert2 using Cancel button ',()=>{

        cy.visit(alertUrl)

        //click on the 2nd alert button 
        cy.get("button[onclick='jsConfirm()']").click()

        //to get the message on alert window
        cy.on('window : confirm',(t)=>{

            expect(t).to.contains('I am a JS Confirm')
        
        })

        //let cypress click on Cancel button
        cy.on('window:confirm',()=>false)

        

        //validate the success message
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    it.only('Js alert3 ',()=>{

        cy.visit(alertUrl)

         //we have to pass the value before trigerring the button , because after trigerring the button we cannot access the input box

        //pass value in the input box 
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('my name')


        })

        //click on the alert button 
        cy.get("button[onclick='jsPrompt()']").click()

        //validate the text
        cy.get('#result').should('have.text','You entered: my name')

        




    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })