# Segurança do PortfolioHUB

Resumo da política em [`SECURITY.md`](../SECURITY.md). Aqui está **como** cada controle foi configurado.

## 1. Conta

- **2FA:** GitHub → *Settings → Password and authentication → Enable two-factor authentication* (app autenticador).
- Códigos de recuperação guardados fora do computador.

## 2. Repositório (Settings do `github-page`)

| Controle | Caminho no GitHub | Configuração |
|---|---|---|
| Ruleset da `main` | *Settings → Rules → Rulesets → New branch ruleset* | Alvo: branch padrão · ✅ Restrict deletions · ✅ Block force pushes |
| Dependabot alerts | *Settings → Code security* | Enabled |
| Dependabot security updates | *Settings → Code security* | Enabled |
| Secret scanning | *Settings → Code security* | Enabled |
| Push protection | *Settings → Code security* | Enabled |
| Private vulnerability reporting | *Settings → Code security* | Enabled |
| HTTPS | *Settings → Pages* | ✅ Enforce HTTPS |
| Actions | *Settings → Actions → General* | Workflow permissions: **Read repository contents** |

## 3. Código

- O site é estático: não há login, banco de dados nem dados pessoais armazenados.
- Dados vindos da API do GitHub são inseridos com `textContent`, nunca com `innerHTML`.
- Links externos abrem com `rel="noopener"`.
- O workflow de CI roda com `permissions: contents: read`.
- Nenhum e-mail ou telefone pessoal publicado; contato pelo LinkedIn.

## 4. Revisão com o Gemini

As políticas acima foram enviadas ao Gem *Guia de Implantação PortfolioHUB* (prompt 5), que revisou cada item com base nas recomendações de segurança do GitHub e da OWASP.

[← Voltar à documentação](README.md)
