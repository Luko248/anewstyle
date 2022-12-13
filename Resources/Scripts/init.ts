import { initBeforeAfterSlider } from "./beforeAfterSlider"
import { detectAvifSupport } from "./detectAvifSupport"
import { initFancyBox } from "./fancyBox"
import { initSplide} from "./splitejs"

document.addEventListener("DOMContentLoaded", () => {
    detectAvifSupport()
    initSplide()
    initBeforeAfterSlider() 
    initFancyBox()
  })