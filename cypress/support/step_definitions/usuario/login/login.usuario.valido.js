/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../page/authentication.page')


When('preencho os dados de login com um usuario valido', () => {
    global.usuario.email = 'usuario.logado@qazando.com.br'
    global.usuario.nome = 'Cypress Qazando'

    AuthenticationPage.preencherDadosLogin()
})


