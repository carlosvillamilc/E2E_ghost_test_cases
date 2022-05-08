/// <reference types="cypress" />

let user = '';
let password = '';
let inviteUser='';

describe('Enviar invitacion staff duplicada', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
        })
        cy.visit('http://localhost:2368/ghost/')
        
        cy.wait(2000)        
        
    })
    it('Login, Test send staff invitation duplicated', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        cy.get('a[href="#/staff/"]').eq(0).click();    
        cy.wait(2000)     
        cy.get('#ember3 > div > main > section > header > section > button').click();
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
        cy.wait(2000)        
        cy.get('div.gh-nav-bottom').click();
        cy.wait(500)        
        cy.get('a[href="#/signout/"]').click();
    })
  })