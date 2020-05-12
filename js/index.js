// Your code goes here
// mouseenter sign me up buttons get bigger!
//1
const signUp = document.querySelectorAll('.btn')
console.log('signUp', signUp)

Array.from(signUp).map(signUp => 
signUp.addEventListener('mouseenter', (e) => {
  signUp.style.transform = "scale(1.2)"
  signUp.style.transition = "all 0.3s"
}))
//2
Array.from(signUp).map(signUp => 
    signUp.addEventListener('mouseleave', (e) => {
      signUp.style.transform = "scale(1)"
    }))

//3
    //dblclick changes but img to vw bus!    
const bus = document.querySelector('.bus')
console.log('bus', bus)

bus.addEventListener('dblclick', (e) => {
    bus.src = "img/moreFunBus.jpg"
  })
//4
  bus.addEventListener('click', (e) => {
    bus.src = "img/fun-bus.jpg"
  })
//5
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

//6
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
//7
window.addEventListener("load", (e) => {
    alert("The page is fully loaded!")
})

const nav = document.querySelectorAll('.nav-link')
console.log('nav', nav)

Array.from(nav).forEach(nav =>
nav.addEventListener('focus', (e) =>{
  nav.style.backgroundColor = 'green';
  nav.style.border = '1px solid black';
  nav.style.padding = "3px";
  nav.style.borderRadius = '5px';
}))

Array.from(nav).forEach(nav =>
  nav.addEventListener('blur', (e) =>{
    nav.style.backgroundColor = '';
    nav.style.border = "none";
  }))
//8
const bod = document.querySelector('body')

 window.addEventListener('resize', (e) =>{
   bod.style.backgroundColor =  'red';
 })
//9
 const head = document.querySelector('.main-navigation')

 head.addEventListener('select', (e) => {
  input.onselect = logSelection;
 })
 
 //10
 const mouse = document.querySelector('h2')
 mouse.addEventListener('mouseenter', (e) =>{
   mouse.style.border = "2px dashed brown"
   mouse.style.width = 'fit-Content'
   mouse.style.padding = '5px'
   mouse.style.display = 'flex'
   mouse.style.justifyContent = 'center'
 })

 mouse.addEventListener('mouseleave', (e) =>{
   mouse.style = 'none'
 })