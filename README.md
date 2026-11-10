# 👟 Digital Store — E-commerce Front-end de Alta Performance

O **Digital Store** é uma plataforma moderna de e-commerce voltada para o segmento de calçados e artigos esportivos. O projeto foi desenvolvido com foco em **arquitetura modular**, **alta fidelidade visual (Figma)** e uma **experiência de usuário (UX) fluida e responsiva**.

---

## 🎯 Visão Geral da Arquitetura

Para garantir escalabilidade e fácil manutenção, a aplicação foi estruturada utilizando a metodologia de **componentização reativa** no React:

- **Moldura de Layout Unificada (`<Layout />`):** Implementação de um padrão de encapsulamento mantendo o cabeçalho (`<Header />`) e o rodapé (`<Footer />`) persistentes durante toda a navegação, otimizando a re-renderização das páginas centrais.
- **Navegação SPA (Single Page Application):** Integração com `React Router DOM` para garantir transições de página instantâneas e sem *page reload*, incluindo gerenciamento de parâmetros na URL para rotas dinâmicas e filtros de produtos.
- **Branding Vetorial Dinâmico (`<Logo />`):** Criação do componente de marca em SVG inline com controle de temas via props (`variant`). O mesmo componente adapta suas cores de forma automatizada para fundo claro no cabeçalho ou variante branca para fundo escuro no rodapé.
- **Gerenciamento de Estado Global do Carrinho (`CartContext`):** Provedor de contexto global (`<CartProvider />`) para manipulação de adição, alteração de quantidade, cálculo dinâmico de subtotais e contagem de itens em tempo real integrados ao badge do cabeçalho.
- **Auto-scroll de Navegação (`<ScrollToTop />`):** Utilitário de reset de rolagem atrelado ao ciclo de mudança de rotas para restaurar o topo da página a cada transição de navegação.

---

## 📐 Responsividade & Design System

A interface foi projetada do zero para ser **totalmente adaptável** a qualquer dispositivo (desktops, tablets e smartphones):

- **Grid & Layout Fluido:** Combinação de `Styled-Components` com utilitários flexbox do `PrimeFlex`, substituindo espaçamentos fixos por porcentagens e pontos de quebra (*breakpoints*) estratégicos.
- **Sistemas de Filtro e Busca Interativa:** O catálogo de produtos conta com uma barra de navegação com input dinâmico e redirecionamento automático, além de um painel lateral de filtros reutilizável (`<FilterGroup />`) focado em usabilidade móvel.
- **Cards e Vitrines Reutilizáveis:** Construção dos componentes `<ProductCard />` e `<ProductListing />`, capazes de calcular automaticamente exibições promocionais (preço original x valor com desconto) e organizar os produtos em grids adaptativos.
- **Seletores Interativos de Produto:** Componentes customizados (`<ProductOptions />` e `<Gallery />`) para escolha dinâmica de variações de tamanho, paleta de cores e alternância de galeria com suporte a imagens responsivas.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia | Finalidade no Projeto |
| :--- | :--- |
| **React 18** | Biblioteca principal para construção da interface de usuário orientada a componentes reativos |
| **Vite** | Ferramenta de *build* e servidor de desenvolvimento ultra-rápido com suporte a HMR |
| **React Router DOM v6** | Roteamento dinâmico, hooks de navegação (`useNavigate`, `useSearchParams`, `useParams`) e SPA |
| **React Context API** | Gerenciamento de estado global da aplicação sem dependências externas (Carrinho de Compras) |
| **Styled-Components** | Estilização CSS-in-JS com suporte a escopo isolado, variáveis e propriedades dinâmicas |
| **PrimeFlex** | Biblioteca de utilitários CSS e Grid System responsivo baseado em Flexbox |
| **PrimeIcons** | Conjunto completo de ícones vetoriais integrados à UI |
| **JavaScript (ES6+)** | Manipulação reativa de arrays, hooks customizados, destruturação e métodos imutáveis |
| **HTML5 & SVG Inline** | Estruturação semântica da página e renderização de logotipos vetoriais dinâmicos |
| **CSS3 (Variables & Media Queries)** | Definição de temas globais, paleta de cores, tipografia e responsividade móvel |
| **Node.js & npm** | Ambiente de execução JavaScript e gerenciamento de dependências do projeto |
| **Git & GitHub** | Controle de versão de código e repositório centralizado do projeto |

---

## 🗺️ Estrutura das Rotas

- **`/` (HomePage):** Vitrine principal, banners institucionais e coleções em destaque.
- **`/produtos` (ProductListingPage):** Catálogo completo com ordenação por preço, busca na URL (`?search=`) e filtros por marca, categoria e gênero.
- **`/product/:id` (ProductViewPage):** Página detalhada do produto com galeria de imagens, guia de tamanhos e seletor dinâmico de cores.
- **`/carrinho` (CartPage / CartDrawer):** Gestão de itens adicionados ao carrinho, ajuste de quantidade, remoção e cálculo do resumo do pedido.

---

## ⚙️ Como Rodar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/digitalcollegebr/projeto-digital-store.git

# 2. Acesse a pasta do projeto
cd projeto-digital-store

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Para gerar o build de produção
npm run build

# 6. Para visualizar o build de produção localmente
npm run preview
```