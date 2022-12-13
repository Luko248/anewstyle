export function initBeforeAfterSlider() {
    const baSlider = document.querySelector('#baSlider') as HTMLDivElement
    const baSliderInput = document.querySelector('input[type=range]')

     baSliderInput.addEventListener('input', (e) => {
        let input = e.target as HTMLInputElement
        baSlider.style.setProperty('--ba-position', `${input.value}%`);
    })
}   