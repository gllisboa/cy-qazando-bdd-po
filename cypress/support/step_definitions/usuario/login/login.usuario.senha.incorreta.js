/// <reference types="cypress" />
/* global Then, When, Given */
When('preencho os dados de login informando usuario com senha incorreta', () => {
    global.usuario.email = 'usuario.logado@qazando.com.br'
    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type('senha invalida')
})




