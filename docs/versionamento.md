# Versionamento com Git

Guia das práticas de versionamento usadas neste repositório.

## 1. Fluxo básico (local → remoto)

```text
 Working Directory  ──git add──▶  Staging Area  ──git commit──▶  Repositório local  ──git push──▶  GitHub
        ▲                                                                                        │
        └──────────────────────────────────── git pull ◀─────────────────────────────────────────┘
```

| Etapa | Linha de comando | GitHub Desktop |
|---|---|---|
| Ver o que mudou | `git status` / `git diff` | Aba **Changes** |
| Preparar arquivos | `git add <arquivo>` ou `git add .` | Marcar a caixa ao lado do arquivo |
| Registrar a versão | `git commit -m "mensagem"` | Preencher *Summary* e clicar em **Commit to main** |
| Enviar ao GitHub | `git push origin main` | **Push origin** |
| Trazer do GitHub | `git pull` | **Fetch origin** → **Pull origin** |
| Ver o histórico | `git log --oneline` | Aba **History** |

## 2. Padrão de mensagens — Conventional Commits

Formato: `tipo: descrição curta no imperativo`

| Tipo | Quando usar | Exemplo |
|---|---|---|
| `feat` | Nova funcionalidade ou conteúdo | `feat: adiciona seção de projetos ao site` |
| `fix` | Correção de erro | `fix: corrige link quebrado do LinkedIn` |
| `docs` | Somente documentação | `docs: cria README do projeto 01` |
| `style` | Visual/formatação, sem mudar lógica | `style: ajusta cores do tema escuro` |
| `refactor` | Reorganização de código | `refactor: separa CSS por seções` |
| `chore` | Tarefas de manutenção | `chore: adiciona .gitignore` |

**Boas práticas:**

- Um commit = uma mudança lógica (commits pequenos e frequentes).
- Mensagem curta (até ~72 caracteres), clara e no imperativo.
- Nunca versionar senhas, tokens ou arquivos gerados automaticamente (ver `.gitignore`).
- Sempre fazer `pull` antes de começar a trabalhar e `push` ao terminar.

## 3. Versões com tags (versionamento semântico)

As entregas são marcadas com **tags** no formato `vMAIOR.MENOR`:

- **MAIOR** (`v2.0`): mudança grande na estrutura do portfólio.
- **MENOR** (`v1.1`): novos projetos ou seções, sem quebrar o que existe.

```bash
git tag -a v1.0 -m "Versão 1.0 - estrutura, site e documentação base"
git push origin v1.0
```

No **GitHub Desktop**: aba **History** → botão direito no commit → **Create Tag…** → `v1.0` → **Push origin**.

Depois, no GitHub: **Releases** → **Draft a new release** → escolher a tag → colar o trecho correspondente do [`CHANGELOG.md`](../CHANGELOG.md).

## 4. Histórico deste repositório

| Versão | Commit principal |
|---|---|
| inicial | `Initial commit` (README criado pelo GitHub) |
| `v1.0` | `feat: estrutura do repositório e site do portfólio v1.0` |
| `v1.1` | `feat: adiciona projetos acadêmico e pessoal` (AlugApp e Dino Game) |
| `v1.2` | `feat: adiciona slides, roteiro e integração com LinkedIn` |
