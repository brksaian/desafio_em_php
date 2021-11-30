import Dashboard from "./views/Dashboard.js";
import Login from "./views/Login.js";
import CriarLogin from "./views/CriarLogin.js";
import CadastroClientes from "./views/CadastroClientes.js";
import SemLogin from "./views/SemLogin.js";

var logado = false;

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/noLogon", view: SemLogin },
        { path: "/Login", view: Login },
        { path: "/NovoUsuario", view: CriarLogin },
        { path: "/NovoCliente", view: CadastroClientes },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }
    if(!logado && (match.route.path != '/' && match.route.path != '/Login')){
        match = {
            route: routes[1],
            result: [location.pathname]
        };
    }
    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});