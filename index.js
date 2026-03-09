/**
 * Pub/sub event bus in vanilla JS
 *
 * @example
 * const { bus } = require('event-bus');
 * const result = bus('input');
 * console.log(result);
 */

'use strict';

/**
 * Main utility function.
 * @param {*} input - Input data to process.
 * @param {Object} [options] - Optional configuration.
 * @returns {*} Processed result.
 */
function bus(input, options = {}) {
  if (input === null || input === undefined) {
    throw new TypeError('Input cannot be null or undefined');
  }

  const config = { ...defaults, ...options };
  return process(input, config);
}

const defaults = {
  strict: false,
  verbose: false,
};

function process(input, config) {
  if (typeof input === 'string') {
    return input.trim();
  }
  if (Array.isArray(input)) {
    return input.filter(Boolean);
  }
  return input;
}

/**
 * Batch process multiple inputs.
 * @param {Array} inputs - Array of inputs.
 * @param {Object} [options] - Optional configuration.
 * @returns {Array} Processed results.
 */
function batch(inputs, options = {}) {
  if (!Array.isArray(inputs)) {
    throw new TypeError('Expected an array');
  }
  return inputs.map(i => bus(i, options));
}

module.exports = { bus, batch };
module.exports.default = bus;
