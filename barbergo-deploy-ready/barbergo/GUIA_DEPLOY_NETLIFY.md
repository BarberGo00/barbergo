# 🚀 Guia de Deploy do BarberGo na Netlify

Olá! Este guia irá te auxiliar a publicar o seu projeto **BarberGo** na Netlify, tornando-o acessível online. O processo é bastante simples, pois já adicionei um arquivo de configuração (`netlify.toml`) que automatiza a maior parte do trabalho.

Siga os passos abaixo com atenção.

---

## ✅ Pré-requisitos

Antes de começar, você precisa ter:

1.  **Conta no GitHub**: Onde o código do seu projeto estará hospedado.
2.  **Conta na Netlify**: A plataforma que vamos usar para o deploy.
3.  **Projeto no GitHub**: O seu projeto `barbergo` já deve ter sido enviado para um repositório no seu GitHub.

---

## ⚙️ Passo 1: Verifique o Arquivo de Configuração

Eu adicionei o arquivo `netlify.toml` na raiz do seu projeto. Este arquivo diz à Netlify exatamente como construir e publicar seu site. Veja o que ele faz:

```toml
[build]
  # 1. Comando para instalar dependências e construir o projeto
  command = "pnpm install && pnpm build"
  
  # 2. Diretório que será publicado
  publish = "dist/public"

# 3. Redirecionamento para Single-Page Application (SPA)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

- **`command`**: Garante que a Netlify use `pnpm` para instalar as dependências e execute o script de build.
- **`publish`**: Informa à Netlify que o conteúdo do seu site está na pasta `dist/public` após o build.
- **`redirects`**: Essencial para que a navegação do seu site (React Router) funcione corretamente. Qualquer rota acessada diretamente no navegador será direcionada para o `index.html`.

**Ação**: Faça o `commit` e `push` do arquivo `netlify.toml` e do `_redirects` que adicionei para o seu repositório no GitHub.

```bash
git add netlify.toml client/public/_redirects
git commit -m "Adiciona configuração de deploy para Netlify"
git push origin main
```

---

## 🚀 Passo 2: Fazendo o Deploy na Netlify

Agora, vamos conectar seu repositório do GitHub à Netlify.

1.  **Acesse sua conta na Netlify**.

2.  No painel principal, clique em **"Add new site"** e selecione **"Import an existing project"**.

    ![Netlify - Add New Site](https://i.imgur.com/2jVqJ1g.png)

3.  **Conecte ao GitHub**: Clique no botão do GitHub e autorize a Netlify a acessar seus repositórios.

4.  **Selecione o Repositório**: Busque e selecione o repositório do seu projeto `barbergo`.

5.  **Configurações de Deploy**: Nesta tela, a Netlify irá ler o seu arquivo `netlify.toml` e preencher as configurações automaticamente.

    - **Build command**: Deve aparecer `pnpm install && pnpm build`.
    - **Publish directory**: Deve aparecer `dist/public`.

    Você não precisa alterar nada! A Netlify já sabe o que fazer.

    ![Netlify - Build Settings](https://i.imgur.com/gS3wWTz.png)

6.  **Clique em "Deploy site"**: A Netlify começará o processo de build. Você pode acompanhar o log do deploy em tempo real.

---

## 🎉 Passo 3: Site no Ar!

Após alguns minutos, o deploy será concluído. A Netlify fornecerá uma URL pública (algo como `nome-aleatorio.netlify.app`).

- **Acesse a URL** para ver seu site BarberGo funcionando online.
- **Teste a navegação** entre as páginas para garantir que o redirecionamento da SPA está funcionando.

Seu site será atualizado automaticamente toda vez que você fizer um `push` de novas alterações para a branch principal (`main` ou `master`) do seu repositório no GitHub.

Parabéns por finalizar o seu projeto! Se tiver qualquer dúvida, pode me perguntar.
