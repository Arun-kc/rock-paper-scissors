const handOptions = {
    'rock': '/assets/rock.png',
    'paper': '/assets/paper.png',
    'scissor': '/assets/scissor.png'
}

let score = 0

const pickUserHand = (hand) => {
    let plays = document.querySelector('.plays')
    plays.style.display = 'none'

    let results = document.querySelector('.results')
    results.style.display = 'flex'

    document.getElementById('userPickImage').src = handOptions[hand]

    pickComputerHand(hand)
}

const pickComputerHand = (hand) => {
    let hands = ['rock', 'paper', 'scissor']
    let cHand = hands[Math.floor(Math.random() * hands.length)]

    document.getElementById('computerPickImage').src = handOptions[cHand]

    referee(hand, cHand)
}

const referee = (userHand, cHand) => {
    if (userHand == "paper" && cHand == "scissor") {
        setDecision("YOU LOSE!");
      }
    if (userHand == "paper" && cHand == "rock") {
        setDecision("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "paper" && cHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cHand == "scissor") {
        setDecision("YOU WIN!");
        setScore(score + 1);
    }
    if (userHand == "rock" && cHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissor" && cHand == "scissor") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissor" && cHand == "rock") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "scissor" && cHand == "paper") {
        setDecision("YOU WIN!");
        setScore(score + 1);
    }
}

const restartGame = () => {
    let result = document.querySelector(".results");
    result.style.display = "none";
  
    let plays = document.querySelector(".plays");
    plays.style.display = "flex";
}
  
const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}
  
const setScore = (newScore) => {
    score = newScore;
    document.querySelector(".score h1").innerText = score;
}