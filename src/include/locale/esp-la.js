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

                "food-showcase-product-1-title": "Desayunos",
                "food-showcase-product-1-text": "Exquisitos dumplins y dulces tradicionales con un toque moderno.",

                "food-showcase-product-2-title": "Tortas",
                "food-showcase-product-2-text": "Las más ricas tortas de temporada.",

                "food-showcase-product-3-title": "Té verde",
                "food-showcase-product-3-text": "Desde Japón, traemos las mejores variedades.",

                "food-showcase-product-4-title": "Ambiente grato",
                "food-showcase-product-4-text": "Una experiencia culinaria única.",

                "food-menu-title": "Menú",
                "food-menu-description": "Disfruta de nuestra exquisita selección de dulces tradicionales japoneses, elaborados con los sabores más auténticos y delicados. Sumérgete en la cultura culinaria de Japón mientras saboreas estas delicias únicas.",

                "food-menu-sweets-title": "🍵 Wagashi (和菓子) - Dulces Japoneses 🍵",

                // Definiciones de los productos de dulces
                "food-menu-sweet-1-title": "Daifuku (大福)",
                "food-menu-sweet-1-description": "Mochi relleno de anko (pasta de judías rojas dulces).",
                "food-menu-sweet-1-price": "$3.500",

                "food-menu-sweet-2-title": "Dorayaki (どら焼き)",
                "food-menu-sweet-2-description": "Pastelitos de pancake rellenos de anko.",
                "food-menu-sweet-2-price": "$2.750",

                "food-menu-sweet-3-title": "Taiyaki (たい焼き)",
                "food-menu-sweet-3-description": "Waffle con forma de pez relleno de anko o crema.",
                "food-menu-sweet-3-price": "$4.000",

                "food-menu-sweet-4-title": "Mitarashi Dango (御手洗団子)",
                "food-menu-sweet-4-description": "Brochetas de mochi bañadas en una deliciosa salsa dulce.",
                "food-menu-sweet-4-price": "$2.500",

                // Definiciones de las bebidas
                "food-menu-drinks-title": "🍵 Bebidas Tradicionales 🍵",

                "food-menu-drink-1-title": "Matcha Latte (抹茶ラテ)",
                "food-menu-drink-1-description": "Té verde matcha con leche cremosa.",
                "food-menu-drink-1-price": "$2.500",

                "food-menu-drink-2-title": "Hojicha (ほうじ茶)",
                "food-menu-drink-2-description": "Té tostado con aroma ahumado y reconfortante.",
                "food-menu-drink-2-price": "$2.000",

                "food-menu-drink-3-title": "Amazake (甘酒)",
                "food-menu-drink-3-description": "Bebida dulce y sin alcohol hecha de arroz fermentado.",
                "food-menu-drink-3-price": "$3.000",

                "food-menu-drink-4-title": "Genmaicha (玄米茶)",
                "food-menu-drink-4-description": "Té verde con arroz tostado, un sabor único y acogedor.",
                "food-menu-drink-4-price": "$2.250",

                // Agrega aquí más definiciones para otros productos y bebidas.
                // ...

                "footer-copyright-text": "Restorapp - Marcelo Mendoza - 2023",

                "404-title": "Error 404",
                "404-subtitle": "No se ha encontrado la página",
                "404-text": "El recurso o página que ha solicitado se ha movido, renombrado o nos la comimos.",

            }
        }
    }
});

