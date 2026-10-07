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
