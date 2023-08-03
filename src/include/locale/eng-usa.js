// Default spanish language
// Marcelo Mendoza Aug 2023

import i18next from 'i18next';

i18next.init({
    // Next line: languaje is hardcoded since is only one for now.
    lng: 'engUsa',
    debug: true,
    resources: {
        engUsa: {
            translation: {
                "brand-main-title": "Matcha",
                "brand-main-subtitle": "Enjoy Japan Sweetness",

                "home-main-title": "Japanese Delights Straight to Your Palate!",
                "home-main-subtitle": "Immerse yourself in the culinary culture of Japan with our exquisite selection of traditional sweets.",

                "navbar-link-index": "Home",
                "navbar-link-menu": "Menu",
                "navbar-link-reservation": "Reservations",
                "navbar-link-admin": "Admin",

                "string-goto-home": "Go to Home",

                // General image alts
                "alt-logo": "Matcha Logo",
                "alt-photoFront": "Front View of Matcha Venue",
                "alt-cherryTree": "Cherry Trees Background",
                "alt-descImg": "Japanese Tori",
                "alt-restorapp": "Restorapp Application Logo",

                // Food Showcase
                "food-showcase-product-1-title": "Breakfast",
                "food-showcase-product-1-text": "Exquisite dumplings and traditional sweets with a modern twist.",
                "alt-productShowcase1": "A table with sweets and tea cups",

                "food-showcase-product-2-title": "Cakes",
                "food-showcase-product-2-text": "The most delicious seasonal cakes.",
                "alt-productShowcase2": "A table with a slice of cake and a tea cup",

                "food-showcase-product-3-title": "Green Tea",
                "food-showcase-product-3-text": "We bring the best varieties from Japan.",
                "alt-productShowcase3": "A set of green tea",

                "food-showcase-product-4-title": "Pleasant Ambience",
                "food-showcase-product-4-text": "A unique culinary experience.",
                "alt-productShowcase4": "Two people enjoying breakfast outside the venue",

                "food-menu-title": "Menu",
                "food-menu-description": "Enjoy our exquisite selection of traditional Japanese sweets, made with the most authentic and delicate flavors. Immerse yourself in the culinary culture of Japan as you savor these unique delights.",

                "food-menu-sweets-title": "🍵 Wagashi (和菓子) - Japanese Sweets 🍵",
                "alt-menuSweetsHeader": "Japanese sweets",

                // Menu - Sweets
                "food-menu-sweet-1-title": "Daifuku (大福)",
                "food-menu-sweet-1-description": "Mochi filled with anko (sweet red bean paste).",
                "food-menu-sweet-1-price": "$3,500",

                "food-menu-sweet-2-title": "Dorayaki (どら焼き)",
                "food-menu-sweet-2-description": "Pancake pastries filled with anko.",
                "food-menu-sweet-2-price": "$2,750",

                "food-menu-sweet-3-title": "Taiyaki (たい焼き)",
                "food-menu-sweet-3-description": "Fish-shaped waffle filled with anko or cream.",
                "food-menu-sweet-3-price": "$4,000",

                "food-menu-sweet-4-title": "Mitarashi Dango (御手洗団子)",
                "food-menu-sweet-4-description": "Skewered mochi dipped in a delicious sweet sauce.",
                "food-menu-sweet-4-price": "$2,500",

                // Menu - Drinks
                "food-menu-drinks-title": "🍵 Traditional Beverages 🍵",
                "alt-menuDrinksHeader": "A cup of tea",

                "food-menu-drink-1-title": "Matcha Latte (抹茶ラテ)",
                "food-menu-drink-1-description": "Matcha green tea with creamy milk.",
                "food-menu-drink-1-price": "$2,500",

                "food-menu-drink-2-title": "Hojicha (ほうじ茶)",
                "food-menu-drink-2-description": "Toasted tea with a smoky and comforting aroma.",
                "food-menu-drink-2-price": "$2,000",

                "food-menu-drink-3-title": "Amazake (甘酒)",
                "food-menu-drink-3-description": "Sweet and non-alcoholic drink made from fermented rice.",
                "food-menu-drink-3-price": "$3,000",

                "food-menu-drink-4-title": "Genmaicha (玄米茶)",
                "food-menu-drink-4-description": "Green tea with roasted rice, a unique and cozy flavor.",
                "food-menu-drink-4-price": "$2,250",

                // Reservations
                "reservation-title": "Make a Reservation",
                "reservation-text": "Visit us at our venue and enjoy a unique culinary experience. Reserve your table to taste our delicious Japanese sweets and traditional beverages. Our cozy ambiance and personalized attention will ensure an unforgettable evening. We look forward to your visit!",

                // My Reservation
                "my-reservation-title": "My Reservation",
                "my-reservation-text": "Enter your ID number to find your reservation and check the details.",

                // Admin
                "admin-title": "Admin",
                "admin-text": "Details of the made reservations.",

                // Footer
                "footer-copyright-appname": "Restorapp",
                "footer-copyright-author": "Marcelo Mendoza",
                "footer-copyright-year": "2023",

                "404-title": "Error 404",
                "404-subtitle": "Page Not Found",
                "404-text": "The resource or page you have requested is not available.",

            }
        }
    }
});

