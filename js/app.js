/* Sections Class */

class Sections {

    sectionHolder = document.querySelector("#sections");

    // Insert Sections dynamically
    initializeSections() {
        this.sectionHolder.insertAdjacentHTML( "beforeend" ,
        
        `
        <section id="section1" data-nav="Section 1" class="your-active-class">
            <div class="landing__container">
            <h2>Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>
        </section>
        <section id="section2" data-nav="Section 2">
            <div class="landing__container">
            <h2>Section 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>
        </section>
        <section id="section3" data-nav="Section 3">
            <div class="landing__container">
            <h2>Section 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>
        </section>
        <section id="section4" data-nav="Section 4">
            <div class="landing__container">
            <h2>Section 4</h2>
            <p>Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

            <p>Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>
        </section>
        
        `
        );
    }
};


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


/** Initialize Sections dynamically */
const sections = new Sections();
sections.initializeSections();

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
    var buffer = 280;

    // Check if part of the section is in viewport boundaries
    return (
        bounding.top    >= -buffer  &&
        bounding.left   >= -buffer  &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
        bounding.right  <= (window.innerWidth  || document.documentElement.clientWidth)  + buffer
    );
}

// Check if part of the section is in viewport at the current time
window.addEventListener( 'scroll' , () => {
    navBar.navSections.forEach( (sec) => { 
        
        // Check if current section isn't active
        if( !sec.classList.contains("your-active-class") && sectionInView(sec) )
            addActiveClass(sec); 
    } );
});


