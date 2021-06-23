class HomePage {

    getHomeH1(){
        return cy.get('h1')
    }
    getProjectsIcon(){
        return cy.get('.icon-projects > use')
    }
    getHomeIcon(){
        return cy.get('.icon-home ')
    }
}
export default HomePage