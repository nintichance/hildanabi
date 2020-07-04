//SUIT
//I'm going to append the cards to the document








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



