import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { barsOutAnimation } from "./global.animations";

export function onceHomeAnimation(container: HTMLElement) {
  return barsOutAnimation().delay(1).add(homeContentAnimations(container));
}

export const homeContentAnimations = (next: HTMLElement) => {
  const fadeIn = next.querySelector(".fade-in");
  const split = new SplitText(fadeIn);

  gsap.set(split.lines, { overflow: "hidden" });

  gsap.set(".cover-image", {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%);",
  });

  const tl = gsap
    .timeline()
    .to(".cover-image", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      duration: 1,
    })
    .from(
      split.words,
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.7,
        ease: "power4.inOut",
        stagger: 0.05,
      },
      "-=.8"
    );

  return tl;
};
