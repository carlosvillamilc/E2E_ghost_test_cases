let user = '';
let password = '';
let inviteUser='';
let postTitle= '';
describe('Delete page', () => {
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password
            inviteUser = data.inviteUser
            postTitle = data.postTitle
        })
        cy.visit('http://localhost:3001/ghost/')
        cy.wait(2000)        
        
    })
    it('Login, Test Send invitation', () => {       
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()        
        cy.url().should('eq', 'http://localhost:2368/ghost/#/site')
        cy.get('a[href="#/staff/"]').eq(0).click()
        cy.get('button[class="gh-btn gh-btn-green"]').click()
        cy.get('[placeholder="Email Address"]').type("jdportilla98@gmail.com")
        cy.get('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]').click()
        cy.wait(2000)
        cy.get('div.gh-nav-bottom').click();
        cy.wait(100)
        cy.get('a[href="#/signout/"]').click();   
    })
})
