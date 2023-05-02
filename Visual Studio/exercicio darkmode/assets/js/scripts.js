function changeMode(){
    darkmode()
}
function darkmode(){
    button.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    h1.classList == 'dark-mode' ? h1.textContent = 'Dark Mode ON' : h1.textContent = 'Dark Mode OFF'
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}
const button = document.querySelector('#mode-selector')
const h1 = document.querySelector('#page-title')
const body = document.querySelector('body')
const footer = document.querySelector('footer')

    button.addEventListener('click', darkmode)