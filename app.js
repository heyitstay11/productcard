const colors = document.querySelectorAll('.product-colors span')
const price = document.querySelector('.product-price')
const pbutton = document.querySelector('.product-button')
const pic = document.querySelector('.product-pic')
console.log(colors)
console.log(document.body.style)

colors.forEach( color => {
    color.addEventListener('click',changeContent)
})

function changeContent(e){
    colors.forEach( color => {
        color.classList.remove("active")
    })
    this.classList.add("active")
    console.log('active')
    console.log(e)
    document.body.style.backgroundColor = this.getAttribute('data-color')
    price.style.color = this.getAttribute('data-color')
    pbutton.style.color = this.getAttribute('data-color')
    pic.style.backgroundImage = this.getAttribute('data-pic')
    
}