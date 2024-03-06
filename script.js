// const form = document.querySelector('form');


// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "username",
//         Password : "password",
//         To : 'them@website.com',
//         From : "you@isp.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }


// clicking none navigation



// responsive nagigation

var bar=document.querySelector(".bar");
var resnav=document.querySelector(".res-nav")

function changemenu(){
  bar.classList.toggle("ri-menu-line");
  bar.classList.toggle("ri-close-line");
  resnav.classList.toggle("show-nav");


}





// header dark and light theme
var ichange=document.querySelector(".i-change");

var blur1=document.querySelector("#blur-1");
var blur2=document.querySelector("#blur-2");
var blur3=document.querySelector("#blur-3");
var blur4=document.querySelector("#blur-4");
var blur5=document.querySelector("#blur-5");
var blur6=document.querySelector("#blur-6");



 
function dark () {
  document.body.classList.toggle("dark-theme");
  ichange.classList.toggle("ri-moon-line");
  ichange.classList.toggle("ri-sun-line");

  blur1.classList.toggle("blur");
  blur2.classList.toggle("blur");
  blur3.classList.toggle("blur");
  blur4.classList.toggle("blur");
  blur5.classList.toggle("blur");
  blur6.classList.toggle("blur");





}


// about read more
 var moretext=document.querySelector(".more-text");
 var aboutbtn=document.querySelector(".about-btn");

var d=0;

function abc() {
 
  moretext.classList.toggle('more-text');
  
  if(aboutbtn.innerText ==='Read More....'){
    aboutbtn.innerText='Read Less';
  }
  else{
    aboutbtn.innerText='Read More....';
  };

  
}
console.log(ichange);


// active menu 
  
$(window).ready(function () {
  $(document).scroll(function () {
      y = $(window).scrollTop();



      if (y >= 0 && y <= 572) {

        $("#home-menu").css("color", "var(--orange)")
        $("#about-menu").css("color", "var(--black)")
        $("#experience-menu").css("color", "var(--black)")
        $("#project-menu").css("color", "var(--black)")
        $("#contact-menu").css("color", "var(--black)")



      }

      else if (y >= 572 && y <= 1350) {

        $("#home-menu").css("color", "var(--black)")
        $("#about-menu").css("color", "var(--orange)")
        $("#experience-menu").css("color", "var(--black)")
        $("#project-menu").css("color", "var(--black)")
        $("#contact-menu").css("color", "var(--black)")


      }

      else if (y >= 1350 && y <= 2050) {
          $("#home-menu").css("color", "var(--black)")
          $("#about-menu").css("color", "var(--black)")
          $("#experience-menu").css("color", "var(--orange)")

          $("#project-menu").css("color", "var(--black)")
          $("#contact-menu").css("color", "var(--black)")

      }

      else if (y >= 2050 && y <= 2700) {
        $("#home-menu").css("color", "var(--black)")
        $("#about-menu").css("color", "var(--black)")
        $("#experience-menu").css("color", "var(--black)")
        $("#project-menu").css("color", "var(--orange)")
        $("#contact-menu").css("color", "var(--black)")

      }

      else if (y >= 2700 && y <= 3800) {
        $("#home-menu").css("color", "var(--black)")
        $("#about-menu").css("color", "var(--black)")
        $("#experience-menu").css("color", "var(--black)")
        $("#project-menu").css("color", "var(--black)")
        $("#contact-menu").css("color", "var(--orange)")

      }
      if (y >= 572 ) {
        $("#home-menu").removeClass("active")


      }
      
      if (y == 0) {
        $("#home-menu").css("color", "var(--orange)")
        $("#about-menu").css("color", "var(--black)")
        $("#experience-menu").css("color", "var(--black)")
        $("#project-menu").css("color", "var(--black)")
        $("#contact-menu").css("color", "var(--black)")

      }

      console.log(y);
  });

});


