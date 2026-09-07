# ⚖️ Machado Advocacia & Assessoria Jurídica

Landing page institucional responsiva para **Machado Advocacia**, desenvolvida com **HTML5**, **Tailwind CSS**, **Lucide Icons** e triagem interativa com integração ao WhatsApp.

---

## 🚀 Como Publicar (Deploy)

Você pode publicar este site gratuitamente na **Vercel** ou no **GitHub Pages**.

---

### Opção 1: Deploy na Vercel (Recomendado)

#### Método A — Via Vercel Dashboard (Sem instalar nada):
1. Crie um repositório no seu [GitHub](https://github.com/new) chamado `machado-advocacia`.
2. Envie os arquivos do projeto para o repositório.
3. Acesse o painel da [Vercel](https://vercel.com) e faça login com sua conta do GitHub.
4. Clique em **"Add New..."** → **"Project"**.
5. Selecione o repositório `machado-advocacia` e clique em **"Import"**.
6. Em *Framework Preset*, deixe como **"Other"**.
7. Clique em **"Deploy"**.

Pronto! Seu site estará no ar em poucos segundos em um endereço como `machado-advocacia.vercel.app` (e com suporte a domínio personalizado gratuito).

#### Método B — Via Vercel CLI:
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

### Opção 2: Deploy no GitHub Pages

Este repositório já inclui um fluxo de automação via **GitHub Actions** em `.github/workflows/deploy.yml`.

#### Instruções:
1. Crie um repositório no GitHub com os arquivos deste projeto.
2. No repositório do GitHub, acesse **Settings** → **Pages**.
3. Em **Build and deployment**:
   - **Source**: Selecione **GitHub Actions**.
4. Faça um push para a branch `main` (ou execute manualmente na aba **Actions**).
5. O site será publicado automaticamente em `https://<seu-usuario>.github.io/machado-advocacia/`.

---

## 📂 Estrutura do Projeto

```text
machado-advocacia/
├── index.html                  # Landing page principal
├── vercel.json                 # Configurações de rotas e cabeçalhos Vercel
├── .gitignore                  # Arquivos ignorados pelo Git
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automação do GitHub Pages via GitHub Actions
└── README.md                   # Instruções do projeto
```
