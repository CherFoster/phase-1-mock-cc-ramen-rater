document.addEventListener('DOMContentLoaded', () => {
    renderMenu()

})

const menu = document.getElementById('ramen-menu')
const image = document
function renderMenu(){
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => console.log(data))
}