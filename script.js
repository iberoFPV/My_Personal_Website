window.onload = () => {
    // menu icon toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // scrolling
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 500;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });

                let targetNavLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetNavLink) {
                    targetNavLink.classList.add('active');
                }

                sec.classList.add("show-animate");
            } else {
                sec.classList.remove("show-animate");
            }
        });

        let header = document.querySelector('header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Obtiene todos los elementos con la clase "animate"
    const animateElements = document.querySelectorAll('.animate');

    // Agrega un evento de escucha para cuando finalice la animación en cada elemento
    animateElements.forEach((element) => {
        element.addEventListener('animationend', () => {
            // Elimina la clase que aplica la animación una vez que termine la animación
            element.classList.remove('animate');
        });
    });
};
