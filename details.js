/* ---------- Header: hamburger + dark mode ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("active");
  hamburger.innerHTML = open ? "✖" : "☰";
});

const toggle = document.getElementById("darkModeToggle");
try {
  if (localStorage.getItem("Theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }
} catch (e) {}
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
  try { localStorage.setItem("Theme", toggle.checked ? "dark" : "light"); } catch (e) {}
});

/* ---------- Render project ---------- */
const app = document.getElementById("app");
const id = new URLSearchParams(location.search).get("id");
const idx = PROJECTS.findIndex(p => p.id === id);

if (idx === -1) {
  app.innerHTML = `<div class="pd-hero" style="grid-template-columns:1fr;text-align:center">
    <div><h2 style="text-align:center">Project not found</h2>
    <a class="pd-btn primary" href="index.html#projects">Back to Projects</a></div></div>`;
} else {
  const p = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  document.title = `${p.title} | Abdullah`;

  const links = p.links.map(l =>
    `<a class="pd-btn ${l.primary ? "primary" : ""}" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`
  ).join("");

  app.innerHTML = `
    <div class="pd-hero">
      <div>
        <a class="back-link" href="index.html#projects">← Back to Projects</a>
        <h2>${p.title}</h2>
        <p class="pd-tagline">${p.tagline}</p>
        <div class="chips"><span class="chip status">${p.status}</span><span class="chip">${p.type}</span></div>
        <div class="pd-actions">${links}</div>
      </div>
      <div class="pd-img-wrap"><img src="${p.image}" alt="${p.title}" /></div>
    </div>

    <div class="pd-content">
      <div class="pd-block reveal"><h2>Overview</h2><p>${p.overview}</p></div>

      <div class="pd-block reveal"><h2>Key Features</h2>
        <ul class="feature-list">
          ${p.features.map((f, i) => `<li style="animation-delay:${i * 0.15}s">${f}</li>`).join("")}
        </ul>
      </div>

      <div class="pd-block reveal"><h2>Tech Stack</h2>
        <div class="tech-list">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
      </div>

      <div class="two-col reveal">
        <div class="pd-block"><h2>Challenge</h2><p>${p.challenge}</p></div>
        <div class="pd-block"><h2>Solution</h2><p>${p.solution}</p></div>
      </div>
    </div>

    <div class="pd-nav reveal">
      <a href="project-details.html?id=${prev.id}"><small>← Previous</small>${prev.title}</a>
      <a class="next" href="project-details.html?id=${next.id}"><small>Next →</small>${next.title}</a>
    </div>`;

  /* Scroll reveal (fades in once, doesn't fade out again) */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- Scroll progress bar ---------- */
const bar = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
});
