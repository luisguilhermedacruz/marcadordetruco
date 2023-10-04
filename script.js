function shuffleArray(array) {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function sortTeams(numPlayers) {
  const playersInput = document.getElementById("players");
  const players = playersInput.value.split(",");

  if (players.length < numPlayers) {
    alert("NÚMERO DE JOGADORES INSUFICIENTE PARA JOGAR!");
    return;
  }

  const shuffledPlayers = shuffleArray(players);

  let team1, team2;

  if (numPlayers === 4) {
    team1 = shuffledPlayers.slice(0, 2);
    team2 = shuffledPlayers.slice(2, 4);
  } else if (numPlayers === 6) {
    team1 = shuffledPlayers.slice(0, 3);
    team2 = shuffledPlayers.slice(3, 6);
  } else {
    alert("OPÇÃO INVÁLIDA");
    return;
  }

  const scoreBoardContainer = document.querySelector("#scoreboard");

  const team1Div = document.createElement("div");
  team1Div.classList.add("team");

  const scoreDiv1 = document.createElement("div");
  scoreDiv1.classList.add("score-container");

  const scoreValue1 = document.createElement("span");
  scoreValue1.textContent = "0";
  scoreValue1.classList.add("score");

  const buttonContainer1 = document.createElement("div");
  buttonContainer1.classList.add("button-container");

  const decreaseButton1 = document.createElement("button");
  decreaseButton1.textContent = "-";
  decreaseButton1.classList.add("button-score");

  const increaseButton1 = document.createElement("button");
  increaseButton1.textContent = "+";
  increaseButton1.classList.add("button-score");

  buttonContainer1.appendChild(decreaseButton1);
  buttonContainer1.appendChild(increaseButton1);

  scoreDiv1.appendChild(scoreValue1);
  scoreDiv1.appendChild(buttonContainer1);

  team1.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.textContent = player;
    team1Div.appendChild(playerDiv);
  });
  team1Div.appendChild(scoreDiv1);

  const team2Div = document.createElement("div");
  team2Div.classList.add("team");

  const scoreDiv2 = document.createElement("div");
  scoreDiv2.classList.add("score-container");

  const scoreValue2 = document.createElement("span");
  scoreValue2.textContent = "0";
  scoreValue2.classList.add("score");

  const buttonContainer2 = document.createElement("div");
  buttonContainer2.classList.add("button-container");

  const decreaseButton2 = document.createElement("button");
  decreaseButton2.textContent = "-";
  decreaseButton2.classList.add("button-score");

  const increaseButton2 = document.createElement("button");
  increaseButton2.textContent = "+";
  increaseButton2.classList.add("button-score");

  buttonContainer2.appendChild(decreaseButton2);
  buttonContainer2.appendChild(increaseButton2);

  scoreDiv2.appendChild(scoreValue2);
  scoreDiv2.appendChild(buttonContainer2);

  team2.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.textContent = player;
    team2Div.appendChild(playerDiv);
  });
  team2Div.appendChild(scoreDiv2);

  scoreBoardContainer.appendChild(team1Div);
  scoreBoardContainer.appendChild(team2Div);

  const title = document.querySelector("#title");
  title.innerHTML = "BOA JOGATINA, SENHORES!";
  title.classList.add("title2");

  const inputSection = document.querySelector("#inputs");
  inputSection.style.display = "none";

  decreaseButton1.addEventListener("click", () => {
    if (parseInt(scoreValue1.textContent) > 0) {
      scoreValue1.textContent = (
        parseInt(scoreValue1.textContent) - 1
      ).toString();
      if (parseInt(scoreValue1.textContent) < 12) {
        enableScoreButtons();
      }
    }
  });

  increaseButton1.addEventListener("click", () => {
    if (parseInt(scoreValue1.textContent) < 12) {
      scoreValue1.textContent = (
        parseInt(scoreValue1.textContent) + 1
      ).toString();
      if (parseInt(scoreValue1.textContent) === 12) {
        disableIncreaseButton(increaseButton1);
      }
    }
  });

  decreaseButton2.addEventListener("click", () => {
    if (parseInt(scoreValue2.textContent) > 0) {
      scoreValue2.textContent = (
        parseInt(scoreValue2.textContent) - 1
      ).toString();
      if (parseInt(scoreValue2.textContent) < 12) {
        enableScoreButtons();
      }
    }
  });

  increaseButton2.addEventListener("click", () => {
    if (parseInt(scoreValue2.textContent) < 12) {
      scoreValue2.textContent = (
        parseInt(scoreValue2.textContent) + 1
      ).toString();
      if (parseInt(scoreValue2.textContent) === 12) {
        disableIncreaseButton(increaseButton2);
      }
    }
  });

  function disableIncreaseButton(button) {
    button.disabled = true;
    disableScoreButtons();
  }

  function enableScoreButtons() {
    decreaseButton1.disabled = false;
    decreaseButton2.disabled = false;
    increaseButton1.disabled = false;
    increaseButton2.disabled = false;
  }

  function disableScoreButtons() {
    decreaseButton1.disabled = false;
    decreaseButton2.disabled = false;
    increaseButton1.disabled = true;
    increaseButton2.disabled = true;
  }
}

function addClickEvents() {
  var fourButton = document.querySelector("#four");
  var sixButton = document.querySelector("#six");

  fourButton.addEventListener("click", () => {
    sortTeams(4);
  });

  sixButton.addEventListener("click", () => {
    sortTeams(6);
  });
}

addClickEvents();
