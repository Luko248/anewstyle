import { detectAvifSupport } from "./detectAvifSupport"
import { initFancyBox } from "./fancyBox"

document.addEventListener("DOMContentLoaded", function () {
    console.log('hello from anewstyle')
    detectAvifSupport()
    initFancyBox()
  })