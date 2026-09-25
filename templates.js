(() => {
  const projetos = [
    {
      titulo: "CDCA",
      status: "Em andamento",
      classeStatus: "badge-andamento",
      descricao: "Projeto acolhendo com amor, promovendo dignidade."
    },
    {
      titulo: "Casa de Apoio",
      status: "Ativo",
      classeStatus: "badge-ativo",
      descricao: "Você pode fazer e ser a diferença na vida de crianças e adolescentes."
    }
  ];

  function escaparHTML(valor) {
    return String(valor)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderizarProjetos() {
    const container = document.getElementById("lista-projetos");
    if (!container) return;

    container.innerHTML = projetos.map((projeto) => `
      <div class="componente-projeto">
        <h2 class="item-projeto">
          ${escaparHTML(projeto.titulo)}
          <span class="badge ${escaparHTML(projeto.classeStatus)}">
            ${escaparHTML(projeto.status)}
          </span>
        </h2>
        <p>${escaparHTML(projeto.descricao)}</p>
      </div>
    `).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderizarProjetos);
  } else {
    renderizarProjetos();
  }

  /* Permite renderizar novamente após a troca de conteúdo feita pela SPA. */
  document.addEventListener("spa:conteudo-carregado", renderizarProjetos);

  window.renderizarProjetos = renderizarProjetos;
})();
