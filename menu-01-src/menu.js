let currentSection = ''
let menuOpen = false
const container = document.querySelector('.container')
const modalMask = document.getElementById("modal-mask")
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("close-menu-btn");

const closeMenu = () => {
    modalMask.style.display = "none"
    modal.style.display = "none"
}

container.addEventListener('click', e => {
    if (e.target.matches('.open-menu') && !menuOpen){
        // console.log(e.target.dataset.section)
        currentSection = e.target.dataset.section
        modalMask.style.display = "block"
        modal.style.display = "block"
    }
    if (e.target.matches('#close-menu-btn')){
        closeMenu()
    }
    console.log(currentSection)
})
document.addEventListener('keydown', e => {
    // console.log(e.key)
    e.key == 'Escape'? closeMenu() : null
});
