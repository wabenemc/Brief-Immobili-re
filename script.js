const formulaire = document.getElementById("annonceForm");

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

  Jardin() {
    return this.#jardin;
  }

  Garage() {
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

// Exemple d'utilisation
let appartement1 = new Appartement(1, "Bel appartement", "Spacieux appartement en centre-ville", 200000, "123 Rue Principale", 2, true);
let maison1 = new Maison(2, "Belle maison", "Grande maison avec jardin", 350000, "456 Avenue Royale", true, true);
let terrain1 = new Terrain(3, "Grand terrain", "Terrain avec vue panoramique", 100000, "789 Chemin Champêtre", 1000);

console.log(appartement1.getTitre());
console.log(maison1.getDescription());
console.log(terrain1.getPrix());

// Local storage, sauvergarde de donne du formulaire

if (localStorage.length === 0) {
  console.log("Le localStorage est vide.");
} else {
  console.log("Le localStorage n'est pas vide.");
}

// Fonction pour sauvegarder les données du formulaire dans le localStorage
function sauvegarderDonnees() {
  const formTitre = document.getElementById("titre").value;
  const formDescription = document.getElementById("description").value;
  const formPrix = document.getElementById('prix').value;
  const formAdresse = document.getElementById('adresse').value;

  // Création d'un objet contenant les données du formulaire
  const donneesFormulaire = {
    titre: titre,
    description: description,
    prix: prix,
    adresse: adresse,
  };

  // Stockage des données du formulaire dans le localStorage
  localStorage.setItem("formulaire", JSON.stringify(donneesFormulaire));

  alert("Données du formulaire sauvegardées avec succès !");
}

// Fonction pour récupérer les données du localStorage et les afficher
function recupererDonnees() {
  const donneesFormulaire = JSON.parse(localStorage.getItem("donneesFormulaire"));

  if (donneesFormulaire) {
    const titre = donneesFormulaire.titre;
    const description = donneesFormulaire.description;
    const prix = donneesFormulaire.prix;
    const adresse = donneesFormulaire.adesse;

    console.log("titre :", titre);
    console.log("description :", description);
    console.log("prix", prix);
    console.log("adresse", adresse);

  } else {
    console.log("Aucune donnée de formulaire trouvée dans le localStorage.");
  }
}

// Appel de la fonction pour récupérer les données du localStorage
recupererDonnees();



 // Création d'un objet représentant l'annonce
 const annonce = {
    titre: titre,
    description: description,
    prix: prix,
    adresse: adresse,
    typeBien: typeBien
  };

  // Ajout de l'annonce à la liste
  ajouterAnnonce(annonce);

  // Effacer le formulaire après soumission
  document.getElementById("annonceForm").reset();

// Fonction pour ajouter une annonce à la liste
function ajouterAnnonce(annonce) {
  // Création d'un nouvel élément div pour représenter l'annonce
  var divAnnonce = document.createElement("div");
  divAnnonce.classList.add("annonce");

  // Construction du contenu de l'annonce
  let contenuAnnonce = "<p>" + annonce.titre + "</p>";
  contenuAnnonce += "<p>Description: " + annonce.description + "</p>";
  contenuAnnonce += "<p>Prix: " + annonce.prix + "</p>";
  contenuAnnonce += "<p>Adresse: " + annonce.adresse + "</p>";
  contenuAnnonce += "<p>Type de bien: " + annonce.typeBien + "</p>";

  // Ajout du contenu à l'élément div
  divAnnonce.innerHTML = contenuAnnonce;

  // Ajout de l'annonce à la liste d'annonces
  document.getElementById("annonces").appendChild(divAnnonce);
}