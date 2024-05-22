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
                111216: "#111216",
                "14161d": "#14161d",
                tFFF2D7: "#FFF2D7",
                tFFE0B5: "#FFE0B5",
                tF8C794: "#F8C794",
                tD8AE7E: "#D8AE7E",
                t2D2424: "#2D2424",
                t87431D: "#87431D",
                tE0C097: "#E0C097",
                t322C2B: "#322C2B",
                visne: "#803D3B",
                vadigulu: "#ab4e52",
                tAF8260: "#AF8260",
                tE4C59E: "#E4C59E",
                F7F2EB: "#F7F2EB",
                havuc: "#334EAC",
                mandalina: "#7096D1",
                sky: "#D0E3FF",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                helvetica: "Helvetica",
                helvetica_rounded: "Helvetica-Rounded",
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
