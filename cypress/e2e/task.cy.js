describe('Swiper Gallery Test 3.1', function() {
    it('Checks if user can swipe using navigation buttons"', function () 
    {
        //Step 1
        cy.visit('http://localhost:3000');

        //Step 2
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('be.visible');

        //Step 3
        cy.get('.swiper-button-prev').click();
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('be.visible');
    });
});

describe('Swiper Gallery Test 3.2', function() {
    it('Verifies descriptions of slides"', function () 
    {
        const values = [
            {title: "Rome", description: "Italy"},
            {title: "London", description: "United Kingdom"}, 
            {title: "Paris", description: "France"},  
        ]
        //Step 1
        cy.visit('http://localhost:3000');

        //Step 2 & 3 for each slides
        values.forEach((slide, index) => {
        
            // So it would not skip the first slide
            if(index > 0)
            {
                cy.get('.swiper-button-next').click();
                cy.wait(2000);
            }

            //Check title
            cy.get('.swiper-slide-active')
                .should('be.visible')
                .and('contain', slide.title)
                .and('contain', slide.description);
        });
    });
});