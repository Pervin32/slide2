
const content = document.querySelector("#slide_content")
const slideLeftBtn = document.querySelector("#left_btn")
const slideRightBtn = document.querySelector("#right_btn")
const title = document.querySelector("#title")
const date = document.querySelector("#date")
const img = document.querySelector("#img")


const items = [
  {
    url: 'https://i.ytimg.com/vi/tArC9-RHmU4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkpy8j3fkxlbj32IemGrdnbbdYfA',
    title: 'These Are the Cars of the Future, According to Bentley, Bugatti, Lamborghini, and More | Architectural Digest | Architectural Digest',
    date: '2024'

  },

  {
    url: 'https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg',
    title: 'Sports Car Images Browse 1,039,830 Stock Photos, Vectors, and Video | Adobe Stock',
    date: '2024'

  },

  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUt5i8K9kTDt0n_vZ05MQIxCMycxDPKdy6UjPl7UbxELiliRJfHwqBq5Gxn1x1rovyqec&usqp=CAU',
    title: 'Boutique Sports Car Market Adopts Blazing-Fast EV Design SURFACE',
    date: '2024'

  },

  {
    url: 'https://i.ytimg.com/vi/jFhDIFtlHuQ/mqdefault.jpg',
    title: '10 Future Concept Cars YOU MUST SEE',
    date: '2024'
  },

  {
    url: 'https://i.pinimg.com/736x/e6/46/6d/e6466d86a9e9c020dbdf8281019b9a98.jpg',
    title: 'Editing Car videos - Future Cars "Top" 4K Art: Speed ,Car Racing ,Sports Cars Wallpaper',
    date: '2024'
  }
]
let index = 0

function createUI() {
  let item = items[index]
  img.src = item.url
  title.textContent = item.title
  date.textContent = item.date
}


slideLeftBtn.addEventListener('click', function () {

  if (index <= 0) index = items.length - 1

  else {
    index--
  }

  createUI()
})



slideRightBtn.addEventListener('click', function () {
  if (index === items.length - 1) index = 0

  else {
    index++
  }


  createUI()
})


createUI()