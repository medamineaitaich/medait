const q = (s) => document.querySelector(s);
const content = window.siteContent || { nav: [], collections: [], blog: [] };

function injectLayout() {
  const h = q('[data-include="header"]');
  if (h) {
    h.innerHTML = `<div class="container nav"><a class="logo" href="/index.html"><span class="logo-mark"></span>ANFASTYLE</a>
      <nav class="nav-links">${content.nav[0].map(([label,href])=>`<a href="${href}">${label}</a>`).join('')}<a href="/search.html" aria-label="Search">🔍</a></nav></div>`;
  }
  const f = q('[data-include="footer"]');
  if (f) {
    f.innerHTML = `<div class="container footer-grid"><div><strong>ANFASTYLE</strong><p>Powered by MEDAIT Registered LLC, New Mexico, USA</p><p>1209 MOUNTAIN ROAD PL NE STE R<br/>Albuquerque, NM 87110<br/>+1 (202) 773-7432</p></div><div><p><a href="mailto:contact@anfastyle.com">contact@anfastyle.com</a><br/><a href="mailto:contact@medaitllc.com">contact@medaitllc.com</a></p></div><div><a href="/legal/privacy.html">Privacy</a><br/><a href="/legal/terms.html">Terms</a><br/><a href="/legal/refund.html">Refunds</a><br/><a href="/legal/shipping.html">Shipping</a><br/><a href="/legal/disclaimer.html">Disclaimer</a></div></div>`;
  }
}

function renderHome() {
  const cg = q('#collections-grid');
  if (cg) cg.innerHTML = content.collections.map(c => `<article class="card product-card"><img src="${c.image}" alt="${c.name}" loading="lazy"/><h3>${c.name}</h3><p>${c.desc}</p><a class="btn btn-secondary" href="/collections/${c.slug}.html">Browse</a></article>`).join('');
  const bg = q('#blog-grid');
  if (bg) bg.innerHTML = content.blog.map(p => `<article class="card"><p class="eyebrow">Blog</p><h3>${p.title}</h3><a href="/blog.html">Read article</a></article>`).join('');
}

function tabs() {
  const btns = document.querySelectorAll('[data-tab-btn]');
  if (!btns.length) return;
  btns.forEach(btn=>btn.addEventListener('click', ()=>{
    q('#tab-content').textContent = btn.dataset.tabBody;
  }));
}

injectLayout();
renderHome();
tabs();
