let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let port = '3001';

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
    it('Login, Test Unpublish post', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', `http://localhost:${port}/ghost/#/site`)
        cy.get('a[href="#/posts/?type=published"]').eq(0).click();    
        cy.wait(500)
        cy.get('li.gh-list-row.gh-posts-list-item').eq(0).click()
        cy.wait(100)
        cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click()
        cy.get('div[class="gh-publishmenu-radio-button"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.get('a[href="#/posts/?type=published"]').eq(0).click()
        cy.wait(2000)
        cy.get('div.gh-nav-bottom').click()
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click()
    })
})
