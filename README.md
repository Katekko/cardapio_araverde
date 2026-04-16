# Araverde — Cardápio

Landing page estática do cardápio, publicada via **GitHub Pages**.

## Site

**https://cardapio.gyanburuworld.com**

Hospedado em GitHub Pages (branch `main`, raiz `/`). HTTPS enforced.

## Arquivos

```
cardapio_araverde/
├── index.html   ← estrutura e conteúdo
├── style.css    ← estilos (paleta, tipografia, layout)
├── script.js    ← animações de scroll e ano dinâmico
├── CNAME        ← domínio personalizado (cardapio.gyanburuworld.com)
└── README.md    ← este arquivo
```

## Como editar

Abra o `index.html` e edite diretamente os itens do cardápio, endereço, horários e telefone no rodapé.

## Como publicar alterações

Basta fazer commit e push para a branch `main` — o GitHub Pages atualiza automaticamente em alguns segundos.

```bash
git add .
git commit -m "descrição da alteração"
git push
```

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
