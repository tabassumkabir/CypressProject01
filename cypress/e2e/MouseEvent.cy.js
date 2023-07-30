
///<reference types="Cypress"/>

require('@4tw/cypress-drag-drop')

import 'cypress-iframe';
describe('Handle mouse event',()=>{

    
    it('MouseHover',()=>{

        
        cy.visit("https://demo.opencart.com/")
        

        //get the element 
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        
    })

    it('Right click',()=>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        
        //get the element
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')

        //validate 
        cy.get('.context-menu-icon-edit > span').should('have.text','Edit')
    })

    it('Double click',()=>{

        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick")

        //get the frame element
        cy.frameLoaded("#iframeResult")

        //get the element to doubleclick 
        cy.iframe("#iframeResult").find("p[ondblclick='myFunction()']").dblclick()

        //validate
        cy.iframe("#iframeResult").find("#demo").should('be.visible')
        
        
    })
    
    it('Drag and Drop',()=>{

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        //get the source element and drag 
        cy.get("#box5").drag("#box105",{force: true})
    })

    it.only("Scrolling a page",()=>{

        cy.visit("https://www.worldometers.info/geography/flags-of-the-world/")

        //get to the element
        cy.get(':nth-child(14) > [align="center"] > a > img').scrollIntoView()
    })



})