const formulaire = document.getElementById("annonceFormulaire");

formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formulaire);
  let dataFormulaire = {
    titre: formData.get("titre"),
    description: formData.get("description"),
    prix: formData.get("prix"),
    adresse: formData.get("adresse"),
    typeBien: formData.get("typeBien"),
  };

  // Exemple d'utilisation
  let appartement1 = new Appartement(
    1,
    "Bel appartement",
    "Spacieux appartement en centre-ville",
    200000,
    "123 Rue Principale",
    2,
    true
  );
  let maison1 = new Maison(
    2,
    "Belle maison",
    "Grande maison avec jardin",
    350000,
    "456 Avenue Royale",
    true,
    true
  );
  let terrain1 = new Terrain(
    3,
    "Grand terrain",
    "Terrain avec vue panoramique",
    100000,
    "789 Chemin Champêtre",
    1000
  );

  console.log(appartement1.getTitre());
  console.log(maison1.getDescription());
  console.log(terrain1.getPrix());

  sauvegarderDonnees(dataFormulaire);
});

// Classe de base BienImmobilier avec des champs privés
class BienImmobilier {
  #id;
  #titre;
  #description;
  #prix;
  #adresse;
  constructor(id, titre, description, prix, adresse) {
    this.#id = id;
    this.#titre = titre;
    this.#description = description;
    this.#prix = prix;
    this.#adresse = adresse;
  }

  // Méthodes pour accéder aux champs privés
  getId() {
    return this.#id;
  }

  getTitre() {
    return this.#titre;
  }

  getDescription() {
    return this.#description;
  }

  getPrix() {
    return this.#prix;
  }

  getAdresse() {
    return this.#adresse;
  }
}

// Classes spécialisées avec des champs privés
class Appartement extends BienImmobilier {
  #etage;
  #ascenseur;

  constructor(id, titre, description, prix, adresse, etage, ascenseur) {
    super(id, titre, description, prix, adresse);
    this.#etage = etage;
    this.#ascenseur = ascenseur;
  }

  getEtage() {
    return this.#etage;
  }

  hasAscenseur() {
    return this.#ascenseur;
  }
}

class Maison extends BienImmobilier {
  #jardin;
  #garage;

  constructor(id, titre, description, prix, adresse, jardin, garage) {
    super(id, titre, description, prix, adresse);
    this.#jardin = jardin;
    this.#garage = garage;
  }

  getJardin() {
    return this.#jardin;
  }

  getGarage() {
    return this.#garage;
  }
}

class Terrain extends BienImmobilier {
  #superficie;

  constructor(id, titre, description, prix, adresse, superficie) {
    super(id, titre, description, prix, adresse);
    this.#superficie = superficie;
  }

  getSuperficie() {
    return this.#superficie;
  }
}

// Affichage conditionnelle type de bien (Formulaire)
const typeBienSelect = document.getElementById("typeBien");

// Ajout d'un écouteur d'événements pour l'événement change
typeBienSelect.addEventListener("change", showOptions);

function showOptions() {
  let typeBien = document.getElementById("typeBien").value;
  let optionsAppartement = document.getElementById("optionsAppartement");
  let optionsMaison = document.getElementById("optionsMaison");
  let optionsTerrain = document.getElementById("optionsTerrain");

  // Masquer tous les champs d'abord
  optionsAppartement.classList.add("hidden");
  optionsMaison.classList.add("hidden");
  optionsTerrain.classList.add("hidden");

  // Afficher les champs correspondants au type de bien sélectionné
  if (typeBien === "appartement") {
    optionsAppartement.classList.remove("hidden");
  } else if (typeBien === "maison") {
    optionsMaison.classList.remove("hidden");
  } else if (typeBien === "terrain") {
    optionsTerrain.classList.remove("hidden");
  }
}

// Local storage, sauvegarde de données du formulaire
function sauvegarderDonnees(dataFormulaire) {
  localStorage.setItem("formulaire", JSON.stringify(dataFormulaire));
  alert("Données du formulaire sauvegardées avec succès !");
}

// Fonction pour récupérer les données du localStorage et les afficher
function recupererDonnees() {
  const donneesFormulaire = JSON.parse(localStorage.getItem("formulaire"));

  if (donneesFormulaire) {
    const titre = donneesFormulaire.titre;
    const description = donneesFormulaire.description;
    const prix = donneesFormulaire.prix;
    const adresse = donneesFormulaire.adresse;

    console.log("titre :", titre);
    console.log("description :", description);
    console.log("prix", prix);
    console.log("adresse", adresse);
  } else {
    console.log("Aucune donnée de formulaire trouvée dans le localStorage.");
  }
}