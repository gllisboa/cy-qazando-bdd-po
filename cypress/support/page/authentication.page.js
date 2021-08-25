/// <reference types="cypress" />

const AuthenticationElements = require('../elements/authentication.elements')

export default class AuthenticationPage {

   static clicarParaAcessar() {
        cy.visit('')
        AuthenticationElements.btnAcessarAuthentication().click()
            .url().should('include','controller=authentication&back=my-account')
    }

    static validarUsuarioAuthenticado() {
        AuthenticationElements.labelUsuarioAuthenticado()
            .should('be.visible')
            .should('have.text',global.usuario.nome)
    }

    static existePainelErro(){
        AuthenticationElements.painelNotificacaoErro()
            .should('be.visible')
    }
    static verificaTratamentoErro(mensagemValidacao){
        this.existePainelErro()
        AuthenticationElements.mensagensPainelNotificacaoErro().each((mensagem) => {
            expect(mensagem.text()).to.equal(mensagemValidacao)
        })
    }

    static cliqueLogin() {
        AuthenticationElements.btnLogin().click()
    }

    static digitarEmailLogin() {
        AuthenticationElements.inputEmailLogin().type(global.usuario.email,{force:true})
    }

    static digitarSenhaLogin() {
        return AuthenticationElements.inputSenhaLogin().type(global.usuario.senha,{force:true})
    }

    static preencherDadosLogin() {
        this.digitarEmailLogin()
        return this.digitarSenhaLogin()
        
    }

}