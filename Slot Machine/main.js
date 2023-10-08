
	// set fruits as constants
	const symbols = [
	  "apple",
	  "kiwi",
	  "peach",
	  "cherry",
	  "banana",
	  "strawberry",
	  "pom",
	  "lemon",
	  "watermelon",
	  "grape",
	];

	
	let creditsElement = document.getElementById("tc"); // set credits
	const betAmountElement = document.getElementById("ba"); // shows user the bet amount
	const winsElement = document.getElementById("wins"); // displays user wins
	// const playButton = document.getElementById("play"); // 

	const slotContainers = document.querySelectorAll(".slots > section");// deals with the slot sections 


	// Starting credits
	let totalCredits = 100; 
	let betAmount = 1;
	let wins = 0;
  
	// Function to generate a random fruit
	function getRandomSymbol() {
	  const randomIndex = Math.floor(Math.random() * symbols.length);
	  return symbols[randomIndex];
	}
  
	// Function to spin the slot machine
	function spinSlots() {
	  slotContainers.forEach((container) => {
		container.innerHTML = "";
		for (let i = 0; i < 3; i++) {
		  const symbol = getRandomSymbol();
		  const img = document.createElement("img");
		  img.src = `imgs/${symbol}.jpeg`; // replaces the need to insert images into HTML
		  container.appendChild(img);
		    // inner.html doesn't work bc it's not a string. I was stuck and I asked ChatGPT to fix and it told me that appendChild would work
		}
	  });
	}
  
	// Function to update the display
	function updateDisplay() {
	  creditsElement.textContent = totalCredits;
	  betAmountElement.textContent = betAmount;
	  winsElement.textContent = wins;
	}
  
	
	document.getElementById("play").addEventListener('click',function(){ // function starts
	  if (totalCredits >= betAmount) { // allows play as long as credits are available
		totalCredits -= betAmount;
		spinSlots();
  
		// Check for a win
		const symbolsInSlot1 = slotContainers[0].querySelectorAll("img");
		const symbolsInSlot2 = slotContainers[1].querySelectorAll("img");
		const symbolsInSlot3 = slotContainers[2].querySelectorAll("img");
  
		if ( // selects with images need to be the same
		  symbolsInSlot1[1].src === symbolsInSlot2[1].src &&
		  symbolsInSlot2[1].src === symbolsInSlot3[1].src
		) {
		  wins += betAmount * 10; // Wins Updated
		}
  
		updateDisplay();
	  } else {
		alert("Not enough credits to play.");
	  }
	  question.classList.add('hidden')
	});
  
	// Initial display update
	updateDisplay();
	

  

