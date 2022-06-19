

// back scroll----------------------------------------------------------------
history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
};









gsap.to('.hscroll', {
  xPercent: -250,
  ease: "none",
  scrollTrigger: {
    trigger: ".hscroll",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
})


// (function () {
//   var scroll = new LocomotiveScroll();
// })();

// gsap.to('.hscroll2', {
//   xPercent: -5,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hscroll2",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true
//   }
// })





// $(window).scroll(function(){
//   $(".div.hscroll3 > div").css("opacity", 1 - $(window).scrollTop() / 250);
// });
// gsap.to('.mid', {
//   xPercent: -150,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".mid",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//     scale:1,
//   }
// })



// gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline();
// tl.to(".mid", {
//     scrollTrigger: {
//         trigger: ".mid",
//         markers: true,
//         start: "top 20%",
//         end: "70% center",
//         scrub: true,
//     },
//     scale:1,
// });
// tl.to(".mid", {
//     scrollTrigger: {
//         trigger: ".mid",
//         markers: true,
//         start: "0% bottom",
//         end: "80% center",
//         scrub: true,
//     },
//     scale:2,
//     immediateRender: false
// });



// gsap.to('.hscroll3 > div > img', {
//   xPercent: -1,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hscroll3",
//     start: "top center",
//     end: "bottom top",
//     scale: 0.2,
//     scrub: true
//   }
// })












// $(window).scroll(function(){
//   $(".hscroll3 > div").css("opacity", 1 - $(window).scrollTop() / 250);
// });

console.log("hey im here")











