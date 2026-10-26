# Como contribuir com o PortfolioHUB

Obrigado pelo interesse! Este guia explica o fluxo de colaboração usado no projeto.

## 1. Antes de começar

- Tenha uma conta no GitHub com **autenticação de dois fatores (2FA)** ativada.
- Leia a [Política de Segurança](SECURITY.md).
- Procure uma [Issue](https://github.com/PedroEmilioGea/github-page/issues) aberta ou crie uma nova usando um dos modelos.

## 2. Fluxo de trabalho (GitHub Flow)

```text
main ──●──────────────────●──▶  (publicada no GitHub Pages)
        \                /
         ●───●───●──────●       feat/minha-mudanca → Pull Request → revisão → merge
```

1. **Fork** (pessoas de fora) ou **branch** (colaboradores): `feat/descricao`, `fix/descricao` ou `docs/descricao`.
2. Commits pequenos no padrão **Conventional Commits** (`feat:`, `fix:`, `docs:`, `chore:`).
3. Abra um **Pull Request** para a `main` preenchendo o modelo.
4. Os testes automáticos (**GitHub Actions**) precisam passar.
5. O dono do código (`CODEOWNERS`) revisa e aprova.
6. Merge e exclusão da branch.

## 3. Papéis e permissões

| Papel no GitHub | Quem | Pode |
|---|---|---|
| **Admin** | Mantenedor (Pedro) | Configurações, segurança, merge |
| **Write** | Colaboradores do projeto | Criar branches e abrir PRs |
| **Triage** | Revisores | Organizar Issues e PRs |
| **Read** | Professor / avaliadores | Ver o código, comentar e abrir Issues |

## 4. Padrões

- Pastas em `kebab-case` com prefixo numérico (`03-nome-do-projeto/`).
- Todo projeto novo tem `README.md` a partir do [modelo](docs/modelo-readme-projeto.md).
- Atualize o `CHANGELOG.md` quando a mudança for visível para quem usa o site.

Veja também [`docs/colaboracao.md`](docs/colaboracao.md) e [`docs/gestao-usuarios.md`](docs/gestao-usuarios.md).
