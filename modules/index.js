const routes = {
  "/": "./pages/home.html",
  "/about": "./pages/about.html",
  "/contact": "./pages/contact.html",
  404: "./pages/error.html",
};

handle();

window.onpopstate = () => handle();
window.route = () => route();
