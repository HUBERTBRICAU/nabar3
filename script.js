
function langue() {
   document.getElementById("choix").style.visibility="visible" ;
}
function netherlands(){
  document.getElementById("le_chalet").style.visibility="visible" ;
  document.getElementById("le_chalet").innerHTML="Het chalet" ;
  document.getElementById("titre").innerHTML="Het courtys-chalet" ;
  document.getElementById("recommendations").innerHTML="Welkom in het Courtys-chalet Anne-Laure en Ludovic heten u met plezier welkom en wensen u veel plezier een aangenaam verblijf." ;
  // document.getElementById("choix").style.visibility="hidden" ;
  document.getElementById("swiper-wrapperhaut1").style.visibility="visible" ;
}
function france(){
  document.getElementById("le_chalet").style.visibility="visible" ;
  document.getElementById("le_chalet").innerHTML="Le chalet" ;
  document.getElementById("titre").innerHTML="Le chalet des courtys" ;
  document.getElementById("recommendations").innerHTML="Bienvenue au chalet des courtys.Anne-Laure et Ludovic vous acceuillent avec plaisir et vous souhaitent un agréable séjour." ;
  // document.getElementById("choix").style.visibility="hidden" ;
  document.getElementById("swiper-wrapperhaut1").style.visibility="visible" ;
}
function angleterre(){
  document.getElementById("le_chalet").style.visibility="visible" ;
  document.getElementById("le_chalet").innerHTML="The chalet" ;
  document.getElementById("titre").innerHTML="The Courtys Chalet" ;
  document.getElementById("titre").innerHTML="The Courtys Chalet" ;
  document.getElementById("recommendations").innerHTML="Welcome to the chalet des courtys Anne-Laure and Ludovic welcome you with pleasure and wish you a pleasant stay.";
  // document.getElementById("choix").style.visibility="hidden" ;
  document.getElementById("swiper-wrapperhaut1").style.visibility="visible" ;
}


const hautSwiper = new Swiper('.haut1', {
    // Optional parameters
    
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs :{
      swiper: basSwiper
    }
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  // =================================================================



  
