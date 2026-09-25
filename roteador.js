(() => {
  const SELETOR_CONTEUDO = "#conteudo-principal";

  const PAGINAS = new Set([
    "index.html",
    "projetos.html",
    "cadastro-voluntario.html",
    "privacidade.html"
  ]);

  const nomeArquivo = (url) =>
    url.pathname.split("/").pop() || "index.html";

  function ehRotaInterna(link) {
    if (!link || link.target === "_blank" || link.hasAttribute("download")) {
      return false;
    }

    const url = new URL(link.href, location.href);

    return (
      url.origin === location.origin &&
      PAGINAS.has(nomeArquivo(url))
    );
  }

  function atualizarMenu(url) {
    document.querySelectorAll("nav a").forEach((link) => {
      link.removeAttribute("aria-current");

      if (
        nomeArquivo(new URL(link.href, location.href)) ===
        nomeArquivo(url)
      ) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function iniciarComponentes() {
    window.initCadastro?.();
    window.initCopiarPix?.();
  }

  async function renderizar(url, adicionarHistorico = true) {
    const principal = document.querySelector(SELETOR_CONTEUDO);

    if (!principal) return;

    try {
      const resposta = await fetch(url.href);

      if (!resposta.ok) {
        throw new Error("Falha ao carregar a rota");
      }

      const html = await resposta.text();

      const documento = new DOMParser().parseFromString(
        html,
        "text/html"
      );

      const novoConteudo =
        documento.querySelector(SELETOR_CONTEUDO) ||
        documento.querySelector("main");

      if (!novoConteudo) {
        throw new Error("Conteúdo principal não encontrado");
      }

      principal.innerHTML = novoConteudo.innerHTML;

      document.dispatchEvent(
        new CustomEvent("spa:conteudo-carregado")
      );

      if (typeof window.renderizarProjetos === "function") {
        window.renderizarProjetos();
      }

      document.title = documento.title || document.title;
      document.body.className = documento.body.className;

      if (adicionarHistorico) {
        history.pushState(
          { spa: true },
          "",
          url.pathname + url.search + url.hash
        );
      }

      atualizarMenu(url);
      iniciarComponentes();

      if (url.hash) {
        requestAnimationFrame(() =>
          document.querySelector(url.hash)?.scrollIntoView()
        );
      } else {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      }
    } catch (erro) {
      console.error(erro);
      location.href = url.href;
    }
  }

  document.addEventListener("click", (evento) => {
    const link = evento.target.closest("a[href]");

    if (!ehRotaInterna(link)) return;

    evento.preventDefault();

    renderizar(
      new URL(link.href, location.href),
      true
    );
  });

  window.addEventListener("popstate", () => {
    renderizar(new URL(location.href), false);
  });

  document.addEventListener("DOMContentLoaded", () => {
    atualizarMenu(new URL(location.href));
    iniciarComponentes();
  });
})();
