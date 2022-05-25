let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let port = '3002'
let index = 1;
describe('New page V4', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(1000)        
        
    })
    it('Login, Test crear Page', () => {       
        cy.get('#ember7').type(user)
        cy.wait(100)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.get('#ember9').type(password)
        cy.wait(100)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.get('#ember11').click() 
        cy.wait(100)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++        
        cy.url().should('eq', `http://localhost:${port}/ghost/#/dashboard`)
        cy.get('a[href="#/pages/"]').eq(0).click()   
        cy.wait(500)        
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.get('a[href="#/editor/page/"]').eq(0).click() 
        cy.wait(500)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++ 
        cy.get('[placeholder="Page title"]').type(postTitle)
        cy.wait(100)
        cy.get('[data-placeholder="Begin writing your page..."]').type("Nuevo Page Texto")
        cy.wait(500)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.get('div[class="gh-publishmenu ember-view"]').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.get('a[href="#/pages/"]').eq(0).click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.wait(3000)
        cy.get('div[class="flex-auto flex items-center"]').click()
        cy.wait(500);
        cy.screenshot('vrt/Scenario4'  + '/Scenario4' +'_V4-' + index) 
        index++
        cy.get('a[href="#/signout/"]').click()  
        
    })
  })