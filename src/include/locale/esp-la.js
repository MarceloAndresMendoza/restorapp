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

                "404-title": "Error 404",
                "404-subtitle": "No se ha encontrado la página",
                "404-text": "El recurso o página que ha solicitado se ha movido, renombrado o no existió.",

            }
        }
    }
});

