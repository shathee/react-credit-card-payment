describe("Rendering Main Page", ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it("Renders The App Correctly", ()=>{
        cy.get(".App").should("exist")
    })

    it("Renders the Credit Card display", ()=>{
        cy.get("[data-testid=cardFrontComponent]").should("exist")
        cy.get("[data-testid=cardBackComponent]").should("exist")
    })

    it("Getting Formatted Card number when typing in input Field", ()=>{
        const tvIn = '4756456548781234'
        const tvOut = '4756 4565 4878 1234'
        cy.get('[data-testid="cardnumberInput"]')
        .type(tvIn)
        .should('have.value', tvOut)
    })

    it("Getting Masked Card number when typing in input Field", ()=>{
        const tvIn = '4756456548781234'
        const tvOut = '4756 **** **** 1234'
        cy.get('[data-testid="cardnumberInput"]')
        .type(tvIn)
        .get('[data-testid="cardnumberDisplay"] > h3')
        .contains(tvOut)
    })

    it("Getting Card Provider based on typed card number", ()=>{
        const tvIn = '4756456548781234'
        const tvOut = 'visa'
        cy.get('[data-testid="cardnumberInput"]')
        .type(tvIn)
        .get('[data-testid="cardProviderImage"]')
        .invoke('attr', 'src').should('contain', 'visa')
    })

    it("Focusing on Card Number section when clicked in cardnumber field", ()=>{
        cy.get('[data-testid="cardnumberInput"]')
        .click()
        .get('[data-testid="cardnumberDisplay"]')
        .should('have.class','CardNumber_Focus__3mWQ_')
    })

    it("Getting maskd CVV", ()=>{
        const tvIn = '1234'
        const tvOut = '****'
        cy.get('[data-testid="cardCvvInput"]')
        .type(tvIn)
        .get('[data-testid="cardCvvComponent"] > span')
        .should('contain', tvOut)
    })

    it("Getting Validation Error when trying to submit with empty name", ()=>{
        cy.get('[data-testid="cardInfoForm"]').submit()
        .get('[data-testid="cardHolderInput"]')
        .then(($chi)=>{
            if($chi.val == ''){
                cy.get($chi).siblings('span').contains('Card Holder Name Cannot be empty')
            }
        })
       
    })

})