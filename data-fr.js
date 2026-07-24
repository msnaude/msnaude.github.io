const portfolioDataFr = {
  ui: {
    portfolio: "Portfolio",
    contact: "Me contacter",
    tabGames: "Jeux vidéo",
    tabSubtitling: "Sous-titrage",
    role: "Traductrice EN > FR",
    gameYear: "Année de sortie",
    subYear: "Année",
    dev: "Développeur",
    publisher: "Éditeur",
    words: "Mots",
    producer: "Producteur",
    duration: "Durée",
    footer: "\u00a9 Marie-Sophie Naude - Traductrice EN > FR",
    langEn: "EN",
    langFr: "FR",
    colon: " : ",
    contentTypes: "Contenu"
  },
  genreColors: {
    Simulation: "#57A7EB",
    Casual: "#4A993D",
    FMV: "#C25A4A",
    "Dating Sim": "#C97A9A",
    Interactif: "#C98A3D",
    Gestion: "#7A8A9A",
    Roguelite: "#3D6B4A",
    Tir: "#3A5A7A",
    Multijoueur: "#B5A83D",
    Narration: "#7A5A9A",
    "Bac à sable": "#B0B0B0",
    Construction: "#9A7A5A",
    "Animation japonaise": "#C25A4A",
    "Court-m\u00e9trage": "#5A8AB5"
  },
  name: "Marie-Sophie Naude",
  bio: "Bienvenue sur mon portfolio ! Découvrez les différents projets de localisation de jeux vidéo et de sous-titrage sur lesquels j'ai travaillé ces dernières années. N'hésitez pas à me contacter pour vos projets !",
  email: "msnaude.translation@gmail.com",
  social: [
    { url: "https://www.mobygames.com/person/1443350/marie-sophie-naude/", icon: "fas fa-gamepad", label: "MobyGames" },
    { url: "https://www.linkedin.com/in/marie-sophie-naude-b294691ab/", icon: "fab fa-linkedin", label: "LinkedIn" }
  ],
  specialties: [
    { title: "Jeux vidéo", text: "UI, scripts, patch notes, pages Steam…" },
    { title: "Technique et IT", text: "Logiciels, documentation, notices, fiches produits…" },
    { title: "Sous-titrage", text: "Animés, films, séries, documentaires, publicités…" },
    { title: "Marketing", text: "Communiqués de presse, articles, livres blancs, ebooks…" }
  ],
  videoGames: [
    {
      title: "House Flipper 2",
      task: "Localisation complète",
      image: "images/hf2.jpg",
      year: 2023,
      developer: "Frozen District",
      editor: "Frozen District",
      wordcount: "+90 000",
      summary: "Balayez tous vos soucis dans ce simulateur de rénovation relaxant ! Achetez, réparez et vendez pour devenir une légende locale, ou munissez-vous de vos outils préférés et bâtissez de zéro. En coop, vous pouvez jouer au mode création et au mode histoire à 2, 3 ou 4 joueurs.",
      genres: ["Simulation", "Casual", "Construction"],
      contentTypes: ["UI", "Dialogues", "Narration", "Tutoriels", "Succès", "Page Steam", "Annonces Steam"],
      dlcs: ["images/hf2 dlc1.jpg", "images/hf2 dlc2.jpg"]
    },
    {
      title: "House Flipper 1",
      task: "Localisation partielle et relecture complète",
      image: "images/hf1.jpg",
      year: 2018,
      developer: "Empyrean",
      editor: "Frozen District, PlayWay S.A.",
      wordcount: "+120 000",
      summary: "House Flipper, c'est l'occasion unique de devenir une équipe de rénovation à vous tout seul. Achetez, réparez et rénovez des maisons en ruines pour leur donner une seconde vie et les vendre à profit !",
      genres: ["Simulation", "Casual", "Construction"],
      contentTypes: ["UI", "Dialogues", "Tutoriels", "Succès"],
      dlcs: [
        "images/hf1 dlc1.jpg",
        "images/hf1 dlc2.jpg",
        "images/hf1 dlc3.jpg",
        "images/hf1 dlc4.jpg",
        "images/hf1 dlc5.jpg",
        "images/hf1 dlc6.jpg",
        "images/hf1 dlc7.jpg",
        "images/hf1 dlc8.jpg",
        "images/hf1 dlc9.jpg",
        "images/hf1 dlc10.jpg"
      ]
    },
    {
      title: "Five Dates",
      task: "Localisation complète",
      image: "images/fivedates.jpg",
      year: 2020,
      developer: "Wales Interactive, Good Gate Media",
      editor: "Wales Interactive",
      wordcount: "70 000",
      summary: "Five Dates est une comédie romantique interactive sur le monde imprévisible des rencontres numériques. Avec cinq correspondances féminines potentielles, Vinny explore si la compatibilité, la chimie et la connexion sont toujours possibles dans un monde où le toucher physique n'est plus une option.",
      genres: ["FMV", "Dating Sim", "Interactif"],
      contentTypes: ["UI", "Dialogues", "Succès"],
      dlcCount: 0
    },
    {
      title: "The Tenants",
      task: "Localisation complète",
      image: "images/thetenants.jpg",
      year: 2021,
      developer: "EndGameLoop Games",
      editor: "EndGameLoop Games",
      wordcount: "65 000",
      summary: "Devenez propriétaire et construisez votre empire immobilier ! Comment réagirez-vous face aux voisins en colère et aux interventions de la police ? Louerez-vous votre appartement à un jeune couple ou à une vieille fille et ses chats ?",
      genres: ["Gestion", "Simulation", "Casual"],
      contentTypes: ["UI", "Narration", "Tutoriels", "Succès", "Page Steam"],
      dlcs: ["images/thetenants dlc1.jpg"]
    },
    {
      title: "Ultra Mega Cats - Accès anticipé",
      task: "Localisation et relecture",
      image: "images/ultramegacats.jpg",
      year: 2025,
      developer: "Fallen Leaf, Unseen Silence, Black Drakkar Games",
      editor: "Fallen Leaf",
      wordcount: "9 000",
      summary: "Repoussez les hordes d'ennemis en faisant parler la poudre dans Ultra Mega Cats, un jeu de tir coopératif à la 3e personne à la sauce roguelike. Incarnez l'un des Mega Cats, armé jusqu'aux crocs d'une large palette de capacités, et échappez au joug des rongeurs et des oiseaux !",
      genres: ["Roguelite", "Tir", "Multijoueur"],
      contentTypes: ["UI", "Dialogues"],
      dlcCount: 0
    },
    {
      title: "Forgery Craft",
      task: "Localisation complète",
      image: "images/forgerycraft.jpg",
      year: 2027,
      developer: "Empyrean",
      editor: "Frozen District",
      wordcount: "+8 000",
      summary: "Maîtrisez l'art de la contrefaçon dans ce jeu de simulation scénarisé. Commencez par trafiquer des documents en modifiant de simples dates et signatures et finissez par falsifier des œuvres d'art qui tromperaient n'importe quel expert.",
      genres: ["Simulation", "Narration"],
      contentTypes: ["UI", "Dialogues", "Narration", "Éléments graphiques", "Page Steam"],
      dlcCount: 0
    },
    {
      title: "Cozyrama",
      task: "Localisation complète",
      image: "images/cozyrama.jpg",
      year: 2025,
      developer: "Sandwich Games, Tutel Games",
      editor: "Frozen District",
      wordcount: "2 000",
      summary: "Cozyrama est un jeu sandbox qui vous permet de façonner vos dioramas féériques. Sculptez-les, colorez-les, placez des centaines de décorations et ajoutez de petits animaux. Contemplez un monde qui évolue, sans pression ni chrono. Détendez-vous et laissez faire votre imagination !",
      genres: ["Bac à sable", "Casual", "Construction"],
      contentTypes: ["UI", "Tutoriels", "Succès", "Page Steam"],
      dlcCount: 0
    }
  ],
  subtitling: [
    {
      title: "Animé sous NDA",
      task: "Sous-titrage EN > FR",
      year: 2026,
      producer: "XXX",
      duration: "XXX",
      durationLabel: "\u00c9pisodes",
      summary: "Projet sous NDA",
      genres: ["Animation japonaise"]
    },
    {
      title: "De celles qui guérissent",
      task: "Sous-titrage FR > EN",
      year: 2022,
      producer: "Romain Vissol, Mélina Charlot",
      duration: "12 min",
      image: "images/decellesquiguerissent.jpg",
      summary: "Une mère de famille en perdition est prise au piège d'un quotidien destructeur, jusqu'au jour où sa mystérieuse voisine s'impose chez elle pour la forcer à prendre une décision.",
      genres: ["Court-métrage"]
    },
    {
      title: "Jean est tombé amoureux",
      task: "Sous-titrage FR > EN",
      image: "images/jean.jpg",
      year: 2022,
      producer: "Romain Roellet, Teddy Dumont",
      duration: "20 min",
      summary: "Jean est un joueur de rugby talentueux. Alors que son équipe tente de défendre son titre, il tombe amoureux d'Ayoub, un joueur d'une équipe rivale. L'amitié qu'il entretient avec ses coéquipiers est en danger et se révèle plus faible qu'il ne le pensait.",
      genres: ["Court-métrage"]
    }
  ]
};
