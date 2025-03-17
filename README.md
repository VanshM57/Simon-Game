# Simon Game

This project is inspired by the famous Simon game. The objective is to remember and reproduce a sequence of button presses, which gets progressively longer.

## How to Play

1. **Starting the Game**: Press any key to start the game.
2. **Game Sequence**: The game will flash a sequence of colors. Pay attention and remember the order.
3. **User Sequence**: Click on the buttons to reproduce the sequence. Each correct sequence will advance you to the next level.
4. **Game Over**: If you press the wrong button, the game will end, and you will see your highest score.

## Files

### `index.html`

- Contains the structure of the game.
- Defines the game title, instructions, and button layout.

### `style.css`

- Provides the styling for the game interface.
- Includes styles for the game buttons, text, and layout.
- Adds visual effects for button presses and flashes.

### `app.js`

- Implements the game logic.
- Functions:
  - `gameFlash(btn)`: Flashes a button during the game sequence.
  - `levelUp()`: Advances the game to the next level by generating a new sequence.
  - `userFlash(btn)`: Flashes a button when the user clicks it.
  - `btnPress()`: Handles user button presses and checks the sequence.
  - `checkAns(idx)`: Checks if the user's input matches the game sequence.
  - `reset()`: Resets the game state.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup

1. Clone the repository.
2. Open `index.html` in your web browser to start the game.

Enjoy playing the Simon Game!
