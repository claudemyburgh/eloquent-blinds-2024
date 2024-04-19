import "@/bootstrap"
import "@/web-components/mouse-spotlight"
import "vanilla-headless"
import "@/lib/dark-mode"
import { Splide } from "@splidejs/splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import "@splidejs/splide/css/core"
import "@/lib/search"

const elms = document.getElementsByClassName("marquee-ticker")
for (let i = 0; i < elms.length; i++) {
  // @ts-ignore
  new Splide(elms[i], {
    type: "loop",
    drag: "free",
    focus: "center",
    cloneStatus: true,
    arrows: false,
    gap: 50,
    start: 10,
    autoWidth: true,
    preloadPages: 20,
    direction: "ltr",
    // perPage: 3,
    autoScroll: {
      speed: 0.5,
    },
  }).mount({ AutoScroll })
}
