
function langue() {
   document.getElementById("choix").style.visibility="visible" ;
}
function netherlands(){
  document.getElementById("le_chalet").style.visibility="visible" ;
  document.getElementById("le_chalet").innerHTML="Het chalet" ;
  document.getElementById("titre").innerHTML="Het courtys-chalet" ;
  document.getElementById("choix").style.visibility="hidden" ;
  document.getElementById("swiper-wrapperhaut1").style.visibility="visible" ;
}
function france(){
  document.getElementById("le_chalet").style.visibility="visible" ;
  document.getElementById("le_chalet").innerHTML="Le chalet" ;
  document.getElementById("titre").innerHTML="Le chalet des courtys" ;
  document.getElementById("choix").style.visibility="hidden" ;
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



  
