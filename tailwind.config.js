import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],
    theme: {
        extend: {
            colors: {
                "1e2029": "#1e2029",
                111216: "#111216",
                FFF2D7: "#FFF2D7",
                FFE0B5: "#FFE0B5",
                visne: "#803D3B",
                vadigulu: "#ab4e52",
                F7F2EB: "#F7F2EB",
                havuc: "#334EAC",
                mandalina: "#7096D1",
                sky: "#D0E3FF",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                typold: "Typold",
                "typold-black": "Typold-Black",
                "typold-book": "Typold-Book",
                "typold-condensed": "Typold-Condensed",
                "typold-extended": "Typold-Extended",
            },
        },
    },

    plugins: [
        forms,
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                ".scrollbar-hide::-webkit-scrollbar": { display: "none" },
                ".scrollbar-hide": {
                    "scrollbar-width": "none",
                    "-ms-overflow-style": "none",
                },
            };
            addUtilities(newUtilities);
        }),
    ],
};
