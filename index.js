const trailer = document.getElementById('trailer')
const noButton = document.getElementById('no')
const myImage = document.getElementById('image')
const yesButton = document.getElementById('yes')

const images = ['crying-cat.gif',
    'flat,750x1000,075,f.jpg',
    'will-smith-crying-meme.jpg',
    'images.jpeg',
    'images (1).jpeg', 'download.jpeg', 'unnamed.jpg']

noButton.addEventListener("mouseover", ()=>{
    myImage.src = images[Math.floor(Math.random() * images.length)]
    const x = Math.random() * 1200,
        y = Math.random() * 1200
    const keyFrames = {
        transform: `translate(${x}px, ${y}px)`
    }
    noButton.animate(keyFrames, {
        duration: 500,
        fill: 'forwards'
    })
    console.log(myImage.src)
})

yesButton.addEventListener("click", () => {
    myImage.src = '1xyam8.jpg'
})

// const animateTrailer = (e, interacting) => {
//     const x = e.clientX - trailer.offsetHeight/2 ,
//         y = e.clientY - trailer.offsetHeight/2
//
//     const keyframes = {
//         transform : `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
//     }
//
//     trailer.animate(keyframes, {
//         duration: 500,
//         fill: "forwards"
//     })
// }
//
// window.onmousemove = e => {
//     const interactable = e.target.closest(".interactable"),
//         interacting = interactable !== null
//
//     // const icon = document.getElementById('trailer-icon')
//     // if (e.target.closest(".no")){
//     //     trailer.innerHTML = '😭'
//     // }
//     // else trailer.innerHTML = '🩷'
//
//     animateTrailer(e, interacting)
//
//
//
//     // if (interacting){
//     //     icon.className = getTrailerClass(interactable.dataset.type)
//     // }
// }