(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <nav class="navbar">
      
      <div class="nav-left">
        <a href="/" onclick="navigate('/'); return false;">Home</a>
        <a href="/cv" onclick="navigate('/cv'); return false;">CV</a>
        <a href="/projets" onclick="navigate('/projets'); return false;">Projets</a>
      </div>

      <div class="nav-right">
        <button id="theme-toggle" onclick="toggleTheme()">🌙</button>

        <button class="burger" onclick="toggleMenu()">
          ☰
        </button>
      </div>

    </nav>

    <div id="mobile-menu" class="mobile-menu">
      <a href="/" onclick="navigate('/'); closeMenu(); return false;">Home</a>
      <a href="/cv" onclick="navigate('/cv'); closeMenu(); return false;">CV</a>
      <a href="/projets" onclick="navigate('/projets'); closeMenu(); return false;">Projets</a>
    </div>
  `}function t(){return`
    ${e()}

    <section class="hero">
      <h1>Axelle <span class="highlight">Viandier</span></h1>
      <p>Développeuse • Créative • Designer</p>

      <div class="hero-buttons">
        <a class="btn" href="/projets" onclick="navigate('/projets'); return false;">
          Mes projets
        </a>

        <a class="btn" href="/cv" onclick="navigate('/cv'); return false;">
          Mon CV
        </a>

        <a class="btn" href="https://art.picselvaot.fr">
          Mon portfolio
        </a>
      </div>

      <div class="hero-card">
        <h3>À propos</h3>
        <p>
          Je construis des interfaces modernes, des expériences web propres
          et des projets créatifs mêlant développement et design.
        </p>
      </div>
    </section>
  `}function n(){return`
    ${e()}

    <section style="padding:40px;">
      <h1>Mon CV</h1>

      <p>Tu peux le consulter ou le télécharger :</p>

      <div style="margin-top: 20px; display: flex; gap: 15px;">
        <a 
          href="/CV_Axelle_Viandier.pdf" 
          target="_blank"
          style="
            padding: 10px 15px;
            border: 1px solid var(--border);
            border-radius: 10px;
            text-decoration: none;
          "
        >
          👁️ Voir le CV
        </a>

        <a 
          href="/CV_Axelle_Viandier.pdf" 
          download
          style="
            padding: 10px 15px;
            border: 1px solid var(--contrast);
            border-radius: 10px;
            text-decoration: none;
          "
        >
          ⬇️ Télécharger
        </a>
      </div>

      <iframe
        src="/CV_Axelle_Viandier.pdf"
        style="
          width: 100%;
          height: 80vh;
          margin-top: 30px;
          border: 1px solid var(--border);
          border-radius: 10px;
        "
      ></iframe>
    </section>
  `}var r=[{id:`pratik`,title:`Pratik`,description:`Une librairie python `,stack:[`Python`,`Librairie`,`PyPi`],cover:`/assets/logo_pratik.png`,gallery:[]},{id:`tyradex`,title:`Tyradex`,description:`Interface Python à l'API Web Tyradex.`,stack:[`Python`,`Librairie`,`PyPi`,`API`,`Pokémon`],cover:`/assets/logo_tyradex.png`,gallery:[]},{id:`sweetdawn`,title:`SweetDawn`,description:`Controlleur de simulateur d'aube AML005.`,stack:[`C`,`AML005`,`RetroEngineering`,`Bluetooth`,`Simulateur d'Aube`],cover:null,gallery:[]}];function i(){let t=r.map(e=>`
      <div class="project-card" onclick="navigate('/projets/${e.id}')">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
    `).join(``);return`
    ${e()}

    <section>
      <h1 style="padding:20px;">Projets</h1>

      <div class="projects-grid">
        ${t}
      </div>
    </section>
  `}function a(t){let n=r.find(e=>e.id===t);return n?`
    ${e()}

    <div class="project-page">

      <h1 class="project-title">${n.title}</h1>

      <p class="project-desc">
        ${n.description}
      </p>

      <img class="project-cover" src="${n.cover}" alt="${n.title}" />

      <div class="tags">
        ${n.stack.map(e=>`<span class="tag">${e}</span>`).join(``)}
      </div>

      ${n.gallery&&n.gallery.length>0?`
        <div class="gallery">
          ${n.gallery.map(e=>`<img src="${e}" />`).join(``)}
        </div>
      `:``}

      <a class="back-btn" href="/projets" onclick="navigate('/projets'); return false;">
        ← Retour aux projets
      </a>

    </div>
  `:`
      ${e()}
      <div class="project-page">
        <h1>Projet introuvable</h1>
        <a class="back-btn" href="/projets" onclick="navigate('/projets'); return false;">
          ← Retour
        </a>
      </div>
    `}function o(e){document.querySelector(`#app`).innerHTML=`
    <div class="page">
      ${e()}
    </div>
  `}function s(){let e=window.location.pathname,r={"/":t,"/cv":n,"/projets":i};if(e.startsWith(`/projets/`)&&e!==`/projets`){let t=e.split(`/`)[2];o(()=>a(t));return}o(r[e]||t)}function c(e){window.history.pushState({},``,e),s()}window.navigate=c;function l(e){document.documentElement.setAttribute(`data-theme`,e),localStorage.setItem(`theme`,e),f()}function u(){return localStorage.getItem(`theme`)||`light`}function d(){l(u()===`light`?`dark`:`light`)}function f(){let e=document.querySelector(`#theme-toggle`);e&&(e.textContent=u()===`light`?`☀️`:`🌙`)}function p(){document.querySelector(`#mobile-menu`).classList.toggle(`active`)}function m(){document.querySelector(`#mobile-menu`).classList.remove(`active`)}window.toggleMenu=p,window.closeMenu=m,window.setTheme=l,window.toggleTheme=d,l(u()),window.addEventListener(`popstate`,s),s();