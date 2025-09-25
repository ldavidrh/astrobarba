import gsap from "gsap";

/**
 * .page-transition-container is a element outside of barba container space
 * hence is never remove or added when transition from pages so theres no need
 * to have a reference to next or current DOM being replaced
 */

export const barsInAnimation = () => {
  const bars = document.querySelectorAll(".page-transition-container > .bar");

  if (bars.length <= 0) {
    throw new Error("No bars detected");
  }
  gsap.set(bars, { scaleY: 0, transformOrigin: "bottom center" });

  // Animate in
  const tl = gsap.timeline().to(bars, {
    scaleY: 1,
    stagger: 0.1,
    duration: 0.2,
    ease: "power4.inOut",
  });

  return tl;
};

export const barsOutAnimation = () => {
  const bars = document.querySelectorAll(".page-transition-container > .bar");

  if (bars.length <= 0) {
    throw new Error("No bars detected");
  }
  gsap.set(bars, { scaleY: 1, transformOrigin: "bottom center" });

  // Animate in
  const tl = gsap.timeline().to(bars, {
    scaleY: 0,
    stagger: 0.1,
    duration: 0.2,
    ease: "power4.inOut",
  });

  return tl;
};
