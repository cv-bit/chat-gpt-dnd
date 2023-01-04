function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    alert("You rolled a " + dice);
  }
  
  document.getElementById("roll-button").addEventListener("click", rollDice);