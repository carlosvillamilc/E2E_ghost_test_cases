let user = '';
let password = '';
let port = '3001'
describe('Prueba de modulos de Ghost', function () {
    /*before(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password            
            cy.visit(`http://localhost:${port}/ghost/`)
            cy.wait(2000)
            cy.get('#ember8').type(user)
            cy.get('#ember10').type(password)
            cy.get('#ember12').click()        
        })
        
        
    })*/
    beforeEach(()=>{        
        cy.fixture('ghost.json').as('ghost')
        cy.fixture('ghost.json').then((data)  => {
            user = data.user
            password = data.password            
            cy.visit(`http://localhost:${port}/ghost/`)
            cy.wait(2000)            
        })       
        
    })
    it('Crear un Label desde Design', function () {
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()
        cy.wait(500)
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

    it('Ingresar a Staff e invitar usuarios', function () {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        var numero = getRandomArbitrary(0, 100);
        numero = Math.round(numero);
        var emailPart1 = 'yirzajes';
        var emailPart2 = '@gmail.com'
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()
        cy.wait(500)
        cy.contains('Staff').click();
        cy.get('.gh-btn.gh-btn-green').click();
        cy.wait(2000);
        cy.get('#new-user-email').type(emailPart1.concat('',numero).concat('',emailPart2));
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click();
        cy.get('.close').click();
        cy.reload();
        cy.get('.apps-grid-title').eq(0).should('exist');
        cy.wait(2000);
        cy.get('.gh-user-email').click();
        cy.get('.dropdown-item.user-menu-signout.ember-view').click();
        cy.get('#ember12').should('exist');

    })  
        
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
    
    it('Ingresar a Staff y reenviar invitación usuarios', function () {
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()
        cy.wait(500)
        cy.contains('Staff').click();
        cy.contains(' Resend').eq(0).click();
        cy.wait(1000);        
        cy.reload();
        cy.wait(2000);
        cy.get('.gh-user-email').click();
        cy.get('.dropdown-item.user-menu-signout.ember-view').click();
        cy.get('#ember12').should('exist');

    })

    it('Ingresar a Staff y revocar invitación usuario', function () {
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()
        cy.wait(500)
        cy.get('a[href="#/staff/"]').eq(0).click();
        cy.get('.apps-configured-action.red-hover').eq(0).click();
        cy.wait(1000);
        cy.contains('Invitation revoked').should('exist')
        cy.reload();
        cy.wait(2000);
        cy.get('.gh-user-email').click();
        cy.get('.dropdown-item.user-menu-signout.ember-view').click();
        cy.get('#ember12').should('exist');

    })

    it('Cambiar apariencia de Ghost', function () {
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()
        cy.wait(500)
        cy.get('a[href="#/settings/labs/"]').click();
        cy.get('.input-toggle-component').click();
        cy.wait(1000);
        cy.reload();
        cy.wait(2000);
        cy.get('.gh-user-email').click();
        cy.get('.dropdown-item.user-menu-signout.ember-view').click();
        cy.get('#ember12').should('exist');

    })

    it('Activar la opción de Members', function () {
        cy.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.get('#ember8').type(user)
        cy.get('#ember10').type(password)
        cy.get('#ember12').click()
        cy.wait(500)
        cy.get('a[href="#/settings/labs/"]').click();
        cy.get('.gh-setting-action.flex.items-center.midgrey').click();
        cy.get('.input-toggle-component').eq(0).click();
        cy.wait(1000);
        cy.reload();
        cy.contains('members').should('exist');
        cy.wait(2000);
        cy.contains('Labs').click();
        cy.get('.gh-setting-action.flex.items-center.midgrey').click();
        cy.get('.input-toggle-component').eq(0).click();
        cy.contains('Save settings').click();
        cy.wait(2000);
        cy.get('.gh-user-email').click();
        cy.get('.dropdown-item.user-menu-signout.ember-view').click();
        cy.get('#ember12').should('exist');
        
    })
})