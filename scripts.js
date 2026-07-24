function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

let activeLang = localStorage.getItem("lang") || "en";

function getData() {
  return activeLang === "fr" ? portfolioDataFr : portfolioDataEn;
}

function render() {
  const d = getData();

  // ── Language toggle ──
  const langHtml = `
    <button class="lang-toggle" id="langToggle" aria-label="Toggle language">
      <span class="lang-opt ${activeLang === 'en' ? 'active' : ''}">${d.ui.langEn}</span>
      <span class="lang-sep">|</span>
      <span class="lang-opt ${activeLang === 'fr' ? 'active' : ''}">${d.ui.langFr}</span>
    </button>`;

  // ── Dark mode toggle ──
  const toggleHtml = `<button class="dark-toggle" id="darkToggle" aria-label="Toggle dark mode"><i class="fas fa-moon"></i></button>`;

  // ── Header ──
  document.querySelector("header").innerHTML =
    langHtml + toggleHtml +
    `<a href="mailto:${d.email}" class="contact-btn"><i class="fas fa-envelope"></i> ${d.ui.contact}</a>`;

  // ── Dark mode logic ──
  const storedDark = localStorage.getItem("darkMode");
  if (storedDark === "true") document.body.classList.add("dark");

  document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    document.querySelector("#darkToggle i").className = isDark ? "fas fa-sun" : "fas fa-moon";
  });

  if (document.body.classList.contains("dark")) {
    document.querySelector("#darkToggle i").className = "fas fa-sun";
  }

  // ── Language switch logic ──
  document.getElementById("langToggle").addEventListener("click", () => {
    activeLang = activeLang === "en" ? "fr" : "en";
    localStorage.setItem("lang", activeLang);
    render();
  });

  // ── Main card ──
  const leftHtml = `
    <div class="main-card-left">
      <div class="portfolio-label">${d.ui.portfolio}</div>
      <h1>${d.name}</h1>
      <p class="role">${d.ui.role}</p>
      <p class="bio">${d.bio}</p>
      <div class="email"><i class="fas fa-envelope"></i> ${d.email}</div>
      <div class="social-links">
        ${d.social.map(s => `<a href="${s.url}" target="_blank" rel="noopener" title="${s.label}"><i class="${s.icon}"></i></a>`).join("")}
      </div>
    </div>`;

  const rightHtml = `
    <div class="main-card-right">
      ${d.specialties.map(sp => `
        <div class="specialty">
          <h3>${sp.title}</h3>
          <p>${sp.text}</p>
        </div>`).join("")}
    </div>`;

  document.getElementById("main-card").innerHTML = leftHtml + rightHtml;

  // ── Tabs ──
  document.getElementById("tabs").innerHTML = `
    <button class="tab-btn active" data-tab="video-games">${d.ui.tabGames}</button>
    <button class="tab-btn" data-tab="subtitling">${d.ui.tabSubtitling}</button>`;

  // ── Video games cards ──
  document.querySelector("#video-games-section .card-grid").innerHTML =
    d.videoGames.map(game => buildGameCard(game, d)).join("");

  // ── Subtitling cards ──
  document.querySelector("#subtitling-section .card-grid").innerHTML =
    d.subtitling.map(proj => buildSubCard(proj, d)).join("");

  // ── Footer ──
  document.querySelector("footer").textContent = d.ui.footer;

  // ── Tab switching ──
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".category-section").forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab + "-section").classList.add("active");
    });
  });
}

function buildGameCard(g, d) {
  let dlcHtml = "";
  if (g.dlcs) {
    dlcHtml = `<div class="dlc-bubbles">${g.dlcs.map(src => `<div class="dlc-bubble"><img src="${src}" alt="DLC"></div>`).join("")}</div>`;
  } else if (g.dlcCount > 0) {
    dlcHtml = `<div class="dlc-bubbles">${"<div class=\"dlc-bubble\">D</div>".repeat(g.dlcCount)}</div>`;
  }

  const imgHtml = g.image ? `<img src="${g.image}" alt="${g.title}">` : `<i class="fas fa-gamepad"></i>`;

  return `
    <div class="project-card">
      <div class="card-illustration">
        ${imgHtml}
      </div>
      <div class="card-body">
        <div class="card-title">${g.title}</div>
        <div class="card-task">${g.task}</div>
        ${g.contentTypes ? `<div class="card-content-types"><span class="ct-label">${d.ui.contentTypes}${d.ui.colon}</span>${g.contentTypes.map(ct => `<span class="ct-tag">${ct}</span>`).join("")}</div>` : ""}
        <div class="card-meta">
          <span><strong>${d.ui.gameYear}${d.ui.colon}</strong> ${g.year}</span>
          <span><strong>${d.ui.dev}${d.ui.colon}</strong> ${g.developer}</span>
          <span><strong>${d.ui.publisher}${d.ui.colon}</strong> ${g.editor}</span>
          <span><strong>${d.ui.words}${d.ui.colon}</strong> ${g.wordcount}</span>
        </div>
        <p class="card-summary">${g.summary}</p>
        <div class="card-genres">
          ${g.genres.map(gen => {
            const c = d.genreColors?.[gen];
            const style = c ? `background:${hexToRgba(c, 0.15)};border-color:${c};color:${c}` : "";
            return `<span class="genre-bubble"${style ? ` style="${style}"` : ""}>${gen}</span>`;
          }).join("")}
        </div>
        ${dlcHtml}
      </div>
    </div>`;
}

function buildSubCard(p, d) {
  const imgHtml = p.image ? `<img src="${p.image}" alt="${p.title}">` : `<i class="fas fa-film"></i>`;

  return `
    <div class="project-card">
      <div class="card-illustration">
        ${imgHtml}
      </div>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-task">${p.task}</div>
        <div class="card-meta">
          <span><strong>${d.ui.subYear}${d.ui.colon}</strong> ${p.year}</span>
          <span><strong>${d.ui.producer}${d.ui.colon}</strong> ${p.producer}</span>
          <span><strong>${p.durationLabel || d.ui.duration}${d.ui.colon}</strong> ${p.duration}</span>
        </div>
        <p class="card-summary">${p.summary}</p>
        <div class="card-genres">
          ${p.genres.map(gen => {
            const c = d.genreColors?.[gen];
            const style = c ? `background:${hexToRgba(c, 0.15)};border-color:${c};color:${c}` : "";
            return `<span class="genre-bubble"${style ? ` style="${style}"` : ""}>${gen}</span>`;
          }).join("")}
        </div>
      </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", render);
