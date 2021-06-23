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
        return cy.get(':nth-child(1) > .ConfigurationListHeadWrapper > .saved-project__headline > .saved-project__headline__name > .saved-project__headline__name__text')
    }
    getNewSimulationButton(){
        return cy.get('.saved-project__button--new-simulation')
    }
    getSimulationName(){
        return cy.get('#input-field-name')
    }
    getNextButton(){
        return cy.get('.settings-form__submit')
    }
    getCreatedSimulationName(){
        return cy.get('.saved-config--pct-width__title__name > p')
    }
}
export default  ProjectPage