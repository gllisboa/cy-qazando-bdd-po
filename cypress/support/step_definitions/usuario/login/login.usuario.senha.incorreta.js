/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require ('../../../page/authentication.page')

When('preencho os dados de login informando usuario com senha incorreta', () => {
    global.usuario.email = 'usuario.logado@qazando.com.br'
    let backupSenha = global.usuario.senha
    global.usuario.senha = 'senha invalida'

    AuthenticationPage.preencherDadosLogin()
})




