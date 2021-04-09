document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('ul.sm-show').style.display = "flex"
    document.querySelector('p.sm-show').style.display = "block"
    document.querySelector('menu').style.display = "none"

})

document.querySelector('p.sm-show').addEventListener('click', () => {
    document.querySelector('ul.sm-show').style.display = "none"
    document.querySelector('p.sm-show').style.display = "none"
})