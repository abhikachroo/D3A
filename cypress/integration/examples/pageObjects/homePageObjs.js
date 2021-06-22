class HomePage {

    getHomeH1(){
        return cy.get('h1')
    }
    getProjectsIcon(){
        return cy.get('.icon-projects')
    }
}
export default HomePage