# BetaCar — Loja de Carros (Catálogo Web)

Site de catálogo para uma loja de carros fictícia, com página inicial exibindo os veículos disponíveis e página de detalhes individual para cada carro.

Projeto desenvolvido como trabalho prático da disciplina de Programação Web — 1º período de Engenharia de Software, PUC Minas.

## ⚙️ Funcionalidades

- **Carrossel de destaques** na página inicial, exibindo os 3 primeiros carros do estoque com imagem, marca, preço e link para detalhes
- **Grid responsivo** com todos os carros do estoque, renderizado dinamicamente a partir de um array de dados em JavaScript
- **Página de detalhes** (`detalhe.html`) que identifica o carro clicado através de parâmetro na URL (`?id=`) e exibe: marca, modelo, ano, disponibilidade, descrição, preço, foto principal, foto panorâmica e foto do interior
- **Indicação de disponibilidade** (disponível/indisponível) por veículo
- Layout responsivo usando o grid do Bootstrap (ajusta de 4 colunas em telas grandes para 2 em telas menores)
- Menu de navegação (navbar) responsivo com botão hambúrguer para mobile

## 🛠️ Tecnologias

- **HTML5**
- **CSS3** (estilização própria em `style.css`, complementando o Bootstrap)
- **JavaScript (vanilla)** — toda a renderização dos cards, carrossel e página de detalhes é feita manipulando o DOM diretamente, sem frameworks
- **Bootstrap 5.3** — grid responsivo, navbar, carousel e componentes visuais
- Os dados dos carros ficam armazenados em um **array de objetos JavaScript** (`estoque`) dentro do próprio `script.js`, sem uso de backend ou banco de dados

## 📂 Estrutura do projeto

```
BetaCar/
└── public/
    ├── index.html          # Página inicial (destaques + grid de carros)
    ├── detalhe.html         # Página de detalhes do carro selecionado
    └── assets/
        ├── script.js         # Dados do estoque + lógica de renderização
        ├── style.css         # Estilos customizados
        └── img/              # Fotos de cada carro (principal, interior, panorâmica)
```

## ▶️ Como executar

Não depende de instalação nem servidor. Basta abrir o arquivo diretamente no navegador:

```bash
git clone https://github.com/leonardomartinsmacedo/betacar.git
cd betacar/public
open index.html
```

Ou simplesmente dê duplo clique no arquivo `index.html`.

## 🔧 Possíveis melhorias futuras

- Adicionar filtro/busca de carros por marca, preço ou disponibilidade
- Persistir os dados do estoque em uma API ou banco de dados, em vez de array fixo no JavaScript
- Adicionar formulário de contato funcional (atualmente o rodapé só exibe informações estáticas)

## 👤 Autor

Leonardo Martins Macedo — Estudante de Engenharia de Software, PUC Minas
