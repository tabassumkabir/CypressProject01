

describe('Dropdown demo',()=>{

    it('Dropdown',()=>{

        cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/')

        //select an option 
        cy.get("select[fdprocessedid='eegrc']").click()
    })
})