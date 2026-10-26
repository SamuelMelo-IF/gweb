# Generalíssima Viagens — site estático (HTML + CSS + JS, sem build)

## Estrutura
index.html · css/styles.css · js/data.js (CONTEÚDO) · js/main.js · assets/ · vercel.json · robots.txt · sitemap.xml

## Rodar localmente
Extensão **Live Server** no VS Code → "Go Live". Ou: `npx serve .`

## Publicar no Vercel
1. Suba a pasta para um repositório no GitHub.
2. vercel.com → Add New → Project → importe o repositório.
3. Framework Preset: **Other**. Sem build command. Deploy.

## Domínio generalissimaviagens.com.br
Vercel → Project → Settings → Domains → Add. Siga os registros DNS mostrados (A para o domínio raiz, CNAME para www) no painel onde o domínio foi registrado (ex.: Registro.br). A propagação pode levar horas.

## Atualizar conteúdo (tudo em js/data.js)
- Novo pacote: copie um bloco de `PACOTES`, troque os dados e a `imagem`. Campos vazios somem do cartão.
- Nova foto: copie uma linha de `FOTOS`. Novo vídeo: preencha `VIDEOS` com o ID do YouTube.
- Depoimentos: só com texto real e autorizado; vazio = seção oculta.
- E-mail e endereço: preencha em `CONTACT`; vazios não aparecem.
- Texto "Sobre": index.html, seção `#sobre`.

## A preencher
data do pacote Caxias-MA · imagens (ver assets/LEIA-ME-IMAGENS.txt)
