let user = '';
let password = '';
let inviteUser='';
let postTitle= '';

describe('Crear post de los que se encuentran en Draft', () => {
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
    it('Login, Test Draft Post', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        cy.get('a[href="#/posts/"]').eq(0).click();    
        cy.wait(500)
        cy.get('a[href="#/posts/?type=draft"]').eq(0).click();  
        cy.get('div[class="ember-view permalink gh-list-data gh-post-list-featured"]').click()
        cy.get('[placeholder="Post Title"]').type(postTitle)
        cy.wait(100)
        cy.get('[data-placeholder="Begin writing your post..."]').type("Nuevo Post Texto")
        cy.wait(100)
        cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.get('div.gh-nav-bottom').click();
        cy.wait(100);
        cy.get('a[href="#/signout/"]').click();   
    })
  })