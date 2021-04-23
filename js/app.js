/* NavBar Class */

class NavBar {

    // To get sections id & count to create li elements
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
        
                let secToGo = document.getElementById(e.target.dataset.nav__id);
                secToGo.scrollIntoView({behavior: "smooth"});
                addActiveClass(secToGo);
            });
        });
    };
}


/** build the nav */ 

const navBar = new NavBar();
navBar.NavBar();


/** Add Active Class */ 
const addActiveClass = ( currSection ) => {

    // Add active-class to clicked section
    document.querySelector(".your-active-class")?.classList.remove("your-active-class");
    currSection.setAttribute( "class" , "your-active-class" );
} 

/** Change Active Class while scrolling */

const sectionInView = (sec) => {
    
    // Get section position in view port
    var bounding  = sec.getBoundingClientRect();
    var secHeight = sec.offsetHeight;
    var secWidth  = sec.offsetWidth;

    // Check if part of the section is in viewport boundaries
    return (
        bounding.top    >= -secHeight  &&
        bounding.left   >= -secWidth   &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + secHeight &&
        bounding.right  <= (window.innerWidth  || document.documentElement.clientWidth)  + secWidth
    );
}

// Check if part of the section is in viewport at the current time
window.addEventListener( 'scroll' , () => {
    navBar.navSections.forEach( (sec) => { if( sectionInView(sec) ) addActiveClass(sec); } );
});


