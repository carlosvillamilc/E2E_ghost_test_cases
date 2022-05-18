let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let index = 1;

describe('New post', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
        })
        cy.visit('http://localhost:3002/ghost/')
        cy.wait(1000)        
        
    })
    it('Login, Test crear Post', () => {       
        cy.get('#ember7').type(user)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)

        cy.get('#ember9').type(password)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('#ember11').click() 
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
               
        cy.url().should('eq', 'http://localhost:3002/ghost/#/dashboard')
        cy.get('a[href="#/posts/"]').eq(0).click()   
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('a[href="#/editor/post/"]').eq(0).click() 
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
         
        cy.get('[placeholder="Post title"]').type(postTitle)
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('[data-placeholder="Begin writing your post..."]').type("Nuevo Post Texto")
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('div[class="gh-publishmenu ember-view"]').click()
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click()
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        
        cy.get('a[href="#/posts/"]').eq(0).click()
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
        cy.reload()

        cy.get('div[class="flex-auto flex items-center"]').click()
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
      
        cy.get('a[href="#/signout/"]').click()
        cy.screenshot('vrt/Scenario1'  + '/Scenario1' +'_V4-' + index) 
        index++
        cy.wait(100)
          
    })
  })