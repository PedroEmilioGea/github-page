# Google Gemini como guia da implantação

O Google Gemini foi usado como **assistente e guia** em todas as fases da implantação do PortfolioHUB. As respostas completas estão no Plano de Implantação (Google Docs) entregue na disciplina.

## 1. Configuração do Gem

Em **gemini.google.com → Gems → Novo Gem**, criei o assistente:

- **Nome:** Guia de Implantação PortfolioHUB
- **Instruções:**

```text
Você é meu mentor técnico na disciplina Bootcamp I do curso de Ciência da Computação do CEUB.
Seu papel é guiar a implantação do PortfolioHUB: uma plataforma que exibe e gerencia meus
projetos, hospedada no GitHub Pages (https://pedroemiliogea.github.io/github-page/) a partir do
repositório público https://github.com/PedroEmilioGea/github-page.

Regras:
1. Responda em português do Brasil, em passos numerados e objetivos.
2. Sempre siga as boas práticas oficiais do GitHub (Docs e Security) e da OWASP.
3. Priorize segurança: menor privilégio, 2FA, proteção de branch, secret scanning.
4. Quando eu enviar um plano, arquivo ou configuração, revise e aponte riscos e melhorias.
5. Considere que uso o GitHub Desktop e não tenho servidor próprio (site estático).
6. Ao final de cada resposta, diga qual é o próximo passo da trilha de implantação.
```

## 2. Trilha de prompts

| # | Fase | Objetivo do prompt |
|---|---|---|
| 1 | Contexto | Apresentar a disciplina, as entregas anteriores e o PortfolioHUB |
| 2 | Planejamento | Gerar o plano de implantação detalhado com cronograma e riscos |
| 3 | Integração GitHub | Como integrar funcionalidades do GitHub (API, Pages, Actions) |
| 4 | Usuários | Definir papéis e permissões com menor privilégio |
| 5 | Segurança | Revisar as políticas de segurança aplicadas |
| 6 | Colaboração | Revisar o fluxo de Pull Request e os templates |
| 7 | Testes | Montar o plano de testes e revisar o workflow de CI |
| 8 | Lançamento | Checklist de produção e revisão final |
| 9 | Apresentação | Estrutura do vídeo de 5 minutos |

[← Voltar à documentação](README.md)
