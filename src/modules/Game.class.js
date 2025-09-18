// noinspection JSNonASCIINames,NonAsciiCharacters

'use strict';

import { CbContainer, Control } from './Control.class.js';

/**
 * This class represents the game.
 * Now it has a basic structure needed for testing.
 * Feel free to add more props and methods if needed.
 */
export class Game {
  /**
   * Control key up
   * @type {string}
   * @protected
   */
  static _CTR_UP = 'ArrowUp';

  /**
   * Control key down
   * @type {string}
   * @protected
   */
  static _CTR_DOWN = 'ArrowDown';

  /**
   * Control key left
   * @type {string}
   * @protected
   */
  static _CTR_LEFT = 'ArrowLeft';

  /**
   * Control key right
   * @type {string}
   * @protected
   */
  static _CTR_RIGHT = 'ArrowRight';

  /**
   * Game statuses
   * @type {Object}
   * @protected
   */
  static _statuses = Object.freeze({
    IDLE: 'idle',
    PLAYING: 'playing',
    WIN: 'win',
    LOSE: 'lose',
  });

  /**
   * Current game status
   * @type {string}
   * @protected
   */
  _status = Game._statuses.IDLE;

  /**
   * Current board state
   * @type {number[][]}
   * @protected
   */
  _state;

  /**
   * Initial score
   * @type {number}
   * @private
   */
  _score;

  /**
   * Board width
   * @type {number}
   * @private
   */
  _width;

  /**
   * Board height
   * @type {number}
   * @private
   */
  _height;

  /**
   * Width of game board
   * @type {number}
   * @protected
   */
  static _DEFAULT_WIDTH = 4;

  /**
   * Height of game board
   * @type {number}
   * @protected
   */
  static _DEFAULT_HEIGHT = 4;

  /**
   * Cell value generator
   * @return {number}
   */
  static _cellValueGenerator = () => (Math.random() > 0.9 ? 4 : 2);

  /**
   * Initial not empty cell count
   * @type {number}
   */
  static _INITIAL_NOT_EMPTY_CELL_COUNT = 2;

  /**
   * Win score limit
   * @type {number}
   * @private
   */
  static _WIN_SCORE = 2048;

  /**
   * Valid direction vectors
   * @type {{'1,0': boolean, '0,1': boolean}}
   */
  static _validDirectionVectors = {
    '1,0': true,
    '0,1': true,
    '-1,0': true,
    '0,-1': true,
  };

  /**
   * Selector for the game score element
   * @type {string}
   */
  static SCORE_SELECTOR = '.game-score';

  /**
   * Selector for container of messages
   * @type {string}
   */
  static MESSAGE_CONTAINER_SELECTOR = '.message-container';

  /**
   * Selector for a message
   * @type {string}
   */
  static MESSAGE_SELECTOR = '.message';

  /**
   * Class used to hide messages
   * @type {string}
   */
  static HIDDEN_CLASS = 'hidden';

  /**
   * Selector for the start button
   * @type {string}
   */
  static START_BUTTON_SELECTOR = '.button.start';

  /**
   * Selector for the game board
   * @type {string}
   */
  static BOARD_SELECTOR = '.game-field tbody';

  /**
   * Control manager that supports touchpad and mouse swipes
   * @type {Control}
   * @private
   */
  _control;

  /**
   * @typedef {Object} TileColor
   * @property {string} background - The tile's background color in CSS format.
   * @property {string} text - The color of the text on the tile.
   */
  /**
   * Tile palette
   * @type {TileColor[]}
   */
  static TILE_PALETTE = [
    { background: 'hsl(45, 100%, 95%)', text: 'black' },
    { background: 'hsl(40, 100%, 90%)', text: 'black' },
    { background: 'hsl(35, 100%, 80%)', text: 'black' },
    { background: 'hsl(30, 100%, 70%)', text: 'black' },
    { background: 'hsl(25, 100%, 65%)', text: 'white' },
    { background: 'hsl(15, 100%, 60%)', text: 'white' },
    { background: 'hsl(5, 90%, 60%)', text: 'white' },
    { background: 'hsl(340, 80%, 65%)', text: 'white' },
    { background: 'hsl(310, 70%, 60%)', text: 'white' },
    { background: 'hsl(260, 60%, 55%)', text: 'white' },
    { background: 'hsl(220, 70%, 50%)', text: 'white' },
    { background: 'hsl(180, 80%, 45%)', text: 'black' },
    { background: 'hsl(140, 85%, 40%)', text: 'white' },
    { background: 'hsl(50, 100%, 50%)', text: 'black' },
    { background: 'hsl(0, 0%, 100%)', text: 'black' },
    { background: 'hsl(240, 20%, 15%)', text: 'white' },
  ];

  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialised with the provided
   * initial state.
   */
  constructor(initialState) {
    this._initControls();

    // if there is some initial state - start the game automatically
    if (initialState) {
      this.restart(initialState);
    }
  }

  /**
   * Initialise control keyboard control for the game
   * @private
   */
  _initControls() {
    const controls = new CbContainer({
      left: this.moveLeft.bind(this),
      right: this.moveRight.bind(this),
      down: this.moveDown.bind(this),
      up: this.moveUp.bind(this),
    });

    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case Game._CTR_UP:
          // eslint-disable-next-line no-unused-expressions
          controls.up && controls.up();
          break;
        case Game._CTR_DOWN:
          // eslint-disable-next-line no-unused-expressions
          controls.down && controls.down();
          break;
        case Game._CTR_LEFT:
          // eslint-disable-next-line no-unused-expressions
          controls.left && controls.left();
          break;
        case Game._CTR_RIGHT:
          // eslint-disable-next-line no-unused-expressions
          controls.right && controls.right();
          break;
      }
    });

    /**
     * Helper to assign click handlers
     * @param selector
     * @param handler
     */
    const addClickHandlers = (selector, handler) => {
      if (typeof handler !== 'function') {
        return;
      }

      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('click', handler);
      });
    };

    addClickHandlers('.shift-left', controls.left);
    addClickHandlers('.shift-right', controls.right);
    addClickHandlers('.shift-up', controls.up);
    addClickHandlers('.shift-down', controls.down);

    const onStart = this.start.bind(this);

    document
      .querySelector(Game.START_BUTTON_SELECTOR)
      ?.addEventListener('click', onStart);

    // add support of mouse and touchpad / screen for swipe actions
    this._control = new Control(
      document.querySelector(Game.BOARD_SELECTOR),
      controls,
    );
  }

  /**
   * Game inner loop actions
   * @private
   */
  _gameCycle() {
    // set all elements on the page as up-to-date
    this._recalculateScore();

    // check if game status changed
    this._сheckWinLose();

    // update board
    this._updateBoard();

    // update score indicator
    this._updateScore();

    // check if necessary to update the shown messages
    this._updateMessage();
  }

  /**
   * Shift board by vector
   *
   * @param {number} dx
   * @param {number} dy
   * @return {boolean} if something moved
   * @private
   */
  _shift(dx, dy) {
    if (this._status !== Game._statuses.PLAYING) {
      throw new Error('Game is not started or it is finished');
    }

    if (typeof dx !== 'number' || typeof dy !== 'number') {
      throw new TypeError('dx and dy must be numbers');
    }

    const key = `${dx},${dy}`;

    if (!Game._validDirectionVectors[key]) {
      throw new RangeError(
        'Invalid shift: only single shift allowed ' +
          '(dx,dy) = (+-1,0) or (0,+-1), ' +
          `got (${dx},${dy})`,
      );
    }

    let moved = false;

    // check if movement is horizontal
    const horizontal = dx !== 0;

    /**
     * Get vertical or horizontal line
     * @param i - index
     * @return {number[]}
     */
    const getLine = (i) => {
      const state = this.getState();

      if (horizontal) {
        // extract i-th row to array
        return state[i].slice();
      }

      // get i-th element of each row and create an array
      return state.map((row) => row[i]);
    };

    /**
     * Set vertical or horizontal line
     *
     * @param i - index
     * @param {number[]} newLine - new line
     */
    const setLine = (i, newLine) => {
      const state = this.getState();

      if (horizontal) {
        state[i] = newLine;
      } else {
        for (let j = 0; j < this._height; j++) {
          state[j][i] = newLine[j];
        }
      }
    };

    /**
     * Merges line per 2048 rules
     * @param {number[]} inputLine - line
     * @param {boolean} reverse - reverse flag
     *   (for left to right and bottom to top)
     * @return {*}
     */
    const mergeLine = (inputLine, reverse = false) => {
      /**
       * For reverse shift - we reverse the array
       * and proceed with the default logic
       */
      const line = reverse ? inputLine.reverse() : inputLine;

      // filter out empty cells
      let nonZero = line.filter((v) => v !== 0);

      for (let i = 0; i < nonZero.length - 1; i++) {
        // if the current cell and next cell have the same value
        if (nonZero[i] === nonZero[i + 1]) {
          // multiple value of current cell by 2
          nonZero[i] *= 2;
          // set empty value to next cell
          nonZero[i + 1] = 0;
          // increment, skip the next cell, so we have no recursive merges
          // (merge 1 time)
          i++;
        }
      }

      // filter empty cells - so there is an effect of cell combine
      nonZero = nonZero.filter((v) => v !== 0);

      // fill line with empty cells to have the initial length
      const currentLength = nonZero.length;

      nonZero.length = line.length;
      nonZero.fill(0, currentLength, nonZero.length);

      /**
       * For reverse shift we restore the original order of elements
       * upon finish processing
       */
      if (reverse) {
        nonZero.reverse();
      }

      return nonZero;
    };

    /**
     * Detect if the shift is reversed,
     * so we will use this for merge line as a flag
     */
    const isReverse = (horizontal && dx > 0) || (!horizontal && dy > 0);

    for (let i = 0; i < (horizontal ? this._width : this._height); i++) {
      const line = getLine(i);
      const merged = mergeLine(line, isReverse);

      // check if after shift state for the line is changed
      if (!moved && merged.some((val, idx) => val !== line[idx])) {
        moved = true;
      }

      // set new merged line to current board state
      setLine(i, merged);
    }

    // return if something changed on board
    return moved;
  }

  /**
   * Check board state and change game status
   * @private
   */
  _сheckWinLose() {
    // no actions
    if ([Game._statuses.WIN, Game._statuses.LOSE].includes(this._status)) {
      return;
    }

    // some 2048 cells in any row - change status to win
    if (this._state.some((row) => row.includes(2048))) {
      this._status = Game._statuses.WIN;

      return;
    }

    // there are empty cells - so can continue
    for (let x = 0; x < this._width; x++) {
      for (let y = 0; y < this._height; y++) {
        if (this._state[x][y] === 0) {
          return;
        }
      }
    }

    // check merging possibility
    for (let x = 0; x < this._width; x++) {
      for (let y = 0; y < this._height; y++) {
        // are there same values in neighbouring cells?
        if (
          (x < this._width - 1 &&
            this._state[x][y] === this._state[x + 1][y]) ||
          (y < this._height - 1 && this._state[x][y] === this._state[x][y + 1])
        ) {
          // so merging is still possible
          return;
        }
      }
    }

    // otherwise it is a defeat
    this._status = Game._statuses.LOSE;

    // update message
    this._updateMessage();
  }

  /**
   * Recalculate current score on board
   * @private
   */
  _recalculateScore() {
    let score = 0;

    for (let i = 0; i < this._width; i++) {
      for (let j = 0; j < this._height; j++) {
        if (this._state[i][j] !== 0) {
          score += this._state[i][j];
        }
      }
    }
    this._score = score;
  }

  /**
   * Colors generator using a predefined palette
   *
   * @param {number|null} inputValue
   * @return {TileColor}
   * @private
   */
  _getColors(inputValue = null) {
    // for empty cell used 0
    const value = inputValue || 0;

    // the level will be 1 for 2, 2 for 4, etc.
    const paletteIndex = Math.log2(value);

    /**
     * Return the color from the palette
     * or last color from the palette for inappropriate indexes
     */
    return (
      Game.TILE_PALETTE[paletteIndex] ||
      Game.TILE_PALETTE[Game.TILE_PALETTE.length - 1]
    );
  }

  /**
   * Update board with current game state
   * @private
   */
  _updateBoard() {
    for (let i = 0; i < this._width; i++) {
      for (let j = 0; j < this._height; j++) {
        const cell = document.querySelector(
          `${Game.BOARD_SELECTOR} tr:nth-child(${i + 1}) td:nth-child(${j + 1})`,
        );
        const colorConfig = this._getColors(
          this._state[i][j] > 0 ? this._state[i][j] : 1,
        );

        cell.style.color = colorConfig.text;
        cell.style.backgroundColor = colorConfig.background;
        cell.innerHTML = this._state[i][j] > 0 ? this._state[i][j] : '';
      }
    }
  }

  /**
   * Update current board score
   * @private
   */
  _updateScore() {
    const scoreElement = document.querySelector(Game.SCORE_SELECTOR);

    if (scoreElement) {
      scoreElement.innerText = this._score;
    }
  }

  /**
   * Show an actual message
   * @private
   */
  _updateMessage() {
    const messagesSelector =
      Game.MESSAGE_CONTAINER_SELECTOR + ' > ' + Game.MESSAGE_SELECTOR;
    const targetMessageSelector = messagesSelector + '-' + this._status;
    const messageElements = document.querySelectorAll(messagesSelector);
    const targetMessage = document.querySelector(targetMessageSelector);

    messageElements.forEach((messageElement) => {
      messageElement.classList.add(Game.HIDDEN_CLASS);
    });

    if (targetMessage) {
      targetMessage.classList.remove(Game.HIDDEN_CLASS);
    }
  }

  /**
   * Move the board left
   */
  moveLeft() {
    this._shift(-1, 0);
    this._addRandomCell();
    this._gameCycle();
  }

  /**
   * Move the board right
   */
  moveRight() {
    this._shift(1, 0);
    this._addRandomCell();
    this._gameCycle();
  }

  /**
   * Move the board up
   */
  moveUp() {
    this._shift(0, -1);
    this._addRandomCell();
    this._gameCycle();
  }

  /**
   * Move the board down
   */
  moveDown() {
    this._shift(0, 1);
    this._addRandomCell();
    this._gameCycle();
  }

  /**
   * Returns current score
   *
   * @returns {number}
   */
  getScore() {
    return this._score;
  }

  /**
   * Returns current board state
   * @returns {number[][]}
   */
  getState() {
    return this._state;
  }

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {
    return this._status;
  }

  /**
   * Starts the game.
   */
  start() {
    this.restart();
  }

  /**
   * Resets the game.
   */
  restart(initialState = null) {
    // status playing
    this._status = Game._statuses.PLAYING;
    // score 0
    this._score = 0;

    // empty board, random cell
    try {
      if (!initialState) {
        // initialize board dimensions
        this._width = Game._DEFAULT_WIDTH;
        this._height = Game._DEFAULT_HEIGHT;

        // create a new clear board
        this._state = this._create2DArray(
          Game._DEFAULT_HEIGHT,
          Game._DEFAULT_WIDTH,
          0,
        );
      } else {
        // initiate board with not empty cells
        if (!this._isValidRectangleMatrix(initialState)) {
          throw new TypeError('Invalid initial state');
        }
        // initialize board dimensions
        this._width = initialState[0].length;
        this._height = initialState.length;

        this._state = initialState;
      }

      /**
       * Add some initial cell
       * (minus one that will be added by default in the cycle)
       */
      this._addRandomCell(Game._INITIAL_NOT_EMPTY_CELL_COUNT);

      // inner cycle of the game
      this._gameCycle();
    } catch (error) {
      alert('fuck');
      // ERROR HANDLER PLACEHOLDER
    }
  }

  /**
   * Initial state validator
   * @param {number[][]} initialState - matrix of number
   * @returns {boolean} validity
   */
  _isValidRectangleMatrix(initialState) {
    if (!Array.isArray(initialState) || initialState.length === 0) {
      return false;
    }

    const firstRowLength = initialState[0].length;

    for (let i = 0; i < initialState.length; i++) {
      const row = initialState[i];

      // check for the same row length
      if (!Array.isArray(row) || row.length !== firstRowLength) {
        return false;
      }

      // check for spaces and integer > 0 for each cell
      for (let j = 0; j < row.length; j++) {
        if (
          !Number.isInteger(row[j]) ||
          row[j] < 0
          // || row[j] >= Game._WIN_SCORE
        ) {
          return false;
        }
      }
    }

    return true;
  }

  /**
   * Add value to random cell of board
   * @param {number} count - number of prefilled cells on board
   * @private
   */
  _addRandomCell(count = 1) {
    for (let i = 0; i < count; i++) {
      // get random empty cell
      const [r, c] = this._getRandomEmptyCell();
      // get current board
      const state = this.getState();

      // initiate value to cell
      state[r][c] = Game._cellValueGenerator();
    }
  }

  /**
   * Get random empty cell from the board
   * @return {[row: number, column: number]|null}
   * @private
   */
  _getRandomEmptyCell() {
    let result = null;
    let count = 0;

    const state = this.getState();

    /**
     * Reservoir sampling
     */
    for (let r = 0; r < state.length; r++) {
      for (let c = 0; c < state[r].length; c++) {
        if (state[r][c] === 0) {
          count++;

          if (Math.random() < 1 / count) {
            result = [r, c];
          }
        }
      }
    }

    if (result === null) {
      throw new Error('No empty cells');
    }

    return result;
  }

  /**
   * Create 2 dimensions array and fill with value
   * @param rows
   * @param cols
   * @param initialValue
   * @return {any[]}
   * @private
   */
  _create2DArray(rows, cols, initialValue = 0) {
    const result = new Array(rows);

    for (let i = 0; i < rows; i++) {
      result[i] = new Array(cols).fill(initialValue);
    }

    return result;
  }
}
