// Default spanish language
// Marcelo Mendoza Aug 2023

import i18next from 'i18next';

export const initDefaultLanguageEs = () => {
    i18next.init({
        lng: 'es',
        debug: true,
        resources: {
            es: {
                translation: {
                    "close": "Cerrar",
                    "of": "de",
                    "weekdayNames": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                    "sunday": "Domingo",
                    "monday": "Lunes",
                    "tuesday": "Martes",
                    "wednesday": "Miércoles",
                    "thursday": "Jueves",
                    "friday": "Viernes",
                    "saturday": "Sábado",
                    "monthNames": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],

                    "alt-flagChile": "Bandera de Chile",
                    "alt-flagUsa": "Bandera de USA",
                    "alt-flagBrazil": "Bandera de Brasil",

                    "brand-main-title": "Matcha",
                    "brand-main-subtitle": "Disfruta la Dulzura de Japón",

                    "home-main-title": "¡Delicias Japonesas directo al Paladar!",
                    "home-main-subtitle": "Sumérgete en la cultura culinaria de Japón con nuestra exquisita selección de dulces tradicionales.",

                    "navbar-link-index": "Inicio",
                    "navbar-link-menu": "Menú",
                    "navbar-link-reservation": "Reservas",
                    "navbar-link-admin": "Admin",

                    "string-goto-home": "Ir al inicio",

                    // General image alts
                    "alt-logo": "Logotipo de Matcha",
                    "alt-photoFront": "Vista de frente del local Matcha",
                    "alt-cherryTree": "Fondo de árboles de cerezos",
                    "alt-descImg": "Tori Japonés",
                    "alt-restorapp": "Logo de la aplicación Restorapp",

                    // Food Showcase
                    "food-showcase-product-1-title": "Desayunos",
                    "food-showcase-product-1-text": "Exquisitos dumplins y dulces tradicionales con un toque moderno.",
                    "alt-productShowcase1": "Una mesa con dulces y tazas de té",

                    "food-showcase-product-2-title": "Tortas",
                    "food-showcase-product-2-text": "Las más ricas tortas de temporada.",
                    "alt-productShowcase2": "Una mesa con un trozo de torta y una taza de té",

                    "food-showcase-product-3-title": "Té verde",
                    "food-showcase-product-3-text": "Desde Japón, traemos las mejores variedades.",
                    "alt-productShowcase3": "Un set de te verde",

                    "food-showcase-product-4-title": "Ambiente grato",
                    "food-showcase-product-4-text": "Una experiencia culinaria única.",
                    "alt-productShowcase4": "Dos personas compartiendo un desayuno fuera del local",

                    "food-menu-title": "Menú",
                    "food-menu-description": "Disfruta de nuestra exquisita selección de dulces tradicionales japoneses, elaborados con los sabores más auténticos y delicados. Sumérgete en la cultura culinaria de Japón mientras saboreas estas delicias únicas.",

                    "food-menu-sweets-title": "🍵 Wagashi (和菓子) - Dulces Japoneses 🍵",
                    "alt-menuSweetsHeader": "Dulces japoneses",

                    // Menu - Sweets
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

                    // Menu - Drinks
                    "food-menu-drinks-title": "🍵 Bebidas Tradicionales 🍵",
                    "alt-menuDrinksHeader": "Una taza de té",

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

                    // Reservations
                    "reservation-title": "Reservar",
                    "reservation-text": "Visítenos en nuestro local y disfrute de una experiencia culinaria única. Reserve su mesa para degustar nuestros deliciosos dulces japoneses y bebidas tradicionales. Nuestro acogedor ambiente y atención personalizada le asegurarán una velada inolvidable. ¡Esperamos su visita!",

                    "reservation-date-current": "Reservas disponibles para el día",

                    "reservation-sector": "Sector",
                    "reservation-time": "Horario",
                    "reservation-available": "Disponible",
                    "reservation-done": "Reservas",
                    "reservation-not-available": "Reservas no disponibles para hoy",
                    "reservation-not-available-admin": "Reservas no habilitadas para hoy. Presione el botón a continuación para habilitar las reservas para este día.",
                    "reservation-loading": "Espere un momento...",

                    "reservation-sector1": "Interior",
                    "reservation-sector2": "Exterior",
                    "reservation-sector3": "Terraza",

                    "reservation-morning": "Mañana",
                    "reservation-morning-short": "AM",
                    "reservation-afternoon": "Tarde",
                    "reservation-afternoon-short": "PM",

                    "reservation-book-now": "Reservar aquí",
                    "reservation-book-not-available": "No disponible",

                    "reservation-modal-title": "Reservar",
                    "reservation-booking-for-the-day": "Reservando para el día",
                    "reservation-booking-location": "Ubicación:",
                    "reservation-booking-time": "en la",
                    "reservation-full-name": "Nombre completo",
                    "reservation-enter-full-name": "Juanito los Palotes",
                    "reservation-email": "Correo electrónico",
                    "reservation-enter-email": "correo@micorreo.com",
                    "reservation-phone": "Teléfono de contacto",
                    "reservation-enter-phone": "+56 9 1234 5678",
                    "reservation-guests": "Número de invitados",
                    "reservation-enter-guests": "1 a 8",

                    "reservation-full-name-required": "Nombre completo requerido",
                    "reservation-email-required": "Email requerido",
                    "reservation-phone-required": "Teléfono requerido",

                    "reservation-close": "Cancelar",
                    "reservation-submit": "Reservar",

                    "reservation-booking-success": "¡Reserva realizada!",
                    "reservation-booking-confirmed": "Se ha confirmado su reserva:\n\nNombre: {{fullname}}\nCorreo: {{email}}\nTeléfono: {{phone}}\nNúmero de invitados: {{guests}}\n\nPara el día {{date}} en el sector {{sector}}, por la {{period}}.",


                    // My Reservation
                    "my-reservation-title": "Mi reserva",
                    "my-reservation-text": "Ingrese su RUT para encontrar su reserva y verificar los detalles.",

                    // Admin
                    "admin-title": "Admin",
                    "admin-text": "Detalles de las reservas realizadas.",
                    "admin-confirm-delete": "¿Desea realmente eliminar este registro?",
                    "admin-deleted": "Reserva eliminada",
                    "admin-warning": "¡Advertencia!",
                    "admin-day-enabled-title": "¡Correcto!",
                    "admin-day-enabled-text": "Día habilitado para reservas",

                    // Footer
                    "footer-copyright-appname": "Restorapp",
                    "footer-copyright-author": "Marcelo Mendoza",
                    "footer-copyright-year": "2023",

                    "404-title": "Error 404",
                    "404-subtitle": "No se ha encontrado la página",
                    "404-text": "El recurso o página que ha solicitado se ha movido, renombrado o nos la comimos.",

                }
            }
        }
    });
}

