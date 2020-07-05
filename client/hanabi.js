//Make connection

const socket = io.connect('http://localhost:3000')




//SUIT
//I'm going to append the cards to the document
//3 1s of each color... 15 cards
//number & color for each card, yes?
console.log(document)
const button = document.getElementById('btn')
console.log(button)
button.addEventListener('click', ()=>{
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

console.log(cards())

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


