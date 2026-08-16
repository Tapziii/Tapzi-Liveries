class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navigation">
        <div class="nav-container">
          <div class="logo-wrapper">
             <a href="./">
                <img src="logo.png" alt="Chaos Liveries Logo" class="logo-image">
             </a>
          </div>
          <div class="menu-toggle"><i class="fas fa-bars"></i></div>
          <div class="nav-links">
            <a href="./" class="nav-link" data-page="index">HOME</a>
            <a href="./hangar" class="nav-link" data-page="hangar">LIVERY HANGAR</a>
            <a href="./paintshop" class="nav-link" data-page="paintshop">PAINTSHOP</a>
            <a href="./custom" class="nav-link" data-page="custom">CUSTOM LIVERIES</a>
            <a href="./showcase" class="nav-link" data-page="showcase">COMMUNITY</a>
          </div>
        </div>
      </nav>
    `;

    const currentPath = window.location.pathname;
    const links = this.querySelectorAll('.nav-link');
    links.forEach(link => {
      const page = link.getAttribute('data-page');
      if (
        currentPath.includes(page) || 
        (page === 'index' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))
      ) {
        link.classList.add('active');
      }
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-content">
          <div class="social-links">
             <div class="social-icons">
                 <a href="https://www.instagram.com/_tapzi_/" target="_blank" class="social-icon instagram">
                  <i class="fab fa-instagram"></i>
                 </a>
                 <a href="https://paypal.me/tapzimsfs" target="_blank" class="social-icon paypal">
                   <i class="fab fa-paypal"></i>
                 </a>
             </div>
            <div class="footer-copyright">
              &copy; 2026 Tapzi Liveries
            </div>
            <div class="contact-info">
              <div class="contact-item">Discord: tapzi</div>
              <div class="contact-item">Email: tapziworld@gmail.com</div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

class SiteLoader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="loadingScreen" class="loading-screen">
        <div class="scan-line"></div>
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-shape shape-3"></div>
        <div class="loading-container">
          <div class="rotation-wrapper">
            <div class="square-loader"></div>
          </div>
          <div class="loading-title">
            <span class="loading-title-top">Tapzi</span>
            <span class="loading-title-bottom">Liveries</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
customElements.define('site-loader', SiteLoader);

