/// <reference types="cypress" />

let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let newUserName = '';

describe('Crear post y buscarlo', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
            newUserName = data.newUserName
        })
        cy.visit('http://localhost:2368/ghost/')
        
        cy.wait(2000)        
        
    })
    it('Login, Cambiar nombre Profile, Logout', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        cy.get('div.gh-nav-bottom').click();
        cy.wait(1000)                
        cy.contains(' Your Profile ').click();
        cy.wait(500)                
        cy.get('.user-name').eq(0).clear();
        cy.wait(500)
        cy.get('body').click();
        cy.get('.user-name').eq(0).type(newUserName);
        cy.wait(500)                
        cy.contains('Save').click();
        cy.wait(500)                
        cy.get('div.gh-nav-bottom').click();
        cy.wait(100);
        cy.get('a[href="#/signout/"]').click();
    })
  })