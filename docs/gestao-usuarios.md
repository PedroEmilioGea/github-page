# Gestão de Usuários

## Papéis no repositório

| Papel | Pode | Quem recebe |
|---|---|---|
| **Read** | Ver código, abrir Issues, comentar | Professor e avaliadores |
| **Triage** | Organizar Issues e PRs (labels, fechar) | Revisores |
| **Write** | Criar branches e abrir PRs | Colaboradores de projeto |
| **Maintain** | Gerenciar o repositório sem acesso a configurações sensíveis | Não utilizado |
| **Admin** | Tudo, inclusive segurança | Somente o mantenedor |

## Como adicionar um colaborador

1. *Settings → Collaborators → Add people*.
2. Buscar pelo usuário do GitHub e escolher o **papel mínimo** necessário.
3. O colaborador aceita o convite por e-mail.
4. Revisar a lista a cada fim de projeto e remover quem não precisa mais de acesso.

## Integração com o PortfolioHUB

- O PortfolioHUB é público e somente leitura para visitantes.
- Toda alteração exige uma conta GitHub com permissão de escrita e passa por Pull Request.
- O `CODEOWNERS` garante que o mantenedor revise toda mudança.
- Repositórios de grupo (como o AlugApp) ficam na organização do grupo; o PortfolioHUB apenas aponta para eles.

[← Voltar à documentação](README.md)
