# Plano de Implantação — PortfolioHUB + IA Gemini

> Entrega Final do **Bootcamp I** (CEUB). O PortfolioHUB é a plataforma centralizada que exibe e gerencia meus projetos: site no GitHub Pages, repositório versionado com Git e integrações com a API do GitHub, com o Google Gemini como guia da implantação.

| Item | Link |
|---|---|
| PortfolioHUB (produção) | https://pedroemiliogea.github.io/github-page/ |
| Repositório | https://github.com/PedroEmilioGea/github-page |
| Slides da implantação | https://pedroemiliogea.github.io/github-page/apresentacao/implantacao.html |

---

## 1. Planejamento da Implantação

### 1.1 Plano de implantação

| Fase | Atividade | Ferramenta | Entregável | Status |
|---|---|---|---|---|
| 1. Planejamento | Definir escopo, etapas e cronograma | Google Docs + Gemini | Este plano | ✅ |
| 1. Planejamento | Configurar o Gemini como guia (Gem) | Google Gemini | [`docs/gemini.md`](gemini.md) | ✅ |
| 2. Ambiente | Repositório dedicado e GitHub Pages | GitHub | Repositório `github-page` | ✅ |
| 2. Integração | Listar repositórios via API do GitHub no site | GitHub REST API | Seção "Repositórios no GitHub" | ✅ |
| 3. Usuários | Papéis e permissões (menor privilégio) | GitHub Settings | [`docs/gestao-usuarios.md`](gestao-usuarios.md) | ✅ |
| 3. Segurança | 2FA, ruleset na `main`, secret scanning, Dependabot | GitHub Security | [`SECURITY.md`](../SECURITY.md) | ✅ |
| 4. Acesso | Fluxo de PR, CODEOWNERS, templates | GitHub | [`CONTRIBUTING.md`](../CONTRIBUTING.md) | ✅ |
| 5. Testes | CI com validação de HTML e links | GitHub Actions | [`docs/testes.md`](testes.md) | ✅ |
| 5. Produção | Release `v2.0` com HTTPS obrigatório | GitHub Pages / Releases | Tag `v2.0` | ✅ |
| 6. Apresentação | Vídeo de 5 minutos | YouTube | Link no documento de entrega | ✅ |

**Riscos e mitigação**

| Risco | Mitigação |
|---|---|
| Vazamento de senha ou token em commit | `.gitignore` de segredos + secret scanning com push protection |
| Alteração indevida da versão publicada | Ruleset na `main`: sem force push e sem exclusão; mudanças via Pull Request |
| Link quebrado ou HTML inválido em produção | CI no GitHub Actions a cada push e Pull Request |
| Conta comprometida | 2FA obrigatório na conta do mantenedor |

### 1.2 Google Gemini como guia da trilha

Criei um **Gem** (assistente personalizado do Gemini) chamado *Guia de Implantação PortfolioHUB*, com o contexto da disciplina, das entregas anteriores e dos requisitos da entrega final. Em cada fase, enviei um prompt pedindo o plano, a revisão ou as boas práticas daquela etapa e apliquei as recomendações no repositório. As instruções do Gem e os prompts estão em [`docs/gemini.md`](gemini.md).

## 2. Configuração Inicial e Integração com GitHub

### 2.1 Ambiente GitHub dedicado

- Repositório público **`PedroEmilioGea/github-page`**, com o site publicado no **GitHub Pages** (branch `main`, pasta raiz, HTTPS obrigatório).
- Perfil do GitHub com foto, bio e link do LinkedIn.
- Estrutura organizada: `projetos-academicos/`, `projetos-pessoais/`, `docs/`, `apresentacao/`, `.github/`.
- Versionamento com **Conventional Commits** e **tags** (`v1.0` → `v2.0`), registrados no [`CHANGELOG.md`](../CHANGELOG.md).

### 2.2 Funcionalidades do GitHub integradas ao PortfolioHUB

| Funcionalidade | Como foi integrada |
|---|---|
| **Armazenamento de projetos** | Cada projeto tem pasta e README no repositório; projetos maiores (AlugApp, Dino Game) têm repositório próprio, linkado nos cards |
| **API REST do GitHub** | A seção *Repositórios no GitHub* do site consulta `api.github.com/users/PedroEmilioGea/repos` e mostra automaticamente cada repositório público (linguagem, estrelas, última atualização, links) |
| **GitHub Pages** | Hospedagem do PortfolioHUB, do Dino Game e dos slides |
| **Issues e Pull Requests** | Canal de sugestões e mudanças, com modelos prontos |
| **GitHub Actions** | Testes automáticos de qualidade |
| **Releases** | Cada versão publicada com notas do CHANGELOG |

## 3. Gestão de Usuários e Segurança

### 3.1 Gestão de usuários

| Papel | Quem | Permissões |
|---|---|---|
| Admin | Pedro (mantenedor) | Configurações, segurança, merge |
| Write | Colaboradores de projeto | Branches e Pull Requests |
| Triage | Revisores | Organizar Issues e PRs |
| Read | Professor e avaliadores | Ler, comentar, abrir Issues |

- Princípio do **menor privilégio**: ninguém recebe mais acesso do que precisa.
- O arquivo **`CODEOWNERS`** define o mantenedor como revisor obrigatório de toda mudança.
- No PortfolioHUB, o público acessa somente leitura (site estático); qualquer alteração passa pelo GitHub com autenticação.

Detalhes: [`docs/gestao-usuarios.md`](gestao-usuarios.md).

### 3.2 Políticas de segurança

| Política | Implementação |
|---|---|
| Autenticação forte | 2FA ativado na conta do GitHub |
| Proteção da produção | Ruleset na `main`: bloqueia exclusão e force push |
| Segredos | Secret scanning + push protection; `.gitignore` para `.env`, chaves e credenciais |
| Dependências | Dependabot alerts + atualizações semanais das Actions (`.github/dependabot.yml`) |
| Relato de falhas | Private vulnerability reporting + [`SECURITY.md`](../SECURITY.md) |
| Código do site | Sem scripts de terceiros; dados da API inseridos com `textContent` (evita injeção de HTML) |
| Transporte | HTTPS obrigatório no GitHub Pages |
| CI com menor privilégio | Workflow com `permissions: contents: read` |

As políticas foram revisadas com o Gemini, comparando com as boas práticas de segurança do GitHub e da OWASP. Detalhes: [`docs/seguranca.md`](seguranca.md).

## 4. Compartilhamento e Controle de Acesso com GitHub

### 4.1 Repositório integrado ao PortfolioHUB

- O próprio PortfolioHUB é o repositório: cada push na `main` atualiza o site em produção.
- O controle de versão fica visível para quem visita: CHANGELOG, tags, Releases e histórico de commits.
- O código é compartilhado publicamente (licença MIT), com links diretos em cada card.

### 4.2 Processo de configuração e colaboração

1. Clonar o repositório pelo GitHub Desktop.
2. Criar uma branch (`feat/...`, `fix/...`, `docs/...`).
3. Fazer commits no padrão Conventional Commits.
4. Abrir um **Pull Request** usando o modelo (`.github/pull_request_template.md`).
5. Esperar os testes do GitHub Actions passarem.
6. Revisão do `CODEOWNERS` e merge.
7. Criar a tag e a Release da versão.

Guias: [`CONTRIBUTING.md`](../CONTRIBUTING.md) e [`docs/colaboracao.md`](colaboracao.md).

## 5. Finalização da Integração e Testes

### 5.1 Integrações finalizadas

- API do GitHub no site, Actions, Dependabot, templates, CODEOWNERS e políticas de segurança.
- Revisão final das integrações com o Gemini (prompt 8 em [`docs/gemini.md`](gemini.md)).

### 5.2 Testes

| Tipo | Como | Resultado |
|---|---|---|
| Automático: HTML | `html-validate` no GitHub Actions | ✅ Sem erros |
| Automático: links | `lychee` (links internos) no GitHub Actions | ✅ Sem links quebrados |
| Manual: responsividade | Desktop (1280 px) e celular (390 px) | ✅ Sem rolagem horizontal |
| Manual: funcionalidades | Filtro de projetos, tema claro/escuro, menu mobile, API do GitHub | ✅ |
| Manual: falha da API | Sem internet, a seção mostra mensagem e link para o GitHub | ✅ |

Detalhes: [`docs/testes.md`](testes.md).

### 5.3 Lançamento em produção

- Merge na `main` via Pull Request → GitHub Pages publica automaticamente.
- Tag **`v2.0`** e Release com as notas do CHANGELOG.
- HTTPS obrigatório e verificação final pelo endereço público.

## 6. Revisão Final e Apresentação

### 6.1 Soluções implementadas e desafios superados

| Desafio | Solução |
|---|---|
| Site publicado mostrando a pasta errada | Fonte do GitHub Pages alterada de `/docs` para `/ (root)` |
| Arquivos de entrega enviados ao repositório por engano | Remoção com commit e regra no `.gitignore` |
| Garantir que nenhum segredo vaze | Secret scanning + push protection + `.gitignore` |
| Testar a cada mudança sem esforço manual | CI no GitHub Actions |
| Mostrar projetos sem editar o site toda vez | Integração com a API do GitHub |
| Edição feita direto na web gerou merge no Desktop | Fluxo com `Fetch`/`Pull` antes de trabalhar e mudanças via Pull Request |

### 6.2 Apresentação

Vídeo de 5 minutos no YouTube mostrando as etapas da implantação, o PortfolioHUB em produção, as soluções de segurança e os desafios superados. Slides: [`apresentacao/implantacao.html`](../apresentacao/implantacao.html).

[← Voltar à documentação](README.md)
