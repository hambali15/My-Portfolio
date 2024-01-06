import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();
import gsap from "gsap";
gsap.to("h1", {
    y: 100,
    duration: 2,
});
