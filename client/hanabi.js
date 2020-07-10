//Make connection

const socket = io.connect('http://localhost:3000')

//query DOM
const message = document.getElementById('message')
const handle = document.getElementById('handle')
const btn = document.getElementById('send')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

//emit events
btn.addEventListener('click', () => {
  message.value = ''
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  })
})

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value)
})

//listen for events
socket.on('chat', (data) => {
  feedback.innerHTML = ''
  output.innerHTML += '<p><strong>' + data.handle + '</strong>' + data.message + '</p>'
})

socket.on('typing', (data) => {
  console.log('hannpe')
  feedback.innerHTML = '<p><em>' + data + 'is typing a messagee...' + '</em></p>'
})
//SUIT
//I'm going to append the cards to the document
//3 1s of each color... 15 cards
//number & color for each card, yes?
console.log(document)
const button = document.getElementById('btn')
console.log(button)
button.addEventListener('click', () => {
  console.log("CLICKED")
})
const colors = ['pink', 'yellow', 'mint', 'blue', 'white']
const numbers = [1,1,1,2,2,3,3,4,4,5]
//there are 3 of each color for 1
//there are 2 of each color for 2,3,4
//there are 1 of each color for 5
//I want an array of objects with each card

const card = (color, number) => {
  return {
    color,
    number
  }
}


const cards = () => {
  const cards = []
  //for each color in colors array, combine with numbers array
  colors.forEach(color=>{
    numbers.forEach(number=>{
      cards.push(card(color,number))
    })
  })
  return cards
}


//Fisher-Yates Algorithm
const shuffleSort = (arr) => {
  let newPos,
      temp
  for (let i = arr.length - 1; i > 0; i--){
    //each time, the random nunber to exchange with will decrement
    newPos = Math.floor(Math.random()*(i+1))
    temp = arr[i]
    arr[i] = arr[newPos] 
    arr[newPos] = temp
  }
  return arr
}

