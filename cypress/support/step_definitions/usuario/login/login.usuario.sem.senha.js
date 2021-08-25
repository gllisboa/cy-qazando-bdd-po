/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../page/authentication.page')

When('preencho os dados de login sem informar senha', () => {
    global.usuario.email = 'usuario.logado@qazando.com'
    let backupsenha = global.usuario.senha
    global.usuario.senha = ' '
    AuthenticationPage.preencherDadosLogin().then(()=>{ global.usuario.senha = backupsenha })
})

Then('o sistema notifica usuario que e necessario informar uma senha', ()=>{
    AuthenticationPage.verificaTratamentoErro('Password is required.')
})
