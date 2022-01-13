/*console.log('Hello World')
// alert('improved')
// DOM
// var name = prompt('What is your name?')
// document.getElementById('idText').innerHTML = name;

// Numbers
/*
++ -- += -= % * /


// Functions
testFunction()
function testFunction() {
  console.log('This is a function test')
}

function greeting() {
  var name = prompt('What is your name?')
  let result = 'Hello ' + name
  console.log(result)
}
// greeting()


// data type
let age = 25 //number
let work = 'pilot' //String
let name = { first: 'John', second: 'Doe' } //Hash
let groceries = ['banana', 'orange', 'apple'] //array
let flag = true //boolean
let nothing = null // value null
let random //undefined
*/

// challenge 1
{
  function ageInDays() {
    let birthday = prompt('What year were  you born ... Good friend?')
    let days = (2022 - birthday) * 365
    let h1 = document.createElement('h1')
    let textAnswer = document.createTextNode(`You\'re ${days} days old!`)
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
  }

  function reset() {
    document.getElementById('ageInDays').remove()
  }
}

// challenge 2

function generatorCat() {
  let image = document.createElement('img')
  let div = document.getElementById('flex-cat-generator')
  image.src = 'https://c.tenor.com/29xFA28uuqcAAAAC/cat-love-you.gif'
  div.appendChild(image)
}

// challenge 3

{
  function rpsGame(yourChoice) {
    let humanChoice, botChoice
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRPS())
    results = decideWinner(humanChoice, botChoice)
    message = finalMessage(results)
    rpsFrontEnd(yourChoice.id, botChoice, message)
  }

  function randToRPS() {
    return Math.floor(Math.random() * 3)
  }

  function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
  }

  function decideWinner(yourChoice, botChoice) {
    let rpsDataSet = {
      'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
      'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
      'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 }
    }

    let yourScore = rpsDataSet[yourChoice][botChoice]
    let botScore = rpsDataSet[botChoice][yourChoice]

    return [yourScore, botScore]
  }

  function finalMessage([yourScore, botScore]) {
    if (yourScore === 0)
      return { 'message': 'You lost!', 'color': 'red' }
    else if (yourScore === 0.5)
      return { 'message': 'You tied!', 'color': 'yellow' }
    else
      return { 'message': 'You won!', 'color': 'green' }
  }

  function rpsFrontEnd(humanImageChoice, botImageChoice, message) {
    let imagesDataSet = {
      'scissors': document.getElementById('scissors').src,
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
    }

    document.getElementById('scissors').remove()
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()

    let humanDiv = document.createElement('div')
    let botDiv = document.createElement('div')
    let messageDiv = document.createElement('div')

    humanDiv.innerHTML = `<img src=${imagesDataSet[humanImageChoice]} style='box-shadow: 0px 10px 40px indigo'>`
    botDiv.innerHTML = `<img src=${imagesDataSet[botImageChoice]} style='box-shadow: 0px 10px 40px red'>`
    messageDiv.innerHTML = `<h1 style='color:${message['color']}; font-size: 60px; padding: 10px'>${message['message']}</h1>`

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)
  }
}

// challenge 4

{
  var all_buttons = document.getElementsByTagName('button')
  var copyAllButtons = []

  for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
  }

  function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red')
      colorChange(buttonThingy.value)
    else if (buttonThingy.value === 'green')
      colorChange(buttonThingy.value)
    else if (buttonThingy.value === 'random')
      colorChange(buttonThingy.value)
    else if (buttonThingy.value === 'reset')
      colorChange(buttonThingy.value)
  }

  function colorChange(option) {
    for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].classList.remove(all_buttons[i].classList[1])
      all_buttons[i].classList.add(optionChange(option, i))
    }
  }

  function optionChange(value, i) {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success']
    let ramdonNumber = Math.floor(Math.random() * 4)

    switch (value) {
      case 'red':
        return choices[1]
      case 'green':
        return choices[3]
      case 'random':
        return choices[ramdonNumber]
      case 'reset':
        return copyAllButtons[i]
    }
  }
}

// challenge 5

{
  let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
    'final': false
  }

  const YOU = blackjackGame['you']
  const DEALER = blackjackGame['dealer']

  const hitSound = new Audio('/sound/swish.mp3')
  const winSound = new Audio('/sound/cash.mp3')
  const lossSound = new Audio('/sound/aww.mp3')


  document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)
  document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)
  document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand)

  function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
      let card = randomCard()
      showCard(YOU, card)
      updateScore(YOU, card)
      showScore(YOU)
    }
  }

  async function blackjackStand() {
    if (blackjackGame['final'] === false) {
      blackjackGame['isStand'] = true;

      while (blackjackGame['isStand'] === true && DEALER['score'] < 17) {
        let card = randomCard()
        showCard(DEALER, card)
        updateScore(DEALER, card)
        showScore(DEALER)
        await sleep(1000)
      }

      if (DEALER['score'] > 16 || YOU['score'] === 21) {
        blackjackGame['turnsOver'] = true;
        let winner = computerWinner()
        showResult(winner)
      }
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function randomCard() {
    let cardIndex = Math.floor(Math.random() * 13)
    return blackjackGame['cards'][cardIndex]
  }

  function showCard(activePlayer, card) {
    if (activePlayer['score'] < 22) {
      let cardImage = document.createElement('img')
      cardImage.src = `/images/${card}.png`
      document.querySelector(activePlayer['div']).appendChild(cardImage)
      hitSound.play()
    }
  }

  function updateScore(activePlayer, card) {
    if (card === 'A') {
      if (activePlayer['score'] < 11)
        activePlayer['score'] += blackjackGame['cardsMap'][card][1]
      else
        activePlayer['score'] += blackjackGame['cardsMap'][card][0]
    } else
      activePlayer['score'] += blackjackGame['cardsMap'][card]
  }

  function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
      document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!'
      document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    } else
      document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
  }

  function blackjackDeal() {

    if (blackjackGame['turnsOver'] === true) {

      blackjackGame['isStand'] = false;
      let yourImages = document.querySelector('#your-box').querySelectorAll('img')
      let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')

      for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove()
      }
      for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove()
      }

      YOU['score'] = 0
      DEALER['score'] = 0

      document.querySelector('#your-blackjack-result').textContent = 0
      document.querySelector('#your-blackjack-result').style.color = 'white'

      document.querySelector('#dealer-blackjack-result').textContent = 0
      document.querySelector('#dealer-blackjack-result').style.color = 'white'

      document.querySelector('#blackjack-result').textContent = 'Let\'s play'
      document.querySelector('#blackjack-result').style.color = 'black'

      blackjackGame['turnsOver'] = true;
      blackjackGame['final'] = false;
    }

  }

  function computerWinner() {
    let winner
    if (YOU['score'] === 21) {
      winner = YOU
      blackjackGame['wins']++
    } else if (YOU['score'] < 22) {
      if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
        winner = YOU
        blackjackGame['wins']++

      } else if (YOU['score'] < DEALER['score']) {
        winner = DEALER
        blackjackGame['losses']++

      } else if (YOU['score'] === DEALER['score'])
        blackjackGame['draws']++

    } else if (YOU['score'] > 21 && DEALER['score'] < 22) {
      winner = DEALER
      blackjackGame['losses']++

    } else if (YOU['score'] > 21 && DEALER['score'] > 21)
      blackjackGame['draws']++

    return winner
  }

  function showResult(winner) {
    let message, messageColor

    if (blackjackGame['turnsOver'] === true) {
      if (winner === YOU) {
        document.querySelector('#wins').textContent = blackjackGame['wins']
        message = 'You won!'
        messageColor = 'green'
        winSound.play()
      } else if (winner === DEALER) {
        document.querySelector('#losses').textContent = blackjackGame['losses']
        message = 'You lost!'
        messageColor = 'red'
        lossSound.play()
      } else {
        document.querySelector('#draws').textContent = blackjackGame['draws']
        message = 'You drew!'
        messageColor = 'black'
      }

      document.querySelector('#blackjack-result').textContent = message
      document.querySelector('#blackjack-result').style.color = messageColor
      blackjackGame['final'] = true;
    }
  }
}
