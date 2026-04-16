# Sabor da Casa — Cardápio

Landing page estática do cardápio. Pronta para publicar no **Firebase Hosting**.

## Arquivos

```
cardapio/
├── index.html       ← estrutura e conteúdo (edite os pratos e preços aqui)
├── style.css        ← estilos (paleta, tipografia, layout)
├── script.js        ← animações de scroll e ano dinâmico
├── firebase.json    ← configuração do Firebase Hosting (já pronta)
└── README.md        ← este arquivo
```

## Como editar os preços

Abra o `index.html` e procure por `R$ 00,00` — substitua cada ocorrência pelo preço real do item correspondente. Cada item tem a estrutura:

```html
<li class="item">
    <div class="item-main">
        <h4 class="item-name">Quiche de Alho Poró</h4>
        <p class="item-desc">Descrição do item...</p>
    </div>
    <span class="item-dots"></span>
    <span class="item-price">R$ 00,00</span>  ← aqui
</li>
```

## Como personalizar o nome e informações

No `index.html`, substitua:
- `Sabor da Casa` → pelo nome real do seu estabelecimento (várias ocorrências)
- Endereço em `Rua Exemplo, 123` (no rodapé)
- Horários de funcionamento
- Telefone `(27) 0000-0000` e `@sabordacasa`

## Como trocar as cores

No `style.css`, no topo você encontra a paleta em variáveis CSS:

```css
:root {
    --cream: #f4ead5;       /* fundo creme */
    --terracotta: #c8563c;  /* destaque laranja-terra */
    --wood-dark: #3a2418;   /* marrom escuro (texto/seção) */
    /* ... */
}
```

Altere os valores e toda a identidade visual se atualiza.

## Deploy no Firebase Hosting

Pré-requisitos: ter o Node.js instalado e o Firebase CLI.

### 1. Instale o Firebase CLI (só na primeira vez)

```bash
npm install -g firebase-tools
```

### 2. Faça login

```bash
firebase login
```

### 3. Inicialize o projeto

Dentro da pasta `cardapio/`:

```bash
firebase init hosting
```

Quando perguntar:
- **Use an existing project** → selecione seu projeto no Firebase Console (ou crie um novo antes em console.firebase.google.com)
- **What do you want to use as your public directory?** → digite `.` (ponto)
- **Configure as a single-page app?** → `N` (não)
- **Set up automatic builds with GitHub?** → `N` (não)
- **File ./index.html already exists. Overwrite?** → **`N` (NÃO sobrescreva!)**

O `firebase.json` já vem configurado — pode ser que o CLI pergunte se quer sobrescrever. Recomendo manter o que já está aqui.

### 4. Publique

```bash
firebase deploy --only hosting
```

Em alguns segundos, o Firebase vai te dar um link tipo `https://seu-projeto.web.app`. Pronto, está no ar!

### 5. Atualizar depois

Sempre que editar algo, basta rodar de novo:

```bash
firebase deploy --only hosting
```

## Dica

Antes de publicar, abra o `index.html` no navegador (dê duplo-clique) para ver como ficou. Qualquer ajuste pode ser feito localmente e testado antes do deploy.
