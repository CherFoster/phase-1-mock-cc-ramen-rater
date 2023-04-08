// document.addEventListener('DOMContentLoaded', () => {
//     renderMenu()

// })
const ramenAPI = 'http://localhost:3000/ramens';
const ramenMenuDiv = el('ramen-menu');

el('new-ramen').addEventListener('submit', newRamenHandler)

// GET request
fetch(ramenAPI)
    .then(resp => resp.json())
    .then(renderRamens)

// Renders each ramen to page
function renderRamens(ramens){
    ramens.forEach(renderOneRamen);
}

// Creates ramen img on page
function renderOneRamen(ramen){
    const ramenImageElement = document.createElement('img')
    ramenImageElement.src = ramen.image
    ramenMenuDiv.append(ramenImageElement);

    // click event to bring ramen image clicked on to the center
    ramenImageElement.addEventListener('click', () => ramenClickHandler(ramen))
}

// function that adds the ramen image to the center
function ramenClickHandler(ramen){
    el('detail-image').src = ramen.image;
    el('detail-name').textContent = ramen.name;
    el('detail-restaurant').textContent = ramen.restaurant
    el('rating-display').textContent = ramen.rating
    el('comment-display').textContent = ramen.comment
}

// gets elements by id in a function to shorten code
function el(id){
    return document.getElementById(id);
}

// creates new ramen after submitting form
function newRamenHandler(e){
    e.preventDefault();

    const newRamen = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value
    };
    renderRamens(newRamen);;
    e.target.reset()
}