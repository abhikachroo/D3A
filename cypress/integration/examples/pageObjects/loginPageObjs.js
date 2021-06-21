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
    }
    export default LoginPage