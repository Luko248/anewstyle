import { detectAvifSupport } from "./detectAvifSupport"
import { initFancyBox } from "./fancyBox"
import { initSplide} from "./splitejs"

document.addEventListener("DOMContentLoaded", function () {
    initSplide()
    detectAvifSupport()
    initFancyBox()
  })