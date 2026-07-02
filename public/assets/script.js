var estoque=[
        {
      "id": 1,
     "modelo": "Civic",
      "ano": 2025,
      "marca": "Honda",
      "disponivel": true,
      "preco": 185000,
      "descricao": "Sedã moderno com ótimo desempenho, conforto premium e tecnologias avançadas de segurança.",
      "descricao_interior":"Interior sofisticado com acabamento premium, painel digital moderno, multimídia ampla e bancos extremamente confortáveis.",
      "img_principal":"assets/img/civic1.png",
      "img_panoramica":"assets/img/civic_panoramica.png",
      "img_interior":"assets/img/civic_interior.png",
    },

    {
      "id": 2,
      "modelo": "Onix",
      "ano": 2020,
      "marca": "Chevrolet",
      "disponivel": true,
      "preco": 62000,
      "descricao": "Hatch econômico e compacto, ideal para uso urbano e viagens do dia a dia.",
      "descricao_interior":"Cabine simples e funcional, com boa ergonomia, central multimídia intuitiva e espaço confortável para o dia a dia.",
      "img_principal":"assets/img/onix1.png",
      "img_panoramica":"assets/img/onix_panoramica.png",
      "img_interior":"assets/img/onix_interior.png",
    },

    {
      "id": 3,
      "modelo": "Compass",
      "ano": 2021,
      "marca": "Jeep",
      "disponivel": true,
      "preco": 145000,
      "descricao": "SUV robusto com excelente espaço interno, conforto e capacidade off-road.",
      "descricao_interior":"SUV com interior espaçoso, acabamento refinado, painel tecnológico e ótima sensação de conforto premium.",
      "img_principal":"assets/img/compass1.png",
      "img_panoramica":"assets/img/compass_panoramica.png",
      "img_interior":"assets/img/compass_interior.png",
    },

    {
      "id": 4,
      "modelo": "Mobi",
      "ano": 2019,
      "marca": "Fiat",
      "disponivel": true,
      "preco": 48000,
      "descricao": "Carro compacto, econômico e prático para o trânsito das grandes cidades.",
      "descricao_interior":"Interior compacto e econômico, pensado para praticidade urbana e facilidade na condução diária.",
      "img_principal":"assets/img/mobi1.png",
      "img_panoramica":"assets/img/mobi_panoramica.png",
      "img_interior":"assets/img/mobi_interior.png",
    },
    {
      "id": 5,
      "modelo": "Polo",
      "ano": 2026,
      "marca": "Volkswagen",
      "disponivel": true,
      "preco": 98000,
      "descricao": "Hatch moderno com design esportivo, boa tecnologia embarcada e conforto.",
      "descricao_interior":"Ambiente moderno com visual esportivo, painel digital atualizado e excelente conectividade.",
      "img_principal":"assets/img/polo1.png",
      "img_panoramica":"assets/img/polo_panoramica.png",
      "img_interior":"assets/img/polo_interior.png",
    },
    {
      "id": 6,
      "modelo": "Tracker",
      "ano": 2022,
      "marca": "Chevrolet",
      "disponivel": true,
      "preco": 132000,
      "descricao": "SUV compacto com conectividade avançada, economia e ótimo desempenho.",
      "descricao_interior":"Cabine moderna com ótima conectividade, bancos confortáveis e excelente aproveitamento de espaço.",
      "img_principal":"assets/img/tracker1.png",
      "img_panoramica":"assets/img/tracker_panoramica.png",
      "img_interior":"assets/img/tracker_interior.png",
    },
    {
      "id": 7,
      "modelo": "Corolla",
      "ano": 2020,
      "marca": "Toyota",
      "disponivel": true,
      "preco": 118000,
      "descricao": "Sedã confiável, confortável e conhecido pela durabilidade e baixo consumo.",
      "descricao_interior":"Cabine moderna com ótima conectividade, bancos confortáveis e excelente aproveitamento de espaço.",
      "img_principal":"assets/img/corolla1.png",
      "img_panoramica":"assets/img/corolla_panoramica.png",
      "img_interior":"assets/img/corolla_interior.png",
    },
    {
      "id": 8,
      "modelo": "T-Cross",
      "ano": 2023,
      "marca": "Volkswagen",
      "disponivel": false,
      "preco": 142000,
      "descricao": "SUV compacto com amplo espaço interno, tecnologia moderna e boa dirigibilidade.",
      "descricao_interior":"Interior elegante e silencioso, com acabamento de qualidade e foco total em conforto e durabilidade.",
      "img_principal":"assets/img/tcross1.png",
      "img_panoramica":"assets/img/tcross_panoramica.png",
      "img_interior":"assets/img/tcross_interior.png",
    }
]



function criar_card(){
  const container = document.getElementById('lista-carros');

  estoque.forEach(carro => {
    container.innerHTML += `
      <div class="col-6 col-sm-4 col-lg-3">
        <a href="detalhe.html?id=${carro.id}" class="card item-card">
          <img src="${carro.img_principal}" alt="${carro.modelo}" class="card-img-top">
          <div class="card-body">
            <h6>${carro.modelo}</h6>
            <p>${carro.marca} — ${carro.ano}</p>
            <strong>R$ ${carro.preco.toLocaleString('pt-BR')}</strong>
          </div>
        </a>
      </div>
    `;
  });
}

function criar_detalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const carro = estoque.find(c => c.id === id);

  if (!carro) {
    document.getElementById('nome').textContent = 'Carro não encontrado';
    return;
  }

  // Badge + título + meta
  document.getElementById('marca').textContent = carro.marca;
  document.getElementById('nome').textContent = carro.modelo;
  document.getElementById('ano_disponivel').textContent =
    `${carro.ano} • ${carro.disponivel ? 'Disponível' : 'Indisponível'}`;
  document.getElementById('descricao').textContent = carro.descricao;
  document.getElementById('preco').textContent =
    `R$ ${carro.preco.toLocaleString('pt-BR')}`;

  // Imagens — todas responsivas com img-fluid
  document.getElementById('img_principal').innerHTML =
    `<img src="${carro.img_principal}" alt="${carro.modelo}" class="img-fluid rounded-2 w-100">`;

  document.getElementById('img_panoramica').innerHTML =
    `<img src="${carro.img_panoramica}" alt="Foto panorâmica" class="img-fluid rounded-2" style="max-height: 220px;">`;

  document.getElementById('img_interior').innerHTML =
    `<img src="${carro.img_interior}" alt="Interior" class="img-fluid rounded-2" style="max-height: 220px;">`;
}

function exibir_destaque(){
const slides = document.getElementById('carousel-slides');
const indicators = document.getElementById('carousel-indicators');

// Filtra só os destaques (ou use todos, como preferir)
const destaques = estoque.slice(0, 3); // pega os 3 primeiros

destaques.forEach((carro, index) => {
  const ativo = index === 0 ? 'active' : '';

  // Indicador
  indicators.innerHTML += `
    <button type="button" 
      data-bs-target="#carouselHero" 
      data-bs-slide-to="${index}"
      class="${ativo}"
      ${ativo ? 'aria-current="true"' : ''}>
    </button>
  `;

  // Slide
  slides.innerHTML += `
  <div class="carousel-item ${ativo}">
    <a href="detalhe.html?id=${carro.id}" class="text-decoration-none">
      <div class="d-flex align-items-center gap-4 p-4 rounded-3 bg-white shadow-sm">
        
        <!-- Imagem -->
        <div style="flex: 0 0 45%;">
          <img src="${carro.img_panoramica}" alt="${carro.modelo}" 
               class="img-fluid rounded-2" style="object-fit: cover; max-height: 260px; width: 100%;">
        </div>

        <!-- Informações -->
        <div style="flex: 1;">
          <span class="badge bg-primary mb-2">${carro.marca}</span>
          <h2 class="fw-bold text-dark mb-1">${carro.modelo}</h2>
          <p class="text-muted mb-3">${carro.ano} &bull; ${carro.disponivel ? 'Disponível' : 'Indisponível'}</p>
          <p class="text-secondary mb-4">${carro.descricao}</p>
          <div class="d-flex align-items-center gap-3">
            <span class="fs-4 fw-bold text-primary">R$ ${carro.preco.toLocaleString('pt-BR')}</span>
            <span class="btn btn-primary btn-sm">Ver detalhes →</span>
          </div>
        </div>

      </div>
    </a>
  </div>
`;
});
}


