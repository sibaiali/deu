// Client-Side Hash Router
export class Router {
  constructor(routes = {}, defaultRoute = 'heute') {
    this.routes = routes;
    this.defaultRoute = defaultRoute;
    this.currentRoute = null;
    this.params = {};
    
    window.addEventListener('hashchange', () => this.handleRoute());

    // Intercept clicks on hash navigation links to guarantee routing even on re-clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        const targetHash = link.getAttribute('href');
        if (targetHash) {
          const raw = targetHash.slice(1);
          const [path] = raw.split('?');
          if (this.currentRoute === path) {
            // Same route clicked - force re-render
            this.handleRoute();
          }
        }
      }
    });
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
    this.currentRoute = path || this.defaultRoute;
    this.params = {};

    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [k, v] of searchParams.entries()) {
        this.params[k] = v;
      }
    }

    const handler = this.routes[this.currentRoute] || this.routes[this.defaultRoute];
    if (handler) {
      try {
        handler(this.params);
      } catch (err) {
        console.error('Error executing route [' + this.currentRoute + ']:', err);
        const container = document.getElementById('content-container') || document.body;
        container.innerHTML = '<div class="p-8 bento-card border-red-500/50 text-red-400"><h2>Fehler beim Laden dieser Seite</h2><pre>' + (err.stack || err) + '</pre></div>';
      }
    } else {
      console.warn('No handler for route:', this.currentRoute);
    }

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(el => {
      if (el.getAttribute('data-route') === this.currentRoute) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    document.querySelectorAll('.mobile-nav-item').forEach(el => {
      const href = (el.getAttribute('href') || '').replace('#', '');
      if (href === this.currentRoute) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    window.scrollTo(0, 0);
  }
}
