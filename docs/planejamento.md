# Planejamento do Repositório

> Etapa 1 do desafio **"Criação de Repositório com Versionamento"** — Bootcamp I.

## 1. Objetivo

Centralizar, em um único repositório público, meus projetos **acadêmicos** e **pessoais**, a documentação de cada um e um site de portfólio publicado com **GitHub Pages**, integrado ao meu perfil do **LinkedIn**.

## 2. Seções do repositório

| Seção | Pasta | O que contém |
|---|---|---|
| Site do portfólio | `/` (raiz) + `assets/` | Página web publicada no GitHub Pages (`index.html`, CSS, JS e imagens). |
| Projetos acadêmicos | `projetos-academicos/` | Trabalhos e desafios da faculdade/bootcamp, um projeto por pasta. |
| Projetos pessoais | `projetos-pessoais/` | Estudos e projetos próprios (automação, IA, scripts), um projeto por pasta. |
| Documentação | `docs/` | Planejamento, guia de versionamento, colaboração e integração com o LinkedIn. |
| Apresentação | `apresentacao/` | Slides em HTML e roteiro do vídeo de 5 minutos (YouTube). |

## 3. Estrutura de diretórios

```text
github-page/
├── index.html                  # Página inicial do portfólio (GitHub Pages)
├── assets/
│   ├── css/style.css           # Estilos do site
│   ├── js/main.js              # Interações (menu, filtro de projetos, tema)
│   └── img/                    # Imagens e ícones
├── projetos-academicos/
│   ├── README.md               # Índice dos projetos acadêmicos
│   └── 01-portfolio-github-pages/
│       └── README.md
├── projetos-pessoais/
│   └── README.md               # Índice dos projetos pessoais
├── docs/
│   ├── README.md               # Índice da documentação
│   ├── planejamento.md         # Este arquivo
│   ├── versionamento.md        # Boas práticas de Git e padrão de commits
│   ├── colaboracao.md          # Fluxo de branches, Pull Requests e Issues
│   ├── modelo-readme-projeto.md # Modelo de README para novos projetos
│   └── linkedin.md             # Como o repositório foi integrado ao LinkedIn
├── apresentacao/
│   ├── index.html              # Slides da apresentação
│   └── roteiro.md              # Roteiro do vídeo de 5 minutos
├── CHANGELOG.md                # Histórico de versões (v1.0, v1.1, ...)
├── LICENSE                     # Licença MIT
├── .gitignore
├── .nojekyll                   # Publica os arquivos sem processamento do Jekyll
└── README.md                   # Apresentação do repositório
```

## 4. Convenções adotadas

- **Nomes de pastas** em minúsculas, sem acentos, separados por hífen (`kebab-case`), com prefixo numérico para manter a ordem (`01-`, `02-`...).
- **Todo projeto tem um `README.md`** seguindo o mesmo modelo (descrição, objetivo, tecnologias, como executar, aprendizados, status).
- **Commits** seguem o padrão *Conventional Commits* (ver [`versionamento.md`](versionamento.md)).
- **Versões** marcadas com *tags* semânticas (`v1.0`, `v1.1`, ...) e registradas no [`CHANGELOG.md`](../CHANGELOG.md).

## 5. Roadmap de versões

| Versão | Entrega |
|---|---|
| `v1.0` | Estrutura do repositório + primeira versão do site no GitHub Pages + documentação base. |
| `v1.1` | Projetos acadêmicos e pessoais adicionados (pastas, READMEs e cards no site). |
| `v1.2` | Slides, roteiro do vídeo e integração com o LinkedIn documentada. |
