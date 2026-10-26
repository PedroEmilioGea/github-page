# Testes do PortfolioHUB

## Automáticos (GitHub Actions)

Workflow [`.github/workflows/qualidade.yml`](../.github/workflows/qualidade.yml), executado a cada push na `main`, em todo Pull Request e manualmente (*Actions → Qualidade do site → Run workflow*).

| Etapa | Ferramenta | O que verifica |
|---|---|---|
| Validar HTML | `html-validate` (regras em `.htmlvalidate.json`) | Estrutura, acessibilidade e atributos |
| Verificar links | `lychee` (modo offline) | Links internos entre páginas e documentos |

## Manuais

| # | Cenário | Esperado | Resultado |
|---|---|---|---|
| 1 | Abrir o site no computador | Todas as seções carregam | ✅ |
| 2 | Abrir no celular (390 px) | Menu mobile funciona, sem rolagem lateral | ✅ |
| 3 | Filtro Acadêmicos/Pessoais | Mostra só os cards da categoria | ✅ |
| 4 | Botão de tema | Alterna claro/escuro e lembra a escolha | ✅ |
| 5 | Seção Repositórios no GitHub | Lista os repositórios públicos pela API | ✅ |
| 6 | API indisponível | Mostra aviso e link para o GitHub | ✅ |
| 7 | Slides | Navegação por teclado, toque e tela cheia | ✅ |
| 8 | Links de LinkedIn, GitHub e projetos | Abrem em nova aba | ✅ |

[← Voltar à documentação](README.md)
