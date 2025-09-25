import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { Container2 } from "../interfaces/barba";

export function triggerHomeAnimations(container: HTMLElement) {
  const split = new SplitText(".fade-in");

  gsap.set(split.lines, { overflow: "hidden" });

  gsap
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
}
