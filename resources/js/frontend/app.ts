import "vanilla-headless"
import "@/bootstrap"
import "@/web-components/mouse-spotlight"
import "@/lib/dark-mode"
import { Splide } from "@splidejs/splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import "@splidejs/splide/css/core"
import "@/lib/search"
import "@/frontend/react-form"
import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"

import.meta.glob(["../../img/**/*.{webp,png,svg,jpeg,jpg}"])

const elms = document.getElementsByClassName("marquee-ticker")
if (elms.length > 0) {
  for (let i = 0; i < elms.length; i++) {
    // @ts-ignore
    new Splide(elms[i], {
      type: "loop",
      drag: "free",
      focus: "center",
      cloneStatus: true,
      pagination: false,
      arrows: false,
      gap: 50,
      start: 10,
      autoWidth: true,
      preloadPages: 15,
      direction: "ltr",
      isNavigation: false,
      autoScroll: {
        speed: 1,
      },
    }).mount({ AutoScroll })
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelectorAll("#image-carousel, #thumbnail-carousel").length) return

  const main = new Splide("#image-carousel", {
    type: "slide",
    rewind: true,
    pagination: true,
    arrows: false,
    lazyLoad: "nearby",
    gap: 10,
    speed: 1000,
  })

  const thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 140,
    // fixedHeight: 120,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    arrows: true,
    speed: 1000,
    lazyLoad: "nearby",
  })

  main.sync(thumbnails)
  main.mount()
  thumbnails.mount()
})

const lightbox_gallery = document.querySelectorAll("[data-lightbox-gallery]")
if (lightbox_gallery.length) {
  for (let i = 0; i < lightbox_gallery.length; i++) {
    const lightbox = new PhotoSwipeLightbox({
      //@ts-expect-error
      gallery: lightbox_gallery[i],
      children: "a",
      initialZoomLevel: "fit",
      secondaryZoomLevel: "fill",
      showHideAnimationType: "zoom",
      showAnimationDuration: 300,
      hideAnimationDuration: 300,
      maxZoomLevel: 6,
      bgOpacity: 0.85,
      wheelToZoom: true,
      pinchToClose: true,
      pswpModule: () => import("photoswipe"),
    })
    lightbox.on("uiRegister", function () {
      if (lightbox.pswp && lightbox.pswp.ui) {
        lightbox.pswp.ui.registerElement({
          name: "custom-caption",
          order: 9,
          isButton: false,
          appendTo: "root",
          html: "Caption text",
          onInit: (el, pswp) => {
            // @ts-ignore
            lightbox.pswp.on("change", () => {
              //@ts-expect-error
              const currSlideElement = lightbox.pswp.currSlide.data.element
              let captionHTML = ""
              if (currSlideElement) {
                const hiddenCaption = currSlideElement.querySelector(".hidden-caption-content")
                if (hiddenCaption) {
                  // get caption from element with class hidden-caption-content
                  captionHTML = hiddenCaption.innerHTML
                } else {
                  // get caption from alt attribute
                  //@ts-expect-error
                  captionHTML = currSlideElement?.querySelector("img")?.getAttribute("alt")
                }
              }
              el.innerHTML = captionHTML || ""
            })
          },
        })
      }
    })

    lightbox.init()
  }
}
