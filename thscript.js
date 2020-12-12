/* clock */
var update_loop = setInterval(Main, 1000);
Main();
function Main(){
  var time = new Date();

    var hours = (time.getHours() < 10? "0" : "") + time.getHours();
    var minutes = (time.getMinutes() < 10? "0" : "") + time.getMinutes();
    var seconds = (time.getSeconds() < 10? "0" : "") + time.getSeconds();

  document.getElementById("clock").innerHTML = seconds + ":" + minutes + ":" + hours;
}

/*00Root Img Animation*/
var picPaths1 = ['images/Title page/close to you.jpg','images/Title page/jay.jpg','images/Title Page/caravaggio.jpg','images/Title page/beast_skull.jpg'];
var picPaths2 = ['images/Title page/hell8-half.jpg','images/Title page/barbie.jpg','images/Title Page/hell1-half.jpg','images/Title page/return.jpg'];
var picPaths3 = ['images/Title page/4-half.jpg','images/Title page/beast_skull.jpg','images/Title Page/close to you.jpg','images/Title page/return.jpg'];
var picPaths4 = ['images/Title page/caravaggio.jpg','images/Title page/barbie.jpg','images/Title Page/jay.jpg','images/Title page/hell4-half.jpg'];
var picPaths5 = ['images/Title page/hell4-half.jpg','images/Title page/hell1-half.jpg','images/Title Page/hell8-half.jpg','images/Title page/4-half.jpg'];
  var curPic1 = -1;
  var curPic2 = -1;
  var curPic3 = -1;
  var curPic4 = -1;
  var curPic5 = -1;

  var img1 = new Array();
  for(i=0; i < picPaths1.length; i++) {
    img1[i] = new Image();
    img1[i].src = picPaths1[i];
  } 
    
  var img2 = new Array();
  for(i=0; i < picPaths2.length; i++) {
    img2[i] = new Image();
    img2[i].src = picPaths2[i];
  }

  var img3 = new Array();  
  for(i=0; i < picPaths3.length; i++) {
    img3[i] = new Image();
    img3[i].src = picPaths3[i];
  }

  var img4 = new Array();    
  for(i=0; i < picPaths4.length; i++) {
    img4[i] = new Image();
    img4[i].src = picPaths4[i];
  }

  var img5 = new Array();  
  for(i=0; i < picPaths5.length; i++) {
    img5[i] = new Image();
    img5[i].src = picPaths5[i];   
  }

  function swapImage1() {
    curPic1 = (++curPic1 > picPaths1.length-1)? 0 : curPic1;
    imgCont1.src = img1[curPic1].src;
  }

  function swapImage2() {
    curPic2 = (++curPic2 > picPaths2.length-1)? 0 : curPic2;
    imgCont2.src = img2[curPic2].src;
  }

  function swapImage3() {
    curPic3 = (++curPic3 > picPaths3.length-1)? 0 : curPic3;
    imgCont3.src = img3[curPic3].src;
  }

  function swapImage4() {
    curPic4 = (++curPic4 > picPaths4.length-1)? 0 : curPic4;
    imgCont4.src = img4[curPic4].src;
  }

  function swapImage5() {
    curPic5 = (++curPic5 > picPaths5.length-1)? 0 : curPic5;
    imgCont5.src = img5[curPic5].src;
  }

  window.onload=function() {
    imgCont1 = document.getElementById("imgBanner");
    swapImage1();
    setInterval(swapImage1,16000);
    imgCont2 = document.getElementById("imgBanner2");
    swapImage2();
    setInterval(swapImage2,8000);
    imgCont3 = document.getElementById("imgBanner3");
    swapImage3();
    setInterval(swapImage3,4000);
    imgCont4 = document.getElementById("imgBanner4");
    swapImage4();
    setInterval(swapImage4,2000);
    imgCont5 = document.getElementById("imgBanner5");
    swapImage5();
    setInterval(swapImage5,1000);
  }

/* lightbox */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("imgtext");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}