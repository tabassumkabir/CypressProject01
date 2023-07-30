import 'cypress-file-upload'


describe('File Upload',()=>{

    it('Single file upload',()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")

        //get the element 
        cy.get("#file-upload").attachFile('randompic.jpg')

        //click on submit

        cy.get("#file-submit").click()

        cy.wait(3000)
    })


})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })