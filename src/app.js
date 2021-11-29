import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";
import Error404Screen from "./screens/Error404.js";

const routes = { //Key is names of URL and values are screens responding to that URL
    "/":HomeScreen,
    "/product/:id": ProductScreen, //:id is a placeholder for the real ID

}

const router = () => {
    const request = parseRequestUrl();
    const parseUrl = 
        (request.resource ? `/${request.resource}` : "/") +
        (request.id? "/:id" : "") + 
        (request.verb ? `/${request.verb}` : "");
    const screen = routes[parseUrl]? routes[parseUrl] : Error404Screen;
    
    const main = document.getElementById("main_container"); //Select main element from HTML
    main.innerHTML = screen.render(); //Insert HTML code using render method from HomeScreen.js into the main element
}

window.addEventListener("load", router); //Execute router function on page load
window.addEventListener("hashchange", router)