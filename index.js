function btnCard1() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("readMore");
    var btnIcon = document.getElementById("btnIcon1");

    if (dots.style.display === "none") {

      dots.style.display = "inline";
     btnIcon.className="fa fa-angle-up";
     
      moreText.style.display = "none";
    }
    else {
      dots.style.display = "none";
    
      btnIcon.className="fa fa-angle-down";
      moreText.style.display = "inline"; 
      
    }
  }
  function btnCard2(){
    var btnIcon=document.getElementById("btnIcon2");
    btnIcon.classList.toggle("fa-angle-down")
    
  }
  function btnCard3(){
    var btnIcon=document.getElementById("btnIcon3");
    btnIcon.classList.toggle("fa-angle-down")
    
  }
  function btnCard4(){
    var btnIcon=document.getElementById("btnIcon4");
    btnIcon.classList.toggle("fa-angle-down")
    
  }
  function btnCard5(){
    var btnIcon=document.getElementById("btnIcon5");
    btnIcon.classList.toggle("fa-angle-down")
    
  }
  function btnCard6(){
    var btnIcon=document.getElementById("btnIcon6");
    btnIcon.classList.toggle("fa-angle-down")
    
  }
  function fiIcon(){
    var btnIcon=document.getElementById("fiIcon");
    btnIcon.classList.toggle("fa-angle-right");
  }
var myVideo=document.getElementById("video1")
  function playPause(){
    if(myVideo.paused){
      myVideo.play();
    }
    else{
      myVideo.pause();
    }
  }
  function makeBig(){
    myVideo.width=560;
  }
  function makeSmall(){
    myVideo.width=160;
  }
  function makeNormal(){
    myVideo.width=180;
  }
  
  function toggleMenu(){
    var x=document.getElementById("menuItems");
    if(x.style.display==="none"){
      x.style.display="block";
    }
    else{
      x.style.display="none";
    }
  }