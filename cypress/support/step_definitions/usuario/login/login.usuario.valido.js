/// <reference types="cypress" />
/* global Then, When, Given */


When('preencho os dados de login com um usuario valido', () => {
    global.usuario.email = 'usuario.logado@qazando.com.br'
    global.usuario.nome = 'Cypress Qazando'

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha)
})


