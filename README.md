# 👟 Digital Store — E-commerce Front-end de Alta Performance

O **Digital Store** é uma plataforma moderna de e-commerce voltada para o segmento de calçados e artigos esportivos. O projeto foi desenvolvido com foco em **arquitetura modular**, **alta fidelidade visual (Figma)** e uma **experiência de usuário (UX) fluida e responsiva**.

---

## 🎯 Visão Geral da Arquitetura

Para garantir escalabilidade e fácil manutenção, a aplicação foi estruturada utilizando a metodologia de **componentização reativa** no React:

* **Moldura de Layout Unificada (`<Layout />`):** Implementação de um padrão de encapsulamento mantendo o cabeçalho (`<Header />`) e o rodapé (`<Footer />`) persistentes durante toda a navegação, otimizando a re-renderização das páginas centrais.
* **Navegação SPA (Single Page Application):** Integração com `React Router DOM` para garantir transições de página instantâneas e sem *page reload*, incluindo gerenciamento de parâmetros na URL para rotas dinâmicas e filtros de produtos.
* **Branding Vetorial Dinâmico (`<Logo />`):** Criação do componente de marca em SVG inline com controle de temas via props (`variant`). O mesmo componente adapta suas cores de forma automatizada para fundo claro no cabeçalho ou variante branca para fundo escuro no rodapé.

---

## 📐 Responsividade & Design System

A interface foi projetada do zero para ser **totalmente adaptável** a qualquer dispositivo (desktops, tablets e smartphones):

* **Grid & Layout Fluido:** Combinação de `Styled-Components` com utilitários flexbox do `PrimeFlex`, substituindo espaçamentos fixos por porcentagens e pontos de quebra (*breakpoints*) estratégicos.
* **Sistemas de Filtro e Busca Interativa:** O catálogo de produtos conta com uma barra de navegação com input dinâmico e redirecionamento automático, além de um painel lateral de filtros reutilizável (`<FilterGroup />`) focado em usabilidade móvel.
* **Cards e Vitrines Reutilizáveis:** Construção dos componentes `<ProductCard />` e `<ProductListing />`, capazes de calcular automaticamente exibições promocionais (preço original x valor com desconto) e organizar os produtos em grids adaptativos.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia | Finalidade no Projeto |
| :--- | :--- |
| **React 18 + Vite** | Construção da interface com ciclo de *build* ultra-rápido e estado reativo |
| **React Router DOM** | Roteamento dinâmico e navegação declarativa client-side |
| **Styled-Components** | Estilização CSS-in-JS isolada por componente e suporte a props dinâmicas |
| **PrimeFlex & PrimeIcons** | Grid system responsivo, utilitários de layout e conjunto de ícones da UI |

---

## 🗺️ Estrutura das Rotas

* **`/` (HomePage):** Vitrine principal, banners institucionais e coleções em destaque.
* **`/produtos` (ProductListingPage):** Catálogo completo com ordenação por preço e filtros por marca, categoria e gênero.
* **`/product/:id` (ProductViewPage):** Página detalhada do produto com galeria, guia de tamanhos e seletor dinâmico de cores.

---

## ⚙️ Como Rodar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone [suspicious link removed]

# 2. Acesse a pasta do projeto
cd projeto-digital-store

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev