let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let port = '3001';
let index = 1;

describe('Delete page', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
        })
        cy.visit(`http://localhost:${port}/ghost/`)
        cy.wait(2000)        
        
    })
    it('Login, Test Delete Page', () => {       
        cy.get('#ember8').type(user)        
        cy.wait(100)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++
        
        cy.get('#ember10').type(password)
        cy.wait(100)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++
        cy.get('#ember12').click()        
        cy.wait(100)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++
        cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
        cy.get('a[href="#/pages/"]').eq(0).click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++        
        cy.get('section.content-list > ol > li.gh-list-row.gh-posts-list-item').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++        
        cy.get('button[class="post-settings"]').click()
        cy.wait(1000)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++        
        cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click()
        cy.wait(1000)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++        
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.screenshot('vrt/Scenario5'  + '/Scenario5' +'_V3-' + index) 
        index++        
        cy.get('a[href="#/signout/"]').click()
    })
})
