import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  duration: 1,
  background: "#ff61f61",
  borderRadius: "50%",
  ease: "power1.inOut ",
  repeat: -1,
  yoyo: true,
  repeatDelay:1
});
