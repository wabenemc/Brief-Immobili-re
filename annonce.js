document.addEventListener("DOMContentLoaded", function () {
    afficherAnnonces();
  });

  function afficherAnnonces() {
    const annoncesContainer = document.getElementById("annonces");
    annoncesContainer.innerHTML = ""; // Clear existing content

    // Récupérer les données du localStorage
    const formData = JSON.parse(localStorage.getItem("formulaire"));

    if (formData) {
      const divAnnonce = document.createElement("div");
      divAnnonce.classList.add("annonce");

      let contenuAnnonce = "<p>Titre: " + formData.titre + "</p>";
      contenuAnnonce += "<p>Description: " + formData.description + "</p>";
      contenuAnnonce += "<p>Prix: " + formData.prix + "</p>";
      contenuAnnonce += "<p>Adresse: " + formData.adresse + "</p>";
      contenuAnnonce += "<p>Type de bien: " + formData.typeBien + "</p>";

      divAnnonce.innerHTML = contenuAnnonce;
      annoncesContainer.appendChild(divAnnonce);
    } else {
      annoncesContainer.innerHTML = "<p>Aucune annonce trouvée.</p>";
    }
  }