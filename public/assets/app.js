
// var leftItem = document.getElementById('item0'),
// rightItem = document.getElementById('item1');

// ;(function(){

// var throttle = function(type, name, obj){
// var obj = obj || window;
// var running = false;
// var func = function(){
//   if (running){ return; }
//   running = true;
//   requestAnimationFrame(function(){
//     obj.dispatchEvent(new CustomEvent(name));
//     running = false;
//   });
// };
// obj.addEventListener(type, func);
// };

// throttle("scroll", "optimizedScroll");
// })();

// window.addEventListener("optimizedScroll", function(){

// leftItem.style.transform = "rotate(-" + window.pageYOffset + "deg)";
// rightItem.style.transform = "rotate(" + window.pageYOffset + "deg)";
// })


// const zoomElement = document.querySelector(".workspace");
// let zoom = 1;
// const ZOOM_SPEED = 0.001;

// document.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
//   } else {
//     zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
//   }
// });
 

// var prevScroll = 0;
    
// $(window).on("scroll", function () {
//        var $this = $(this),
//            $statusText = $("p > span"),
//            currScroll = $this.scrollTop();
 
//        if (currScroll > prevScroll){
//           $statusText.text("down");
//        } else {
//           $statusText.text("up");
//        }
//        prevScroll = currScroll;
// });

gsap.to('.hscroll', {
  xPercent: +250,
  ease: "none",
  scrollTrigger: {
    trigger: ".hscroll",
    start: "top center",
    end: "bottom top",
    scrub: true
  }
})


gsap.to('.hscroll2', {
  xPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".hscroll2",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
})


gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
tl.to(".mid", {
    scrollTrigger: {
        trigger: ".mid",
        // markers: true,
        start: "60% center",
        end: "70% center",
        scrub: true,
    },
    scale:1,
});
tl.to(".mid", {
    scrollTrigger: {
        trigger: ".mid",
        // markers: true,
        start: "70% center",
        end: "80% center",
        scrub: true,
    },
    scale:2,
    immediateRender: false
});