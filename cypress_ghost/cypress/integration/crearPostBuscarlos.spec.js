/// <reference types="cypress" />

let user = '';
let password = '';
let inviteUser='';
let postTitle= '';

describe('Crear post y buscarlo', () => {
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
    it('Login, Test send staff invitation duplicated', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        cy.get('a[href="#/posts/"]').eq(0).click();    
        cy.wait(500)
        cy.get('a[href="#/editor/post/"]').eq(0).click();  
        cy.get('[placeholder="Post Title"]').type(postTitle)
        cy.wait(100)
        cy.get('[data-placeholder="Begin writing your post..."]').type("Nuevo Post Texto")
        cy.get('div[class="ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger"]').click()
        cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
        cy.get('a[href="#/posts/"]').eq(0).click();    
        cy.get('button[class="gh-nav-btn-search"]').click();
        cy.wait(500)
        cy.get('input[placeholder="Search site..."]').eq(0).type(postTitle)
        cy.wait(500)
        cy.get('ul.ember-power-select-options > li:nth-child(1) ').eq(0).should('contain', postTitle)
        cy.wait(500)
        cy.get('body').trigger('keydown', { keyCode: 27});
        cy.wait(500);
        cy.get('body').trigger('keyup', { keyCode: 27});
        cy.get('div.gh-nav-bottom').click();
        cy.wait(100);
        cy.get('a[href="#/signout/"]').click();
        
        /*cy.get('#ember3 > div > main > section > header > section > button').click();
        cy.get('#new-user-email').type(inviteUser);
        cy.wait(1000)
        cy.get('div[class="modal-footer"]').click();
        cy.get('div[class="modal-footer"]').type('{esc}')
        cy.get('#ember3 > div > main > section > header > section > button').click();
        cy.get('#new-user-email').type(inviteUser);
        cy.wait(1000)
        cy.get('div[class="modal-footer"]').click();
        cy.wait(1000)
        cy.get('p.response').eq(0).should('contain', 'A user with that email address was already invited.')
        cy.get('div[class="modal-footer"]').type('{esc}')
        //cy.wait(2000)        
        //cy.get('div.gh-nav-bottom').click();
        //cy.get('a[href="#/signout/"]').click();*/
    })
  })