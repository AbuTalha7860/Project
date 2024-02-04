let randomNumber = parseInt(Math.random() * 100 +1)
console.log(randomNumber);
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener( 'click' , function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    validGuess(guess);
  });
}
function validGuess(guess){
  if(isNaN(guess)){
    alert('Please eneter a valid Number')
  }else if(guess < 1){
    alert('Please eneter a number greater than 1')
  }else if(guess > 100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number is ${randomNumber}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(randomNumber === guess){
    displayMessage(`You gussed it right `)
    endGame()
  }else if(guess < randomNumber) {
    displayMessage(`Number is too Low`)
  }else if(guess > randomNumber) {
    displayMessage(`Number is too High`)
  }  
}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} , `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(guess){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = 'newGame'>Start new game</h2>`
  resultParas.appendChild(p)
  playGame = false
  startGame()
}
function startGame(guess){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 +1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    resultParas.removeChild(p)
    playGame = true
  })

}