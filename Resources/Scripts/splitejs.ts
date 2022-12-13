import { Splide } from "@splidejs/splide";

export function initSplide(){
    var splide = new Splide( '.splide', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      });
      
      splide.mount();
}