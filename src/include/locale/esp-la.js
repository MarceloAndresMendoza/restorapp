// Default spanish language
// Marcelo Mendoza Aug 2023

import i18next from 'i18next';

i18next.init({
    // Next line: languaje is hardcoded since is only one for now.
    lng: 'es',
    debug: true,
    resources: {
        es: {
            translation: {
                "brand-main-title": "Matcha",
                "brand-main-subtitle": "Disfruta la Dulzura de Japón",

                "navbar-link-index": "Inicio",
                "navbar-link-menu": "Menú",
                "navbar-link-reservation": "Reservas",

                "string-goto-home": "Ir al inicio",

                "food-showcase-breakfast-title": "Desayunos",
                "food-showcase-breakfast-text": "Exquisitos dumplins, te verde y dulces tradicionales con un retoque moderno.",

                "food-showcase-cake-title": "Tortas",
                "food-showcase-cake-text": "Las más ricas tortas de temporada.",

                "footer-copyright-text": "Restorapp - Marcelo Mendoza - 2023",

                "404-title": "Error 404",
                "404-subtitle": "No se ha encontrado la página",
                "404-text": "El recurso o página que ha solicitado se ha movido, renombrado o nos la comimos.",

            }
        }
    }
});

