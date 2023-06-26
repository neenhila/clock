function getRandomHex() {
  /**
   * @returns {String} Returns you a hex code as string value (it starts with # automatically e.g #5f351a).
   */
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}
function getRandomNum(min, max) {
  /**
   *
   * @param {Number} min - Minimum number you want
   * @param {Number} max - Maximum number you want
   * @returns {Number} Returns you a random number between min & max values you set.
   */

  return Math.floor(Math.random() * max) - min;
}

export { getRandomHex, getRandomNum };
