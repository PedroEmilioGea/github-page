# Política de Segurança — PortfolioHUB

Este documento descreve como a segurança do **PortfolioHUB** (este repositório e o site publicado no GitHub Pages) é mantida e como relatar uma vulnerabilidade.

## Versões suportadas

| Versão | Suporte de segurança |
|---|---|
| `v2.x` (atual) | ✅ Sim |
| `v1.x` | ❌ Não, atualize para a v2 |

## Como relatar uma vulnerabilidade

**Não abra uma Issue pública** para falhas de segurança.

1. Acesse a aba **Security** do repositório → **Report a vulnerability** (relato privado de vulnerabilidades do GitHub).
2. Descreva o problema, os passos para reproduzir e o impacto.
3. Prazo de resposta: até **5 dias úteis**. Correções críticas são publicadas em uma nova versão (tag) e registradas no `CHANGELOG.md`.

## Controles de segurança aplicados

| Controle | Onde | Objetivo |
|---|---|---|
| Autenticação de dois fatores (2FA) | Conta GitHub do mantenedor | Impedir acesso indevido à conta |
| Proteção da branch `main` (ruleset) | Settings → Rules | Bloquear *force push* e exclusão da branch publicada |
| Revisão obrigatória via `CODEOWNERS` | `.github/CODEOWNERS` | Toda mudança passa pelo dono do código |
| Princípio do menor privilégio | Settings → Collaborators | Colaboradores recebem só o papel necessário (Read/Triage/Write) |
| Secret scanning + push protection | Settings → Code security | Bloquear senhas e tokens enviados por engano |
| Dependabot alerts e updates | `.github/dependabot.yml` | Manter as GitHub Actions atualizadas |
| Relato privado de vulnerabilidades | Aba Security | Canal seguro para relatar falhas |
| `.gitignore` de segredos | `.gitignore` | Nunca versionar `.env`, chaves e credenciais |
| HTTPS obrigatório | Settings → Pages | Site servido apenas com conexão criptografada |
| Testes automáticos (CI) | `.github/workflows/qualidade.yml` | Validar HTML e links antes de publicar |

## Boas práticas para quem contribui

- Nunca inclua senhas, tokens, chaves de API ou dados pessoais em commits, Issues ou Pull Requests.
- Use contas com 2FA ativado.
- Envie mudanças sempre por Pull Request, nunca direto na `main`.
- Não adicione scripts de terceiros sem revisão; o site carrega apenas fontes do Google Fonts e a API pública do GitHub.

Detalhes completos em [`docs/seguranca.md`](docs/seguranca.md).
