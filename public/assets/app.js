
class Slider {
  constructor(slider) {
    this.slider = slider;
    this.mouseDown = false;
    this.slider.addEventListener('mousedown', e => this.handleMouseDown(e));
    this.slider.addEventListener('mousemove', e => this.handleMouseMove(e));
    this.boundMouseUp = this.handleMouseUp.bind(this); // enables removing of window event listener
    
    this.isSmoothScrollSupported = 'scrollBehavior' in slider.style;
    
    this.frames = [...slider.querySelectorAll('.item')];
    this.currentFrame = frames[0];
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio === 1) this.currentFrame = entry.target;
      })
    }, {root: slider, rootMargin: '0px', threshold: 1.0})
    this.frames.forEach(mf => this.observer.observe(mf));
  }
  
  handleMouseDown(e) {
    e.preventDefault();
    this.mouseDown = true;
    window.addEventListener('mouseup', this.boundMouseUp);
  }
  
  handleMouseUp(e) {
    this.mouseDown = false;
    window.removeEventListener('mouseup', this.boundMouseUp);
  }
  
    handleMouseMove(e) {
    /* If the user is holding down the mouse and dragging the cursor, scroll inside of this.slider */
    if (this.mouseDown && e.movementX) {
      const newFrame = e.movementX > 0 ? this.currentFrame.previousElementSibling : this.currentFrame.nextElementSibling;
      if (this.isSmoothScrollSupported) {
        (newFrame || this.currentFrame).scrollIntoView({
            inline: 'center',
            behavior: 'smooth'
          });
      } else {
        const movmt = e.movementX * -1;
        this.slider.scrollBy(movmt, 0);
      }
    }
  }
}

new Slider(document.querySelector('#slider-1'));


// setTimeout(function() {
//   $('.loaderwrapper').hide();
//   $('.editorialimages').fadeIn('fast');
// }, 2000);

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
  xPercent: -150,
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


gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".hscroll3 > div");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});









$(window).scroll(function(){
  $(".hscroll3 > div").css("opacity", 1 - $(window).scrollTop() / 250);
});

console.log("hey im here")









