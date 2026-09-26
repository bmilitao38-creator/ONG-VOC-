# ONG Você É +

Projeto acadêmico de desenvolvimento Front-End criado para fins de estudo no curso de Análise e Desenvolvimento de Sistemas.

A aplicação representa o site fictício da **ONG Você É +**, instituição voltada ao acolhimento de crianças e adolescentes.

## 🌐 Site publicado

O projeto está publicado por meio do GitHub Pages.

A aplicação pode ser acessada pela página inicial disponibilizada no GitHub Pages deste repositório.

## 🎯 Objetivo

Desenvolver uma aplicação web utilizando HTML5, CSS3 e JavaScript, aplicando conceitos de:

- HTML semântico;
- estilização e responsividade com CSS;
- manipulação do DOM;
- navegação no modelo SPA;
- componentes gerados dinamicamente;
- armazenamento local com localStorage;
- validação de formulário;
- acessibilidade;
- versionamento com Git e GitHub;
- publicação com GitHub Pages.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- DOM
- LocalStorage
- Git
- GitHub
- GitHub Pages

O projeto utiliza tecnologias nativas do navegador, sem frameworks JavaScript.

## 📁 Estrutura do projeto

```text
ONG-VOC-/
├── 111.jpg
├── 222aaa.jpg
├── 333.jpeg
├── GITFLOW.md
├── LEIA-ME.txt
├── README.md
├── index.html
├── projetos.html
├── cadastro-voluntario.html
├── privacidade.html
├── estilos.css
├── cadastro.js
├── copiar-pix.js
├── roteador.js
└── templates.js

```

## 📄 Páginas

### Página inicial

O arquivo `index.html` apresenta informações institucionais da ONG, incluindo missão, visão, valores e formas de participação.

### Projetos

O arquivo `projetos.html` apresenta os projetos da instituição e uma área demonstrativa de doação via Pix.

Os projetos são renderizados dinamicamente pelo arquivo `templates.js`.

### Cadastro de voluntário

O arquivo `cadastro-voluntario.html` contém um formulário para demonstração do cadastro de voluntários.

O formulário possui validação dos campos, verificação da idade mínima de 18 anos e mensagens de retorno para o usuário.

### Política de privacidade

O arquivo `privacidade.html` apresenta um modelo acadêmico de política de privacidade relacionado aos dados utilizados no formulário.

## 🔄 Navegação SPA

O arquivo `roteador.js` implementa parte da navegação no modelo Single Page Application (SPA).

A navegação interna utiliza recursos como:

- `fetch()`;
- `DOMParser`;
- `history.pushState()`;
- evento `popstate`;
- atualização dinâmica de `#conteudo-principal`.

Dessa forma, o conteúdo principal pode ser atualizado sem a necessidade de recarregar completamente a página durante a navegação interna.

## 🧩 Componentes dinâmicos

O arquivo `templates.js` gera dinamicamente os componentes apresentados na página de projetos.

Entre eles estão os projetos:

- CDCA — Em andamento;
- Casa de Apoio — Ativo.

Os badges ajudam a identificar visualmente o estado de cada projeto.

## 💾 LocalStorage

O formulário de voluntariado utiliza `localStorage` para armazenar e restaurar os dados preenchidos no navegador.

São utilizados:

- `JSON.stringify()` para converter os dados em texto;
- `JSON.parse()` para recuperar os dados armazenados.

Nenhum dado é enviado para um servidor.

## 📝 Formulário de voluntariado

O formulário funciona em **modo demonstração**.

Entre as funcionalidades implementadas estão:

- validação dos campos obrigatórios;
- validação de e-mail pelo navegador;
- verificação da idade mínima de 18 anos;
- armazenamento local dos campos;
- restauração dos dados;
- mensagem de erro;
- mensagem de confirmação;
- gerenciamento de foco após o retorno ao usuário.

Após um cadastro válido, é exibida a mensagem:

> Cadastro de demonstração concluído.

O projeto não possui backend para recebimento dos dados.

## 💳 Demonstração de Pix

A página de projetos possui uma chave Pix fictícia utilizada exclusivamente para demonstração acadêmica.

O arquivo `copiar-pix.js` permite copiar a chave para a área de transferência e apresenta uma mensagem de confirmação ao usuário.

Nenhuma transferência real deve ser realizada.

## ♿ Acessibilidade

O projeto utiliza recursos de acessibilidade, incluindo:

- HTML semântico;
- textos alternativos nas imagens;
- `aria-live`;
- `aria-current`;
- `role="status"`;
- gerenciamento de foco;
- estados de foco visíveis;
- suporte a `prefers-reduced-motion`.

## 📱 Responsividade

O arquivo `estilos.css` contém as regras visuais e adaptações necessárias para diferentes tamanhos de tela.

O layout foi desenvolvido para funcionar tanto em computadores quanto em dispositivos com telas menores.

## 🚀 Publicação

O projeto está publicado utilizando **GitHub Pages**, a partir da branch principal e da raiz do repositório.

A versão publicada foi testada no navegador, incluindo:

- página inicial;
- página de projetos;
- componentes dinâmicos;
- navegação SPA;
- área de Pix;
- botão para copiar a chave;
- formulário de voluntariado;
- armazenamento local;
- política de privacidade.

## ⚠️ Projeto acadêmico

Este projeto foi desenvolvido exclusivamente para fins acadêmicos.

Os dados da ONG, endereço, telefones, redes sociais, chave Pix e demais informações apresentadas são fictícios ou utilizados apenas como demonstração.

O formulário não envia dados para um servidor e a chave Pix não deve ser utilizada para transferências reais.

## 👨‍💻 Autor

**Bruno Militão**

Projeto desenvolvido como atividade acadêmica do curso de **Análise e Desenvolvimento de Sistemas**.
