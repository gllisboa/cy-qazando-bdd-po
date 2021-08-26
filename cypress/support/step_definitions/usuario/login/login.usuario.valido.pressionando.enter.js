/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../page/authentication.page')

When('preencho os dados de login com um usuario valido, pressionando enter apos', () => {
    global.usuario.email = 'usuario.logado.enter@qazando.com.br'
    global.usuario.nome = 'Usuario Enter'
    AuthenticationPage.preencherDadosLogin({enter:true})
})

