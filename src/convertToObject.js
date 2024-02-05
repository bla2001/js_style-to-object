'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .map(pair => pair.trim())
    .filter(pair => pair)
    .map(pair => pair.split(':'))
    .reduce((styles, [propertyName, propertyValue]) => {
      styles[propertyName.trim()] = propertyValue.trim();

      return styles;
    }, {});

  return sourceArray;
}

module.exports = convertToObject;
