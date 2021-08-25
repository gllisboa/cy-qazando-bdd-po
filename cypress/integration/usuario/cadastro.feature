Feature: Cadastro de Usuario

    Eu como consumidor desejo poder realizar cadsatro no siste para que eu possa realizar minhas compras e ter uma lista pessoal de itens que desejo comprar e receber promocoes

    Scenario: Cadastrar usuario valido
    Given cliquei para realizar sign-in
    When informe meu email para cadastro de usuario
     And finalizo o cadastro de usuario preenchendo todos os dados
    Then o sistema realiza meu cadastro com sucesso me autenticando na pagina

    Scenario: Cadastrar usuario com email invalido
    Given cliquei para realizar sign-in
    When tentei me inscrever com um email invalido
    Then o sistema notifica que o email utilizado e invalido

    Scenario: Cadastrar usuario com email existente
    Given cliquei para realizar sign-in
    When tentei me inscrever com um email que ja esta em uso
    Then o sistema notifica que o email ja esta sendo utilizado por outro usuario
