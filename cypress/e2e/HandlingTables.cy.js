const { beforeEach } = require("mocha")

describe('Handling Tables',()=>{

    beforeEach('Login',()=>{

        //visit url
        cy.visit("https://demo.opencart.com/admin/index.php?route=common/login")
    })
})