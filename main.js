import './style.css'
import {gsap} from "gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import imagesLoaded from "imagesloaded";


Splitting();

const tl = gsap.timeline()

const showMainAnimations = ()=>{
  tl.to(".enter-btn",{
    duration: 1,
    opacity: 0
  })
  .to(".main-image__text__inner",{
    duration:1,
    y: "9rem"
  })
  .to(".main-image__inner",{
    duration:1,
    height: 0,
    onComplete: ()=>{
      document.querySelector(".main-image").style.display = "none";
      document.querySelector("#page").style.display = "block";
    }
  })
}

const showPageAnimations = () =>{
  tl.from(".thumb", {
    duration: 2,
    height:0,
  })
  .from(".section-1__main-text__inner",{
    duration:1,
    delay: 0.6,
    y:200,
    skewY: 7
  })
  .from(".section-1__main-text__desc__inner .word",{
    duration:1.2,
    delay:0.4,
    y:80,
    skewY: 7,
    stagger:0.4
  })
}

imagesLoaded( document.querySelector('body'), function() {
  const enterBtn = document.querySelector(".enter-btn");
  enterBtn.addEventListener("click", ()=>{
    showMainAnimations()
  showPageAnimations()
  })
});


// enterBtn.addEventListener("click", showMainAnimations());