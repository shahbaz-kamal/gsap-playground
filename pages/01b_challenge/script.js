import gsap from "gsap";

gsap.fromTo(
  ".card",
  { opacity: 0, scale: 0.8, y: 30 },
  { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power2.out" }
);

// Add pulsing glow effect
gsap.to(".card", {
  boxShadow: "0 0 40px rgba(79, 172, 254, 1)",
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
