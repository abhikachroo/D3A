class ProjectPage{

    getNewProject(){
        return cy.get('.button--accent')
    }
    getProjectName(){
        return cy.get('#input-field-name')
    }
    getProjectDesc(){
        return cy.get('.textarea-field-wrapper__input')
    }
    getAddButton(){
        return cy.get('button.button--accent:nth-child(4)')
    }
    getCreateProjectName(){
        return cy.get('saved-project__headline__name__text')
    }
}
export default  ProjectPage