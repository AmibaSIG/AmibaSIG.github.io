// Inicializa o mapa na div com id 'mapa' e define o centro nas coordenadas (latitude, longitude) e zoom inicial
var map = L.map('mapa').setView([41.0, -8.0], 8);

// Adiciona a camada base do OpenStreetMap (mapa normal) com a respetiva atribuição de direitos
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);  // Torna esta camada visível inicialmente

// Camada de imagens de satélite do Google Maps (não adicionada ao mapa inicialmente)
var googleSat = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}');

// Camada de imagens de satélite da Esri, alternativa à do Google
var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: '&copy; <a href="https://www.esri.com/">Esri</a>' 
});

// Objeto que agrupa todas as camadas base para que o utilizador possa alternar entre elas
var baseMaps = {
	"OpenStreetMap": osm, 
	"Google Satellite": googleSat, 
	"Esri World Imagery": esriWorldImagery, 
};

// Adiciona ao mapa o controlo para alternar entre as camadas base disponíveis
var layerControl = L.control.layers(baseMaps).addTo(map);


//*************************************************************************************************************************************************************************************************************************

// Definição de ícones personalizados para os marcadores, com URL, tamanho e ponto de ancoragem
var bordaleiraIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/17207/17207630.png', // Ícone da raça Bordaleira
  iconSize: [32, 32], // Tamanho do ícone em pixels
  iconAnchor: [16, 32], // Ponto do ícone que corresponde à posição no mapa (a ponta inferior)
  popupAnchor: [0, -32] // Posição do popup em relação ao ícone
});

var churraIcon = L.icon({
  iconUrl: 'https://static.vecteezy.com/system/resources/previews/009/589/758/non_2x/location-location-pin-location-icon-transparent-free-png.png', // Ícone da raça Churra
  iconSize: [45, 45], // Tamanho do ícone
  iconAnchor: [16, 32], // Ponto de ancoragem
  popupAnchor: [0, -32] // Popup acima do ícone
});

//*************************************************************************************************************************************************************************************************************************

// Lista de pontos para a raça Bordaleira de Entre Douro e Minho (ícones azuis no mapa)
var bordaleiraPoints = [
  {
    nome: "José Manuel Gonçalves Carvalho", // Nome do criador
    morada: "Politeiro, Nº 977", // Morada da exploração
    codigoPostal: "4850-303", // Código postal
    telefone: "253656333", // Telefone fixo
    telemovel: "963173722", // Telemóvel
    direcoes: "https://www.google.com/maps?q=41.58066,-8.10699", // Link para direções no Google Maps
    lat: 41.58066, // Latitude
    lng: -8.10699  // Longitude
  },
  {
    nome: "José Manuel Gonçalves Carvalho 2 ",
    morada: "Politeiro, Nº 977",
    codigoPostal: "4850-303",
    telefone: "253656333",
    telemovel: "963173722",
    direcoes: "https://www.google.com/maps?q=41.575522,-8.081486",
    lat: 41.575522,
    lng: -8.081486
  },
  {
    nome: "Adriano Machado Pereira",
    morada: "Vila Boa",
    codigoPostal: "4860-126",
    telefone: "253657450",
    telemovel: "967279685",
    direcoes: "https://www.google.com/maps?q=41.5789,-8.0321",
    lat: 41.5789,
    lng: -8.0321
  },
  {
    nome: "João Fernandes Ferreira",
    morada: "Rua da Compra, Nº 9",
    codigoPostal: "4730-480",
    telefone: "253367117",
    telemovel: "932833319",
    direcoes: "https://www.google.com/maps?q=41.71168,-8.36500",
    lat: 41.71168,
    lng: -8.365
  },
  {
    nome: "Maria Amélia Oliveira",
    morada: "Travessa da Ladeira, Nº22",
    codigoPostal: "4850-024",
    telefone: "",
    telemovel: "937253056",
    direcoes: "https://www.google.com/maps?q=41.604625,-8.074811",
    lat: 41.604625,
    lng: -8.074811
  },
  {
    nome: "Maria Izilda Gonçalves",
    morada: "Gandra, cx Nº 10",
    codigoPostal: "4910-040",
    telefone: "258921911",
    telemovel: "962845156",
    direcoes: "https://www.google.com/maps?q=41.83861,-8.70263",
    lat: 41.83861,
    lng: -8.70263
  },
  {
    nome: "Clementina Fernandes Gonçalves Matos",
    morada: "Ameã",
    codigoPostal: "4850-151",
    telefone: "253647430",
    telemovel: "919479403",
    direcoes: "https://www.google.com/maps?q=41.63243,-8.13865",
    lat: 41.63243,
    lng: -8.13865
  },
  {
    nome: "Rosa Jesus Ogando Dias",
    morada: "Rua João Rei, Nº 20",
    codigoPostal: "4730-012",
    telefone: "253341534",
    telemovel: "917837312",
    direcoes: "https://www.google.com/maps?q=41.76383,-8.37983",
    lat: 41.76383,
    lng: -8.37983
  },
  {
    nome: "Abilio Machado Pereira",
    morada: "",
    codigoPostal: "4860-126",
    telefone: "253657339",
    telemovel: "961150066",
    direcoes: "https://www.google.com/maps?q=41.57919,-8.03183",
    lat: 41.57919,
    lng: -8.03183
  },
  {
    nome: "João Fernandes Estrada Ornelas Nogueira",
    morada: "Avenida da Liberdade 334 - 5º Esq.",
    codigoPostal: "4730-510",
    telefone: "253924317",
    telemovel: "966488085",
    direcoes: "https://www.google.com/maps?q=41.64740,-8.53636",
    lat: 41.6474,
    lng: -8.53636
  },
  {
    nome: "Maria Conceição Pereira Almeida",
    morada: "Travessa das Alminhas, Nº 4",
	codigoPostal:"4730-160",
    telefone: "253324756",
    telemovel: "964480388",
    direcoes: "https://www.google.com/maps?q=41.66181,-8.44129",
    lat: 41.66181,
    lng: -8.44129
  },
  {
    nome: "Ana Afonso Pires Cruz Silva",
    morada: "Rua da Ranha",
    codigoPostal:"4850-158",
	telefone: "253647602",
    telemovel: "",
    direcoes: "https://www.google.com/maps?q=41.639091,-8.141394",
    lat: 41.639091,
    lng: -8.141394
  },
  {
    nome: "Palmira Gomes Samico Marouço",
    morada: "",
    codigoPostal:"4925-479",
	telefone: "258985047",
    telemovel: "965109194",
    direcoes: "https://www.google.com/maps?q=41.81422,-8.75451",
    lat: 41.81422,
    lng: -8.75451
  },
  {
    nome: "Nuno António Gonçalves Pereira",
    morada: "Rua do Barreiro, Nº 21",
    codigoPostal:"5470-521",
	telefone: "",
    telemovel: "936665777",
    direcoes: "https://www.google.com/maps?q=41.76313,-7.84750",
    lat: 41.76313,
    lng: -7.84750
  },
  {
    nome: "Lúcia Maria Teixeira Lopes",
    morada: "Rua das Cruzes, Nº24",
    codigoPostal:"4990-585",
	telefone: "258757467",
    telemovel: "939531372",
    direcoes: "https://www.google.com/maps?q=41.826973,-8.587400",
    lat: 41.826973,
    lng: -8.587400
  },
  {
    nome: "Carminda Araújo Martins",
    morada: "Avenida Abade de Priscos, Nº 841",
    codigoPostal:"4730-590",
	telefone: "253324041",
    telemovel: "913690636",
    direcoes: "https://www.google.com/maps?q=41.63464,-8.45342",
    lat: 41.63464,
    lng: -8.45342
  },
  {
    nome: "Instituto Politécnico de Viana do Castelo",
    morada: "Praça General Barbosa",
    codigoPostal:"4901-909",
	telefone: "258909740",
    telemovel: "962447867",
    direcoes: "https://www.google.com/maps?q=41.79409,-8.54056",
    lat: 41.79409,
    lng: -8.54056
  },
  {
    nome: "Aurea Fátima Gomes Marques",
    morada: "Rua d'além, Nº 243",
    codigoPostal:"4850-286",
	telefone: "253112503",
    telemovel: "936594629",
    direcoes: "https://www.google.com/maps?q=41.567942,-8.072117",
    lat: 41.567942,
    lng: -8.072117
  },
  {
    nome: "Almeno José Vieira Leite Fernandes",
    morada: "Rua de Cima, Nº 120 - Agra",
    codigoPostal:"4850-281",
	telefone: "",
    telemovel: "936887588",
    direcoes: "https://www.google.com/maps?q=41.59504,-8.04682",
    lat: 41.59504,
    lng: -8.04682
  },
  {
    nome: "Centro Social e Cultural de S. Pedro do Bairro",
    morada: "Rua da Infância, Nº 199 - Bairro",
    codigoPostal:"4765-016",
	telefone: "",
    telemovel: "964591613",
    direcoes: "https://www.google.com/maps?q=41.36801,-8.42914",
    lat: 41.36801,
    lng: -8.42914
  },
  {
    nome: "Maria Rosa Saraiva Pereira",
    morada: "Rua da Lagoa, Nº 346",
    codigoPostal:"4730-590",
	telefone: "253323719",
    telemovel: "964633968",
    direcoes: "https://www.google.com/maps?q=41.63442,-8.45347",
    lat: 41.63442,
    lng: -8.45347
  },
  {
    nome: "António Machado Alves",
    morada: "Rua da Touça, Nº 20",
    codigoPostal:"4850-211",
	telefone: "",
    telemovel: "916226015",
    direcoes: "https://www.google.com/maps?q=41.68100,-8.11539",
    lat: 41.68100,
    lng: -8.11539
  },
  {
    nome: "Escola Profissional de Agricultura e Desenvolvimento Rural de Ponte de Lima",
    morada: "Quinta do Cruzeiro",
    codigoPostal:"4990-026",
	telefone: "258741404",
    telemovel: "961448919",
    direcoes: "https://www.google.com/maps?q=41.76215,-8.57169",
    lat: 41.76215,
    lng: -8.57169
  },
  {
    nome: "Dulce Amélia Rocha Gomes Oliveira Gil",
    morada: "Igreja - Grade",
    codigoPostal:"4970-190",
	telefone: "",
    telemovel: "939471435",
    direcoes: "https://www.google.com/maps?q=41.869024,-8.367302",
    lat: 41.869024,
    lng: -8.367302
  },
  {
    nome: "Albano Monteiro Fernandes",
    morada: "Rua Dr. Francisco Botelho, Nº 693",
    codigoPostal:"4860-317",
	telefone: "",
    telemovel: "962695451",
    direcoes: "https://www.google.com/maps?q=41.58923,-8.05352",
    lat: 41.58923,
    lng: -8.05352
  },
  {
    nome: "Maria da Fé Barros Rebelo",
    morada: "Rua Nova dos Bombeiros, Nº 178 - 2º. ESQ.",
    codigoPostal:"4850-545",
	telefone: "",
    telemovel: "917796281",
    direcoes: "https://www.google.com/maps?q=41.62275,-8.15081",
    lat: 41.62275,
    lng: -8.15081
  },
  {
    nome: "Manuel Querubim Oliveira de Barros",
    morada: "Rua do Altinho, Nº 6 - Samonde",
    codigoPostal:"4900-353",
	telefone: "",
    telemovel: "964635749",
    direcoes: "https://www.google.com/maps?q=41.72487,-8.75953",
    lat: 41.72487,
    lng: -8.75953
  },
  {
    nome: "Cândido Lopes Vieira",
    morada: "",
    codigoPostal:"4860-123",
	telefone: "",
    telemovel: "938307545",
    direcoes: "https://www.google.com/maps?q=41.58573,-8.03955",
    lat: 41.58573,
    lng: -8.03955
  },
  {
    nome: "Luís Gaivão de Castro Caldas",
    morada: "Casa da Coutada",
    codigoPostal:"4970-160",
	telefone: "",
    telemovel: "914354585",
    direcoes: "https://www.google.com/maps?q=41.85520,-8.41863",
    lat: 41.85520,
    lng: -8.41863
  },
  {
    nome: "Francisco Dias Pereira",
    morada: "Águas de Arão, cx 156",
    codigoPostal:"4970-156",
	telefone: "",
    telemovel: "964157980",
    direcoes: "https://www.google.com/maps?q=41.85552,-8.40666",
    lat: 41.85552,
    lng: -8.40666
  },
  {
    nome: "Inês Quaresma de Oliveira",
    morada: "Rua da Cuqueira, Nº 52",
    codigoPostal:"4850-502",
	telefone: "",
    telemovel: "",
    direcoes: "https://www.google.com/maps?q=41.62198,-8.13889",
    lat: 41.62198,
    lng: -8.13889
  },
  {
    nome: "Adosinda Rosa Gonçalves Braz Lobo",
    morada: "Rua Domingos Gonçalves, Nº 20",
    codigoPostal:"4860-137",
	telefone: "",
    telemovel: "966449358",
    direcoes: "https://www.google.com/maps?q=41.55606,-8.02173",
    lat: 41.55606,
    lng: -8.02173
  },
  {
    nome: "Ana Maria Correia Fernandes Alves",
    morada: "Rua das Toupeiras, Nº 121",
    codigoPostal:"4860-123",
	telefone: "",
    telemovel: "",
    direcoes: "https://www.google.com/maps?q=41.58934,-8.04242",
    lat: 41.58934,
    lng: -8.04242
  },
  {
    nome: "Natália Rebelo Carneiro",
    morada: "Rua do Castelo, Nº 204",
    codigoPostal:"4850-306",
	telefone: "",
    telemovel: "918483413",
    direcoes: "https://www.google.com/maps?q=41.57819,-8.09855",
    lat: 41.57819,
    lng: -8.09855
  },
  {
    nome: "Tiago Fernando Carvalho Valente",
    morada: "Rua da Senhora do Pilar, Nº 5",
    codigoPostal:"4920-030",
	telefone: "",
    telemovel: "915890399",
    direcoes: "https://www.google.com/maps?q=41.94723,-8.68315",
    lat: 41.94723,
    lng: -8.68315
  },
  {
    nome: "Vale Puro Sociedade Agrícola, LDA",
    morada: "Rua das Tulhas, Nº 273",
    codigoPostal:"4660-061",
	telefone: "",
    telemovel: "964248792",
    direcoes: "https://www.google.com/maps?q=41.08190,-7.95661",
    lat: 41.08190,
    lng: -7.95661
  },
  {
    nome: "Sons Rurais - Criação de Galinhas de Raças Autóctones Lda",
    morada: "Rua da Devesa, Nº 368",
    codigoPostal:"4990-540",
	telefone: "",
    telemovel: "939531372",
    direcoes: "https://www.google.com/maps?q=41.827042,-8.587683",
    lat: 41.827042,
    lng: -8.587683
  },
  {
    nome: "Manuel Joaquim Marques da Silva",
    morada: "Rua Alfredo Reguengo, Nº 95 Esq.",
    codigoPostal:"4900-578",
	telefone: "",
    telemovel: "936065143",
    direcoes: "https://www.google.com/maps?q=41.66345,-8.70492",
    lat: 41.66345,
    lng: -8.70492
  },
  {
    nome: "Elvira Alves Gonçalves Pereira",
    morada: "Rua dos Casais, Nº 3 CX 40",
    codigoPostal:"5470-409",
	telefone: "",
    telemovel: "962301693",
    direcoes: "https://www.google.com/maps?q=41.63891,-7.98444",
    lat: 41.63891,
    lng: -7.98444
  },
  {
    nome: "Carla Manuel Vilas Gonçalves",
    morada: "Estrada do Carrascal, Nº 199",
    codigoPostal:"4950-310",
	telefone: "",
    telemovel: "963418026",
    direcoes: "https://www.google.com/maps?q=42.01637,-8.38844",
    lat: 42.01637,
    lng: -8.38844
  },
  {
    nome: "Maria da Conceição Carvalho da Cunha",
    morada: "Estrada Nacional 311, Nº 4",
    codigoPostal:"5470-424",
	telefone: "",
    telemovel: "961900991",
    direcoes: "https://www.google.com/maps?q=41.65723,-7.91745",
    lat: 41.65723,
    lng: -7.91745
  },
  {
    nome: "Luciane Bezerra Lopes",
    morada: "Rua do Vale, Nº20, Pomar da Rainha",
    codigoPostal:"5470-424",
	telefone: "",
    telemovel: "",
    direcoes: "https://www.google.com/maps?q=41.65425,-7.91815",
    lat: 41.65425,
    lng: -7.91815
  },
  {
    nome: "Leonor Soares Rodrigues da Silva",
    morada: "Rua da Morsela, Nº 120",
    codigoPostal:"4980-796",
	telefone: "",
    telemovel: "912730602 / 961559344",
    direcoes: "https://www.google.com/maps?q=41.786458,-8.396530",
    lat: 41.786458,
    lng: -8.396530
  }
];

//*************************************************************************************************************************************************************************************************************************
// Pontos para raça Churra do Minho (VERMELHO)
var churraPoints = [
  {
    nome: "Albino Andrade",
    morada: "Vilar de Cunhas",
    codigoPostal:"4860-481",
	telefone: "253654481",
    telemovel: "968793405",
    direcoes: "https://www.google.com/maps?q=41.54532,-7.84975",
    lat: 41.54532,
    lng: -7.84975
  },
  {
    nome: "Laurinda Esteves",
    morada: "Lombadinha, Nº 209",
    codigoPostal:"4970-170",
	telefone: "",
    telemovel: "938632452",
    direcoes: "https://www.google.com/maps?q=41.91976,-8.35884",
    lat: 41.91976,
    lng: -8.35884
  },
  {
    nome: "Helena Anjos Araújo Lima",
    morada: "Caminho do Monte de Rode, Nº 63",
    codigoPostal:"4925-477",
	telefone: "258732895",
    telemovel: "969714569",
    direcoes: "https://www.google.com/maps?q=41.78980,-8.72596",
    lat: 41.78980,
    lng: -8.72596
  },
  {
    nome: "Maria Luz Martins Teixeira",
    morada: "",
    codigoPostal:"4860-126",
	telefone: "253656726",
    telemovel: "966008948",
    direcoes: "https://www.google.com/maps?q=41.58399,-8.03538",
    lat: 41.58399,
    lng: -8.03538
  },
  {
    nome: "Nuno Miguel Monteiro da Silva",
    morada: "Atafona",
    codigoPostal:"4850-152",
	telefone: "253647922",
    telemovel: "919100613",
    direcoes: "https://www.google.com/maps?q=41.63335,-8.15597",
    lat: 41.63335,
    lng: -8.15597
  },
  {
    nome: "Maria Aurora Coelho Silva Maia",
    morada: "Rua da Costa, Nº 65",
    codigoPostal:"4720-486",
	telefone: "",
    telemovel: "917355270",
    direcoes: "https://www.google.com/maps?q=41.656219,-8.307794",
    lat: 41.656219,
    lng: -8.307794
  },
  {
    nome: "Manuel Fernando Sousa Alves",
    morada: "Qta Quinteiro",
    codigoPostal:"5030-128",
	telefone: "254812210",
    telemovel: "936517558",
    direcoes: "https://www.google.com/maps?q=41.2410,-7.874145",
    lat: 41.2410,
    lng: -7.874145
  },
  {
    nome: "Elisabete Maria Coutinho Lopes Alves",
    morada: "Lugar Santa Quiteria, Nº 231",
    codigoPostal:"5030-128",
	telefone: "254821297",
    telemovel: "919781781",
    direcoes: "https://www.google.com/maps?q=41.229417,-7.83525",
    lat: 41.229417,
    lng: -7.83525
  },
  {
    nome: "Paulo Jorge Meireles Pires",
    morada: "Rua S. José, Nº 18",
    codigoPostal:"5460-383",
	telefone: "276439128",
    telemovel: "963346079",
    direcoes: "https://www.google.com/maps?q=41.57051,-8.05957",
    lat: 41.57051,
    lng: -8.05957
  },
  {
    nome: "Maria Augusta Correia Rabiço",
    morada: "Rua de Santa Quiteria, Nº 694",
    codigoPostal:"5030-128",
	telefone: "",
    telemovel: "",
    direcoes: "https://www.google.com/maps?q=41.241075,-7.873986",
    lat: 41.241075,
    lng: -7.873986
  },
  {
    nome: "Escola Profissional Agrícola Eng. Silva Nunes",
    morada: "Rua de Quintela, Nº 15",
    codigoPostal:"4890-414",
	telefone: "255361400",
    telemovel: "961346866",
    direcoes: "https://www.google.com/maps?q=41.41392,-7.98689",
    lat: 41.41392,
    lng: -7.98689
  },
  {
    nome: "Ernesto Ferreira Gomes",
    morada: "Samão",
    codigoPostal:"4860-221",
	telefone: "",
    telemovel: "967365753",
    direcoes: "https://www.google.com/maps?q=41.56794,-7.86261",
    lat: 41.56794,
    lng: -7.86261
  },
  {
    nome: "Virgínia Antunes Ribeiro",
    morada: "Lugar da Vila, Nº 610-A",
    codigoPostal:"4730-383",
	telefone: "",
    telemovel: "962136055",
    direcoes: "https://www.google.com/maps?q=41.69838,-8.42361",
    lat: 41.69838,
    lng: -8.42361
  },
  {
    nome: "Maria Rosinda Gomes Simões Gaspar",
    morada: "Travessa de Stª Clara, Nº 14",
    codigoPostal:"3105-071",
	telefone: "",
    telemovel: "916670159",
    direcoes: "https://www.google.com/maps?q=39.88787,-8.76092",
    lat: 39.88787,
    lng: -8.76092
  },
  {
    nome: "Gil Ricardo Vieira Rocha",
    morada: "Rua da Fraga - Terrafeita",
    codigoPostal:"4850-148",
	telefone: "",
    telemovel: "926234522",
    direcoes: "https://www.google.com/maps?q=41.645660,-8.158531",
    lat: 41.645660,
    lng: -8.158531
  },
  {
    nome: "José Manuel Ribeiro Afonso",
    morada: "Estrada de Amonde, Nº 328",
    codigoPostal:"4925-301",
	telefone: "25893777",
    telemovel: "965202665",
    direcoes: "https://www.google.com/maps?q=41.78382,-8.75419",
    lat: 41.78382,
    lng: -8.75419
  },
  {
    nome: "ARDAL - Associação Regional de Desenvolvimento do Alto Lima",
    morada: "Mezio - Cabana Maior",
    codigoPostal:"4970-092",
	telefone: "258510100",
    telemovel: "933410658",
    direcoes: "https://www.google.com/maps?q=41.88925,-8.31586",
    lat: 41.88925,
    lng: -8.31586
  },
  {
    nome: "Joaquim Adrinao Pereira Andrade",
    morada: "",
    codigoPostal:"4860-481",
	telefone: "",
    telemovel: "966248727",
    direcoes: "https://www.google.com/maps?q=41.54536,-7.84964",
    lat: 41.54536,
    lng: -7.84964
  },
  {
    nome: "APCC - Associação de Paralisia Cerebral de Coimbra",
    morada: "Quinta da Conraria, Rua do Campo, Nº 2",
    codigoPostal:"3040-109",
	telefone: "239802820",
    telemovel: "913801258",
    direcoes: "https://www.google.com/maps?q=40.17756,-8.39708",
    lat: 40.17756,
    lng: -8.39708
  },
  {
    nome: "Arminda Maria dos Santos Gonçalves",
    morada: "Rua do Vale, Nº 7",
    codigoPostal:"5470-304",
	telefone: "",
    telemovel: "916523975",
    direcoes: "https://www.google.com/maps?q=41.74529,-7.75033",
    lat: 41.74529,
    lng: -7.75033
  }
];

//*************************************************************************************************************************************************************************************************************************

// Função que cria o conteúdo HTML da popup para mostrar informação do ponto
function criarPopup(ponto) {
  // Retorna um template string com o conteúdo HTML formatado com os dados do ponto
  return ` 
	<b>Nome:</b> ${ponto.nome}<br>                
    <b>Morada:</b> ${ponto.morada}<br>            
    <b>Código Postal:</b> ${ponto.codigoPostal}<br> 
    <b>Telefone:</b> ${ponto.telefone}<br>        
    <b>Telemóvel:</b> ${ponto.telemovel}<br>      
    <b>Direções:</b> <a href="${ponto.direcoes}" target="_blank">Ver no Google Maps</a>
  `;
}

// Para cada ponto da raça Bordaleira, executa esta função
bordaleiraPoints.forEach(function(ponto) {
  // Cria um marcador no mapa nas coordenadas do ponto e usa o ícone azul da Bordaleira
  L.marker([ponto.lat, ponto.lng], {icon: bordaleiraIcon})
    .addTo(map)                 // Adiciona o marcador ao mapa
    .bindPopup(criarPopup(ponto)); // Liga a popup com o conteúdo criado pela função criarPopup
});

// Para cada ponto da raça Churra, executa esta função
churraPoints.forEach(function(ponto) {
  // Cria um marcador no mapa nas coordenadas do ponto e usa o ícone vermelho da Churra
  L.marker([ponto.lat, ponto.lng], {icon: churraIcon})
    .addTo(map)                  // Adiciona o marcador ao mapa
    .bindPopup(criarPopup(ponto)); // Liga a popup com o conteúdo criado pela função criarPopup
});

//*************************************************************************************************************************************************************************************************************************

// Função que procura um ponto no mapa com base no texto da caixa de busca
function procurarPonto() {
  // Pega o valor da caixa de texto com id 'buscaNome', tira espaços extra e converte para minúsculas
  var nomeBusca = document.getElementById('buscaNome').value.trim().toLowerCase();

  // Junta todos os pontos das duas raças num só array
  var todosPontos = [...bordaleiraPoints, ...churraPoints];
  
  // Procura o primeiro ponto cujo nome contenha o texto procurado (ignore maiúsculas/minúsculas)
  var pontoEncontrado = todosPontos.find(p => p.nome.toLowerCase().includes(nomeBusca));

  // Se encontrar um ponto que coincida
  if (pontoEncontrado) {
    // Move o mapa para as coordenadas do ponto encontrado e faz zoom para 14
    map.setView([pontoEncontrado.lat, pontoEncontrado.lng], 14);

    // Cria um popup na posição do ponto e mostra as informações do ponto
    L.popup()
      .setLatLng([pontoEncontrado.lat, pontoEncontrado.lng])  // Define a posição do popup
      .setContent(criarPopup(pontoEncontrado))                // Define o conteúdo do popup
      .openOn(map);                                           // Abre o popup no mapa
  } else {
    // Caso não encontre nenhum ponto com esse nome, mostra uma mensagem de alerta
    alert("Ponto não encontrado. Verifique o nome digitado.");
  }
}

// Função que preenche a lista de sugestões (datalist) para a caixa de busca
function preencherDatalist() {
  // Obtém o elemento datalist com id 'nomesExploracoes'
  const datalist = document.getElementById('nomesExploracoes');

  // Junta todos os pontos das duas raças num array
  const todosPontos = [...bordaleiraPoints, ...churraPoints];

  // Para cada ponto na lista de pontos
  todosPontos.forEach(ponto => {
    // Cria um novo elemento option para o datalist
    const option = document.createElement('option');

    // Define o valor da option como o nome do ponto (criador)
    option.value = ponto.nome;

    // Adiciona a option ao datalist para aparecer nas sugestões
    datalist.appendChild(option);
  });
}

// Executa a função preencherDatalist assim que o script é carregado para preencher as sugestões
preencherDatalist();

//*************************************************************************************************************************************************************************************************************************
