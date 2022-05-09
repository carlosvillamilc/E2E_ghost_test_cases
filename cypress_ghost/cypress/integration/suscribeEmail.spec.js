/// <reference types="cypress" />

let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
let newUserName = '';
let errorMail = '';

describe('Crear post y buscarlo', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
            newUserName = data.newUserName
            errorMail = data.errorMail
        })
        cy.visit('http://localhost:2368/')
        
        cy.wait(1000)        
        
    })
    it('Login, View Page, Subscribe, Check, Logout', () => {       
        
        cy.url().should('eq', 'http://localhost:2368/')        
        cy.get(`a[href="#subscribe"]`).eq(0).click();
        cy.wait(500);
        cy.get('.subscribe-email').type(errorMail);
        cy.wait(500);
        cy.get('#subscribe > div > div > form > div.form-group > button').click();
        cy.get('div.message-error').should('contain', 'Please enter a valid email address!')
                
    })
  })