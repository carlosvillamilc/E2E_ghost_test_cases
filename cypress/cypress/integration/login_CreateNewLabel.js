describe('Prueba de modulos de Ghost', function () {

    beforeEach(function () {
        cy.visit('http://localhost:2369/ghost/#/signin');
        cy.get('#ember8').type('v.yirsa@uniandes.edu.co');
        cy.get('#ember10').type('Ratica19981.');
        cy.get('#ember12').click();
        //cy.get('*=Design').click();
        cy.wait(5000);
    })
    it('Crear un Label desde Design', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        var texto = 'Sign in';
        cy.contains('Design').click();
        cy.wait(5000);
        cy.get('[placeholder="Label"]').eq(4).type('Alex');  
        cy.wait(2000);
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
        cy.get('#ember27 > svg').click();
        cy.wait(2000);
        cy.get('.gh-user-email').click();
        cy.get('.dropdown-item.user-menu-signout.ember-view').click();
        cy.get('#ember12').should('exist');
    })
})