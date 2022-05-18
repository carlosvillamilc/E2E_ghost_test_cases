let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let index = 1;

describe('Scheduled post', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
        })
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(2000)        
        
    })
    it('Login, Test crear Post', () => {       
        cy.get('#ember8').type(user)
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)

        cy.get('#ember10').type(password)
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('#ember12').click() 
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
               
        cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('a[href="#/posts/"]').eq(0).click();
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
            
        cy.get('a[href="#/posts/?type=scheduled"]').eq(0).click();
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
         
        cy.get('a[href="#/editor/post/"]').eq(0).click();
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
          
        cy.get('[placeholder="Post Title"]').type(postTitle)
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('[data-placeholder="Begin writing your post..."]').type("Nuevo Post Texto")
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click()
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.screenshot('vrt/Scenario2'  + '/Scenario2' +'_V4-' + index) 
        index++
        cy.wait(100)

        cy.get('a[href="#/posts/"]').eq(0).click();
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        cy.wait(100)
        
        cy.get('div.gh-nav-bottom').click();
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        cy.wait(100)

        cy.get('a[href="#/signout/"]').click();
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V3-' + index) 
        index++
        cy.wait(100)   
    })
  })