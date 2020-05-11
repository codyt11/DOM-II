// Your code goes here
// mouseenter sign me up buttons get bigger!

const signUp = document.querySelectorAll('.btn')
console.log('signUp', signUp)

Array.from(signUp).map(signUp => 
signUp.addEventListener('mouseenter', (e) => {
  signUp.style.transform = "scale(1.2)"
  signUp.style.transition = "all 0.3s"
}))

Array.from(signUp).map(signUp => 
    signUp.addEventListener('mouseleave', (e) => {
      signUp.style.transform = "scale(1)"
    }))

//dblclick changes but img to vw bus!    
const bus = document.querySelector('.bus')
console.log('bus', bus)

bus.addEventListener('dblclick', (e) => {
    bus.src = "img/moreFunBus.jpg"
  })

  bus.addEventListener('click', (e) => {
    bus.src = "img/fun-bus.jpg"
  })

// wheel zoom on img
const images = document.querySelectorAll('img')
console.log('images', images)

Array.from(images).forEach(zoomed =>
zoomed.addEventListener('wheel', (e)=> {
    event.preventDefault();

    scale += event.deltaY * -0.001;
    // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  zoomed.style.transform = `scale(${scale})`;

  zoomed.style.zIndex = '-1'
}))

let scale =1;

//keydown changes background to purple

const key = document.querySelector('body')
console.log('key', key)

key.addEventListener('keydown', (e) => {
key.style.backgroundColor = 'purple'
})


// //drag/drop picks up image and drops it in place of other image / switches img
// const sImage = document.querySelectorAll('.content-section img')
// sImage.addEventListener('dragover', (e)=>{
//     preventDefault()
// })

// Array.from(sImage).forEach(drag =>
//     sImage.addEventListener('dragstart', (e) =>{
//     sImage.dataTransfer.setData("Image",target.sImage)
// }))

//load returns when page is loaded

window.addEventListener("load", (e) => {
    alert("The page is fully loaded!")
})