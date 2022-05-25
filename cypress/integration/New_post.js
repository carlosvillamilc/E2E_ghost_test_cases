let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let index = 1;
let port = '3001'
describe('New post', () => {
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
    it('Login, Test crear Post', () => {       
        cy.get('#ember8').type(user)
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++

        cy.get('#ember10').type(password)
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        
        
        cy.get('#ember12').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
                
        cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        
        cy.get('a[href="#/posts/"]').eq(0).click();    
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        
        cy.get('a[href="#/editor/post/"]').eq(0).click(); 
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++

        cy.get('[placeholder="Post Title"]').type(postTitle)
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        
        cy.get('[data-placeholder="Begin writing your post..."]').type("Nuevo Post Texto")
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        
        cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
      
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
      
        cy.get('a[href="#/posts/"]').eq(0).click();
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        cy.wait(2000)   
        cy.get('div.gh-nav-bottom').click();
        cy.wait(500)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        
        cy.get('a[href="#/signout/"]').click();   
    })
  })