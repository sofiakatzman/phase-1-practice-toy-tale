let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  getLoggedToys()
});

const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let divCollect = document.querySelector('#toy-collection')

//connects to the server and returns db of toys
function getLoggedToys(){
  const toyServer = ("http://localhost:3000/toys")
  fetch(toyServer)
  .then((response) => response.json())
  .then((data) =>  renderCards(data))}

//renders cards for all toys in the db  
function renderCards(toyData) {
toyData.forEach(toy => {
  //creates heading element
  let h2 = document.createElement('h2')
  h2.innerText = toy.name

  //creates image element  
  let img = document.createElement('img')
  img.setAttribute('src', toy.image)

  //creates p element that holds likes
  img.setAttribute('class', 'toy-avatar')
  let p = document.createElement('p')
  p.innerText = `${toy.likes} likes`

  //creates like button ++ need to add event listener
  let btn = document.createElement('button')
  btn.setAttribute('class', 'like-btn')
  btn.setAttribute('id', toy.id)
  btn.innerText = "like"

  //puts together all created elements to one DOM element = character card
  let divCard = document.createElement('div')
  divCard.setAttribute('class', 'card')
  divCard.append(h2, img, p, btn)
  divCollect.append(divCard)
})

}

// button event listener probable code : 
// btn.addEventListener('click', (e) => {
//   console.log(e.target.dataset);
//   likes(e) 
// })


//stopping here for now == need to add form event listener for submit that will send data to server and update db 
//need to finalize event listener for like button that will ++ and send server request with updated like count 



const addingNewCharacter   