let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let port = '3002'
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
        cy.visit(`http://localhost:${port}/ghost/`)    
    })

    it('Login, Test crear Post', () => {       
        cy.get('#ember7').type(user)
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++

        cy.get('#ember9').type(password)
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++

        cy.get('#ember11').click() 
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++
                    
        cy.url().should('eq', `http://localhost:${port}/ghost/#/dashboard`)
        cy.get('a[href="#/posts/"]').eq(0).click()   
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++
        
        cy.get('a[href="#/posts/?type=draft"]').eq(0).click()
        cy.wait(500) 
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++

        cy.get('a[href="#/editor/post/"]').eq(0).click() 
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++

        cy.get('[placeholder="Post title"]').type(postTitle)
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++

        cy.get('[data-placeholder="Begin writing your post..."]').type("Nuevo Post Texto")
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++

        cy.get('div[class="gh-publishmenu ember-view"]').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++

        cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++
        
        cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click()
        cy.wait(500)
        //cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        //index++
        
        cy.get('a[href="#/posts/?type=draft"]').eq(0).click()
        cy.wait(500)
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++
        cy.wait(2000)        

        cy.get('div[class="flex-auto flex items-center"]').click()
        cy.screenshot('vrt/Scenario3'  + '/Scenario3' +'_V4-' + index) 
        index++
        cy.wait(500);

        cy.get('a[href="#/signout/"]').click()
          
        
    })
  

})