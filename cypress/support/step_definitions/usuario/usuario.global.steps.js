/// <reference types="cypress" />
/* global Then, When, Given */

const AuthenticationPage = require('../../page/authentication.page')

Given('cliquei para realizar sign-in', () => {
  AuthenticationPage.clicarParaAcessar()
})
