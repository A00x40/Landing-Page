/* NavBar Class */

class NavBar {

    // To Get Sections Count in case of dynamic section addition 
    navSections = document.querySelectorAll("section");

    // ul which section links will be added to
    navMenu = document.getElementById("navbar__list");
    
    NavBar() {
        
        // Loop on sections count & insert new li to navbar__list
        this.navSections.forEach( ( sec , i ) => {
            let ListItem = document.createElement("li");
            ListItem.innerHTML = "Section " + (i+1);
            ListItem.className = "menu__link";

            // Attribute used to go to section by id
            ListItem.setAttribute("data-nav__id",`${sec.id}`);
        
            this.navMenu.appendChild(ListItem);    
        });

        this.scrollToSection();
    }

    // Scroll to section on link click
    scrollToSection() {
        this.navMenu.childNodes.forEach( (child) => {
            child.addEventListener( 'click' , (e) => {
                e.preventDefault();
        
                document.getElementById(e.target.dataset.nav__id).scrollIntoView({behavior: "smooth"});
            });
        });
    };
}


// build the nav

var navBar = new NavBar();
navBar.NavBar();





