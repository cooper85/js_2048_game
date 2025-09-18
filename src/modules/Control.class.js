'use strict';

/**
 * Container for callback actions
 */
export class CbContainer {
  left;
  right;
  up;
  down;

  /**
   * Constructor
   * @param callbacks
   */
  constructor(callbacks = {}) {
    this.left = callbacks.left ?? null;
    this.right = callbacks.right ?? null;
    this.up = callbacks.up ?? null;
    this.down = callbacks.down ?? null;
  }
}

/**
 * This class supports simple control actions:
 * - mouse/touch/pointer swipe on board
 */
export class Control {
  /** Minimal distance in px to activate swipe */
  static _minDistance = 30;

  /** @type {number} */
  _startX = 0;
  /** @type {number} */
  _startY = 0;
  /** @type {boolean} */
  _isPointerDown = false;
  /** @type {boolean} */
  _swipeFired = false;

  /** @type {HTMLElement} */
  _board;
  /** @type {CbContainer} */
  _callbacks;

  /**
   * Constructor
   *
   * @param boardContainer
   * @param callbackContainer
   */
  constructor(boardContainer, callbackContainer = new CbContainer()) {
    if (!(boardContainer instanceof HTMLElement)) {
      throw new Error('Control: boardContainer must be an HTMLElement');
    }

    this._board = boardContainer;
    this._callbacks = callbackContainer;

    // Bind once
    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUpOrCancel = this._onPointerUpOrCancel.bind(this);

    // Use Pointer Events for unified handling
    this._board.addEventListener('pointerdown', this._onPointerDown);
  }

  /**
   * Remove all bounded event listeners
   */
  destroy() {
    this._board.removeEventListener('pointerdown', this._onPointerDown);
    this._board.removeEventListener('pointermove', this._onPointerMove);
    this._board.removeEventListener('pointerup', this._onPointerUpOrCancel);
    this._board.removeEventListener('pointercancel', this._onPointerUpOrCancel);
  }

  /**
   * Process action on pointer down
   * @param {PointerEvent} e
   * @private
   */
  _onPointerDown(e) {
    // Ignore non-left mouse button
    if (e.pointerType === 'mouse' && e.button !== 0) {
      return;
    }

    this._isPointerDown = true;
    this._swipeFired = false;
    this._startX = e.clientX;
    this._startY = e.clientY;

    // Capture the pointer to keep receiving events outside the element
    if (this._board.setPointerCapture) {
      try {
        this._board.setPointerCapture(e.pointerId);
      } catch {
        // no-op if capture not available
      }
    }

    // Attach move/up handlers for the duration of the gesture
    this._board.addEventListener('pointermove', this._onPointerMove);
    this._board.addEventListener('pointerup', this._onPointerUpOrCancel);
    this._board.addEventListener('pointercancel', this._onPointerUpOrCancel);
  }

  /**
   * Process action on pointer move
   * @param {PointerEvent} e
   * @private
   */
  _onPointerMove(e) {
    if (!this._isPointerDown || this._swipeFired) {
      return;
    }

    const dx = e.clientX - this._startX;
    const dy = e.clientY - this._startY;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);

    // Wait until the threshold is exceeded
    if (Math.max(adx, ady) < Control._minDistance) {
      return;
    }

    // Decide axis by the larger delta and fire exactly one callback
    if (adx > ady) {
      if (dx > 0) {
        if (this._callbacks.right) {
          this._callbacks.right();
        }
      } else {
        if (this._callbacks.left) {
          this._callbacks.left();
        }
      }
    } else {
      if (dy > 0) {
        if (this._callbacks.down) {
          this._callbacks.down();
        }
      } else {
        if (this._callbacks.up) {
          this._callbacks.up();
        }
      }
    }

    this._swipeFired = true;
  }

  /**
   * Process action on pointer up or cancel
   * @param {PointerEvent} e
   * @private
   */
  _onPointerUpOrCancel(e) {
    this._isPointerDown = false;
    this._swipeFired = false;

    if (this._board.releasePointerCapture) {
      try {
        this._board.releasePointerCapture(e.pointerId);
      } catch {
        // no-op
      }
    }

    this._board.removeEventListener('pointermove', this._onPointerMove);
    this._board.removeEventListener('pointerup', this._onPointerUpOrCancel);
    this._board.removeEventListener('pointercancel', this._onPointerUpOrCancel);
  }
}
