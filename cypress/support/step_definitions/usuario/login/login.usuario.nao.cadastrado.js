/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../page/authentication.page')

When('preencho os dados de login com um usuario nao cadastrado', () => {
    global.usuario.email = 'usuario.sem.cadastro@qazando.com'
    AuthenticationPage.preencherDadosLogin()
})




