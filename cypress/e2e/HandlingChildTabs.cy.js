describe('Handle tabs',()=>{

    const childTabs="https://the-internet.herokuapp.com/windows"

    it('Approach01',()=>{

        cy.visit(childTabs)

        //get the element , remove the attribute and click on the link 
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })