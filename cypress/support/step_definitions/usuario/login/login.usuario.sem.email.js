/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../page/authentication.page')

When('preencho os dados de login sem informar email', () => {
    global.usuario.email = ' '
    AuthenticationPage.preencherDadosLogin()

})

Then('o sistema notifica usuario que e necessario informar um email', ()=>{
    AuthenticationPage.verificaTratamentoErro('An email address required.')
})




