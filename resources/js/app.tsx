import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { App as __App } from "@/Components/App/index";

const appName = import.meta.env.VITE_APP_NAME;
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <__App>
                <App {...props} />
            </__App>
        );
        delete el.dataset.page;
    },
    progress: {
        color: "#4B5563",
    },
});
