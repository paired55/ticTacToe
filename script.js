let currentOperator = "X";
let gameMoves = [];
const boardListener = document.querySelectorAll(".grid");
const aware = document.querySelector("#title");
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
	boardListener.forEach((grid) => {
		grid.textContent = "";
		aware.textContent = "Game has been reset!";
	});
});

boardListener.forEach((grid) => {
	grid.addEventListener("click", () => {
		if (grid.textContent === "") {
			if (currentOperator === "X") {
				grid.textContent = "X";
				currentOperator = "O";
			} else {
				grid.textContent = "O";
				currentOperator = "X";
			}
		}
		gameMoves = [];
		boardListener.forEach((grid) => {
			gameMoves.push(grid.textContent);
		});
		whoWon();
	});
});

function whoWon() {
	for (let i = 0; i < 3; i++) {
		// Check rows
		if (
			gameMoves[i * 3] === gameMoves[i * 3 + 1] &&
			gameMoves[i * 3 + 1] === gameMoves[i * 3 + 2] &&
			gameMoves[i * 3] !== ""
		) {
			aware.textContent = `${gameMoves[i * 3]} Won!`;
			return;
		}

		// Check columns
		if (
			gameMoves[i] === gameMoves[i + 3] &&
			gameMoves[i + 3] === gameMoves[i + 6] &&
			gameMoves[i] !== ""
		) {
			aware.textContent = `${gameMoves[i]} Won!`;
			return;
		}
	}

	// Check diagonals
	if (
		gameMoves[0] === gameMoves[4] &&
		gameMoves[4] === gameMoves[8] &&
		gameMoves[0] !== ""
	) {
		aware.textContent = `${gameMoves[0]} Won!`;
		return;
	}

	if (
		gameMoves[2] === gameMoves[4] &&
		gameMoves[4] === gameMoves[6] &&
		gameMoves[2] !== ""
	) {
		aware.textContent = `${gameMoves[2]} Won!`;
		return;
	}

	if (!gameMoves.includes("")) {
		aware.textContent = `It's a tie!`;
	}
}
