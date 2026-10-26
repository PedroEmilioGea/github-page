/* ==========================================================
   Portfólio · Pedro Emílio Gêa
   Interações: tema claro/escuro, menu mobile, filtro de projetos
   ========================================================== */

(function () {
  "use strict";

  const root = document.documentElement;

  /* ---------- Tema claro/escuro ---------- */
  const THEME_KEY = "portfolio-tema";

  function lerTemaSalvo() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  function salvarTema(tema) {
    try { localStorage.setItem(THEME_KEY, tema); } catch (e) { /* navegação privada */ }
  }

  function temaInicial() {
    const salvo = lerTemaSalvo();
    if (salvo === "light" || salvo === "dark") return salvo;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  root.setAttribute("data-theme", temaInicial());

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const novo = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", novo);
      salvarTema(novo);
    });
  }

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const aberto = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(aberto));
      navToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Filtro de projetos ---------- */
  const filtros = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll("#lista-projetos .card");

  filtros.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const categoria = botao.dataset.filter;

      filtros.forEach(function (b) {
        b.classList.toggle("is-active", b === botao);
        b.setAttribute("aria-pressed", String(b === botao));
      });

      cards.forEach(function (card) {
        const mostrar = categoria === "todos" || card.dataset.categoria === categoria;
        card.classList.toggle("is-hidden", !mostrar);
      });
    });
  });


  /* ---------- Repositórios do GitHub (integração via API pública) ---------- */
  const listaRepos = document.getElementById("lista-repos");
  const statusRepos = document.getElementById("repos-status");
  const USUARIO_GITHUB = "PedroEmilioGea";

  function texto(tag, classe, conteudo) {
    const el = document.createElement(tag);
    if (classe) el.className = classe;
    if (conteudo) el.textContent = conteudo; // textContent evita injeção de HTML
    return el;
  }

  function cardRepo(repo) {
    const card = texto("article", "card", "");
    const topo = texto("div", "card__top", "");
    topo.appendChild(texto("span", "badge badge--pessoal", "GitHub"));
    topo.appendChild(texto("span", "card__meta", new Date(repo.pushed_at).toLocaleDateString("pt-BR")));
    card.appendChild(topo);
    card.appendChild(texto("h3", "card__title", repo.name));
    card.appendChild(texto("p", "card__desc", repo.description || "Sem descrição."));

    const stats = texto("div", "card__stats", "");
    if (repo.language) {
      const lang = texto("span", "", "");
      lang.appendChild(texto("span", "lang-dot", ""));
      lang.appendChild(document.createTextNode(repo.language));
      stats.appendChild(lang);
    }
    stats.appendChild(texto("span", "", "★ " + repo.stargazers_count));
    card.appendChild(stats);

    const links = texto("div", "card__links", "");
    const codigo = texto("a", "", "Código →");
    codigo.href = repo.html_url; codigo.target = "_blank"; codigo.rel = "noopener";
    links.appendChild(codigo);
    if (repo.has_pages) {
      const site = texto("a", "", "Site →");
      site.href = "https://" + USUARIO_GITHUB.toLowerCase() + ".github.io/" + repo.name + "/";
      site.target = "_blank"; site.rel = "noopener";
      links.appendChild(site);
    }
    card.appendChild(links);
    return card;
  }

  if (listaRepos && "fetch" in window) {
    fetch("https://api.github.com/users/" + USUARIO_GITHUB + "/repos?sort=pushed&per_page=12", {
      headers: { "Accept": "application/vnd.github+json" }
    })
      .then(function (resp) {
        if (!resp.ok) throw new Error("HTTP " + resp.status);
        return resp.json();
      })
      .then(function (repos) {
        const publicos = repos.filter(function (r) { return !r.fork && !r.private; });
        if (statusRepos) statusRepos.remove();
        if (!publicos.length) {
          listaRepos.appendChild(texto("p", "repos__status", "Nenhum repositório público encontrado."));
          return;
        }
        publicos.forEach(function (r) { listaRepos.appendChild(cardRepo(r)); });
      })
      .catch(function () {
        if (statusRepos) statusRepos.textContent = "Não foi possível carregar os repositórios agora. Veja a lista completa no GitHub.";
      });
  }

  /* ---------- Animação ao rolar ---------- */
  const animaveis = document.querySelectorAll(".section__title, .section__lead, .card, .doc, .about");
  if ("IntersectionObserver" in window) {
    animaveis.forEach(function (el) { el.classList.add("reveal"); });
    const observer = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });
    animaveis.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Ano no rodapé ---------- */
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
