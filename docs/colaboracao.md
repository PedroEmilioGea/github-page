# Colaboração em Equipe no GitHub

Mesmo sendo um portfólio individual, este repositório segue um fluxo pronto para receber colaboradores.

## 1. Fluxo de branches (GitHub Flow)

```text
main ──●────────────●──────────────●──▶   (sempre estável e publicada no GitHub Pages)
        \          /  \            /
         ●──●──●──●    ●──●──●───●
     feat/projetos     fix/link-linkedin
```

1. A branch **`main`** é a versão publicada — não se trabalha direto nela em equipe.
2. Para cada mudança, crie uma branch com nome descritivo:
   - `feat/nome-da-funcionalidade`
   - `fix/nome-da-correcao`
   - `docs/nome-do-documento`
3. Faça commits pequenos nessa branch.
4. Abra um **Pull Request (PR)** para a `main`.
5. Outra pessoa revisa, comenta e aprova.
6. Faça o **merge** e apague a branch.

```bash
git checkout -b feat/novo-projeto
# ... alterações ...
git add .
git commit -m "feat: adiciona projeto de automação"
git push -u origin feat/novo-projeto
# abra o Pull Request no GitHub
```

No **GitHub Desktop**: **Current Branch** → **New Branch** → fazer commits → **Publish branch** → **Create Pull Request**.

## 2. Pull Requests

Um bom PR contém:

- **Título** no padrão de commit (`feat: ...`, `fix: ...`).
- **Descrição**: o que mudou, por quê e como testar.
- **Prints** quando a mudança é visual.
- Referência à Issue resolvida (`Closes #3`).

## 3. Issues

Use **Issues** para registrar tarefas, ideias e bugs:

| Rótulo | Uso |
|---|---|
| `enhancement` | Nova funcionalidade ou projeto |
| `bug` | Algo quebrado (link, layout) |
| `documentation` | Melhorias em READMEs e docs |

## 4. Resolvendo conflitos

Conflitos acontecem quando duas pessoas alteram a mesma linha.

1. `git pull origin main` na sua branch.
2. Abra os arquivos marcados com `<<<<<<<`, `=======` e `>>>>>>>`.
3. Mantenha o trecho correto, apague os marcadores.
4. `git add .` e `git commit -m "fix: resolve conflito em index.html"`.

## 5. Formas de colaborar neste repositório

- **Fork** + Pull Request (para pessoas de fora).
- **Collaborators** em *Settings → Collaborators* (para membros do time).
- Sugestões via **Issues**.
