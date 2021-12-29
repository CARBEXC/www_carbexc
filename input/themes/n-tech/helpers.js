/*
 * Custom theme helpers for Handlebars.js
 */

let themeHelpers = {
    showExcerpt: function(index, excludedValues) {
        excludedValues = excludedValues.split(',').map(n => parseInt(n, 10));
        excludedValues.sort()
        excludedValues.reverse();
        excludedValues.push(0);
        let maxValue = excludedValues[0];
        let modResult = (index + 1) % maxValue;
        if (excludedValues.indexOf(modResult) > -1) {
            return false;
        }
        return true;
    }
};

module.exports = themeHelpers;