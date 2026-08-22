// Client-Side Hash Router

export class Router {
  constructor(routes = {}, defaultRoute = 'heute') {
    this.routes = routes;
    this.defaultRoute = defaultRoute;
    this.currentRoute = null;
    this.params = {};
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  init() {
    this.handleRoute();
  }

  navigate(routePath) {
    window.location.hash = '#' + routePath;
  }

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || this.defaultRoute;
    const [path, queryString] = rawHash.split('?');
    this.currentRoute = path;
    this.params = {};

    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [k, v] of searchParams.entries()) {
        this.params[k] = v;
      }
    }

    const handler = this.routes[path] || this.routes[this.defaultRoute];
    if (handler) {
      handler(this.params);
    }

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(el => {
      if (el.getAttribute('data-route') === path) {
        el.classList.add('nav-active');
      } else {
        el.classList.remove('nav-active');
      }
    });

    // Scroll to top
    window.scrollTo(0, 0);
  }
}
