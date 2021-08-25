/// <reference types="cypress" />
/* global Then, When, Given */


When('preencho os dados de login com um usuario valido, pressionando enter apos', () => {
    global.usuario.email = 'usuario.logado.enter@qazando.com.br'
    global.usuario.nome = 'Usuario Enter'

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(`${global.usuario.senha}{enter}`)
})

