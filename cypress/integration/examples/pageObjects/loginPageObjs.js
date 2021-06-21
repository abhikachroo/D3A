class LoginPage{

    getEmail(){
        return cy.get('#email')
    }
    getPassword(){
        return cy.get('#password')
    }
    getLoginButton(){
        return cy.get('.button')
    }
    getLoginH2Text(){
        return cy.get('.headline')
    }
    }
    export default LoginPage