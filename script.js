let conditionsFrancais = "<p>Bienvenue au chalet des Courtys Anne-Laure et Ludovic vous accueillent avec plaisir et vous souhaitent un agréable séjour. </p><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Provident magni hic, officiis eligendi iusto velit harum eius dolore enim, accusantium reprehenderit sed in. </p><p>  Quia fugiat provident repellendus cumque unde magni!</p>";

let conditionsHollandais = "<p>Welkom in het Courtys chalet Anne-Laure en Ludovic heten u met plezier welkom en wensen u een aangenaam verblijf. </p><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident magni hic, oficiis eligendi iusto velit harum eius dolore enim, accusantium reprehenderit sed in. </p><p> Quia fugiat provident repellendus cumque unde magni!</p>";

let langueEnCours = "français";
function langue() {
   document.getElementById("lesrecommendations").style.visibility = "visible";
}
function france() {
  langueEnCours = "français";
  // recommendations = conditionsFrancais;
  console.log("recommendations : ",conditionsFrancais);
  console.log("langue = ", langueEnCours);
  document.getElementById("titre").innerHTML = "Le chalet des Courtys";
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("recommendations").innerHTML = conditionsFrancais;
  document.getElementById("lesrecommendations").style.visibility = "visible";
  document.getElementById("lechalet").style.visibility = "visible";
  document.getElementById("lechalet").innerHTML = "Le chalet";
  document.getElementById("le_chalet").innerHTML = "Le chalet";
  document.getElementById("lesvisites").innerHTML = "Les visites";
  // document.getElementById("lesVisites").innerHTML = "Les sites à visiter";
  document.getElementById("lesspecialites").innerHTML = "Les spécialités";
  // document.getElementById("recomme").innerHTML = "Recommendations";
  // document.getElementById("recommendations").innerHTML =
  // document.getElementById("swiper-wrapperhaut1").style.visibility = "visible";
}
function netherlands() {
  langueEnCours = "hollandais";
  console.log("langue = ", langueEnCours);
  document.getElementById("titre").innerHTML = "Het Courtys-chalet";
   document.getElementById("recommendations").innerHTML = conditionsHollandais;
  document.getElementById("lesrecommendations").style.visibility = "visible";
  document.getElementById("lechalet").style.visibility = "visible";
  document.getElementById("lechalet").innerHTML = "Het chalet";
  document.getElementById("le_chalet").innerHTML = "Het chalet";
  document.getElementById("lesvisites").innerHTML = "Bezoeken";
  // document.getElementById("lesVisites").innerHTML = "Sites om te bezoeken";
  document.getElementById("lesspecialites").innerHTML = "De specialiteiten";
  // document.getElementById("recomme").innerHTML = "Aanbevelingen";
  // document.getElementById("swiper-wrapperhaut1").style.visibility="visible" ;
}
function angleterre() {
  langueEnCours = "anglais";
  console.log("langue = ", langueEnCours);
  document.getElementById("titre").innerHTML = "The Courtys Chalet";
  // document.getElementById("recommendations").style.visibility = "hidden";
  // document.getElementById("lesrecommendations").style.visibility = "visible";
  document.getElementById("lechalet").style.visibility = "visible";
  document.getElementById("lechalet").innerHTML = "The chalet";
  document.getElementById("le_chalet").innerHTML = "The chalet";
  document.getElementById("lesvisites").innerHTML = "The chalet";
  document.getElementById("lesspecialites").innerHTML = "The specialties";
  // document.getElementById("recomme").innerHTML = "Recommendations";
  // document.getElementById("swiper-wrapperhaut1").style.visibility = "visible";
}
function chalet() {
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("swiperVisites").style.visibility = "hidden";
  document.getElementById("swiperChalet").style.visibility = "visible";
  document.getElementById("trait").style.visibility = "visible";
  document.getElementById("swiperSpecialites").style.visibility = "hidden";
  document.getElementById("imageAccueil").style.visibility = "hidden";
  document.getElementById("lechalet").style.color = "red";
  document.getElementById("lesvisites").style.color = "black";
  document.getElementById("lesspecialites").style.color = "black";
  
  
}
function visites() {
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("le_chalet").style.visibility = "hidden";
  document.getElementById("swiperVisites").style.visibility = "visible";
  document.getElementById("swiperSpecialites").style.visibility = "hidden";
  document.getElementById("imageAccueil").style.visibility = "hidden";
  document.getElementById("swiperChalet").style.visibility = "hidden";
  document.getElementById("trait").style.visibility = "visible";
  document.getElementById("lesspecialites").style.color = "black";
  document.getElementById("lesvisites").style.color = "red";
  document.getElementById("lechalet").style.color = "black";
}
function specialites() {
  document.getElementById("recommendations").style.visibility = "hidden";
  document.getElementById("le_chalet").style.visibility = "hidden";
  document.getElementById("imageAccueil").style.visibility = "hidden";
  document.getElementById("swiperSpecialites").style.visibility = "visible";
  document.getElementById("swiperChalet").style.visibility = "hidden";
  document.getElementById("trait").style.visibility = "visible";
  document.getElementById("lesspecialites").style.color = "red";
  document.getElementById("lesvisites").style.color = "black";
  document.getElementById("lechalet").style.color = "black";
}

function Important() {
  document.getElementById("le_chalet").style.visibility = "hidden";
  // document.getElementById("lesVisites").style.visibility = "hidden";
  document.getElementById("swiperVisites").style.visibility = "hidden";
  document.getElementById("imageAccueil").style.visibility = "hidden";
  document.getElementById("swiperChalet").style.visibility = "hidden";
  document.getElementById("swiperSpecialites").style.visibility = "hidden";
  document.getElementById("lesvisites").style.color = "black";
  document.getElementById("lechalet").style.color = "black";
  console.log("langue = ", langueEnCours);
  document.getElementById("trait").style.visibility = "hidden";
  switch (langueEnCours) {
    case "français":
      document.getElementById("swiperChalet").style.visibility = "hidden";
      document.getElementById("le_chalet").style.visibility = "hidden";
      document.getElementById("recommendations").style.visibility = "visible";
      document.getElementById("recommendations").innerHTML =conditionsFrancais;
      break;
        case "hollandais":
          document.getElementById("swiperChalet").style.visibility = "hidden";
          document.getElementById("le_chalet").style.visibility = "hidden";
          document.getElementById("recommendations").style.visibility = "visible";
      document.getElementById("recommendations").innerHTML =conditionsHollandais;
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
