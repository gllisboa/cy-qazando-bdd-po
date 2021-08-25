/// <reference types="cypress" />
/* global Then, When, Given */

const AuthenticationPage = require('../../../page/authentication.page')

Then('o sistema realiza meu login com sucesso me autenticando na pagina', () =>{
    AuthenticationPage.validarUsuarioAuthenticado()
})

Then('o sistema notifica usuario que houve problema com a authenticaçao', () => {
    AuthenticationPage.verificaTratamentoErro('Authentication failed.')
})

And('clico para realizar login', ()=>{
    AuthenticationPage.cliqueLogin()
})
