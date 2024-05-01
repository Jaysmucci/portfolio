'strict';
let section = document.querySelectorAll('section'),
    navLinks = document.querySelectorAll('header nav a'),
    menuI = document.querySelector('#menu-icon'),
    navbar = document.querySelector('.navbar'),
    btn = document.getElementsByTagName('')

    menuI.addEventListener('click', event => {
        event.preventDefault();
        menuI.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    })

    
    
    // active address in the nav menu
//    section.forEach(sec => {
//     console.log(sec);
//    });
    navLinks.forEach( sec => {
        if (sec.classList.value != 'active') {
            sec.classList.add('active');
            // console.log(sec);
            console.log(sec.className);
            return;
        }else if (sec.classList.value === 'active') {
            sec.classList.remove('active');
        }

        
    })

    // section.addEventListener('DOMContentLoaded', e => { ChangeLink()});

    document.addEventListener('DOMContentLoaded', () => {
        console.log(document.location);
        console.log(document.location.href);
        console.log(document.location.pathname);
        console.log(document.URL);
        console.log(document.defaultView);
        console.log(document.location.hash);
        
    })

    