import "../public/variableHandler";

    menuI.addEventListener('click', event => {
        event.preventDefault();
        menuI.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    })

    
    navLinks.forEach( sec => {
        if (sec.classList.value != 'active' && section === section ) {
            sec.classList.add('active');
            // console.log(sec);
            console.log(sec.className);
            return;
        }else if (sec.classList.value === 'active' && section === section) {
            sec.classList.remove('active');
        }

        
    })

    // section.addEventListener('DOMContentLoaded', e => { ChangeLink()});

    // document.addEventListener('DOMContentLoaded', () => {
    //     console.log(document.location);
    //     console.log(document.location.href);
    //     console.log(document.location.pathname);
    //     console.log(document.URL);
    //     console.log(document.defaultView);
    //     console.log(document.location.hash);
        
    // })

    console.log(section);