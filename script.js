let langueEnCours = "français";
function langue() {
  // document.getElementById("choix").style.visibility = "visible";
}
function france() {
  langueEnCours = "français";
  console.log("langue = ", langueEnCours);
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("lesrecommendations").style.visibility = "visible";
  document.getElementById("lechalet").style.visibility = "visible";
  document.getElementById("lechalet").innerHTML = "Le chalet";
  document.getElementById("le_chalet").innerHTML = "Le chalet";
  document.getElementById("titre").innerHTML = "Le chalet des Courtys";
  document.getElementById("lesvisites").innerHTML = "Les visites";
  document.getElementById("lesspecialites").innerHTML = "Les spécialités";
  document.getElementById("recomme").innerHTML = "Recommendations";
  // document.getElementById("recommendations").innerHTML =
  // document.getElementById("swiper-wrapperhaut1").style.visibility = "visible";
}
function netherlands() {
  langueEnCours = "hollandais";
  console.log("langue = ", langueEnCours);
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("lesrecommendations").style.visibility = "visible";
  document.getElementById("lechalet").style.visibility = "visible";
  document.getElementById("lechalet").innerHTML = "Het chalet";
  document.getElementById("le_chalet").innerHTML = "Het chalet";
  document.getElementById("titre").innerHTML = "Het Courtys-chalet";
  document.getElementById("lesvisites").innerHTML = "Bezoeken";
  document.getElementById("lesspecialites").innerHTML = "De specialiteiten";
  document.getElementById("recomme").innerHTML = "Aanbevelingen";
  // document.getElementById("swiper-wrapperhaut1").style.visibility="visible" ;
}
function angleterre() {
  langueEnCours = "anglais";
  console.log("langue = ", langueEnCours);
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("lesrecommendations").style.visibility = "visible";
  document.getElementById("lechalet").style.visibility = "visible";
  document.getElementById("lechalet").innerHTML = "The chalet";
  document.getElementById("le_chalet").innerHTML = "The chalet";
  document.getElementById("titre").innerHTML = "The Courtys Chalet";
  document.getElementById("lesvisites").innerHTML = "The chalet";
  document.getElementById("lesspecialites").innerHTML = "The specialties";
  document.getElementById("recomme").innerHTML = "Recommendations";
  // document.getElementById("swiper-wrapperhaut1").style.visibility = "visible";
}
function chalet() {
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("swiperVisites").style.visibility = "hidden";
  document.getElementById("swiperWrapperhaut1").style.visibility = "visible";
  document.getElementById("le_chalet").style.visibility = "visible";
  document.getElementById("lesVisites").style.visibility = "hidden";
}
function visites() {
  document.getElementById("le_chalet").style.visibility = "hidden";
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("swiperVisites").style.visibility = "visible";
  document.getElementById("swiperWrapperhaut1").style.visibility = "hidden";
}
function recomme() {
  console.log("langue = ", langueEnCours);
  switch (langueEnCours) {
    case "français":
      document.getElementById("recommendations").style.visibility = "visible";
      document.getElementById("swiperWrapperhaut1").style.visibility = "hidden";
      document.getElementById("recommendations").innerHTML =
        "Bienvenue au chalet des Courtys. Anne-Laure et Ludovic vous acceuillent avec plaisir et vous souhaitent un agréable séjour.";
      break;
    case "anglais":
      document.getElementById("recommendations").style.visibility = "visible";
      document.getElementById("swiperWrapperhaut1").style.visibility = "hidden";
      document.getElementById("recommendations").innerHTML =
        "Welcome to the chalet des Courtys. Anne-Laure and Ludovic welcome you with pleasure and wish you a pleasant stay.";
      break;
    case "hollandais":
      document.getElementById("recommendations").style.visibility = "visible";
      document.getElementById("swiperWrapperhaut1").style.visibility = "hidden";
      document.getElementById("recommendations").innerHTML =
        "Welkom in het Courtys-chalet. Anne-Laure en Ludovic heten u met plezier welkom en wensen u veel plezier een aangenaam verblijf.";
      break;
  }
}

// const hautSwiper = new Swiper('.haut1', {

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     thumbs :{
//       swiper: basSwiper
//     }

//   });

// =================================================================
