/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
const checkSpam = (str) => {
  let str2 = str.toLowerCase();
  if (str2.includes("1xbet") || str2.includes("xxx")) {
    return true;
  } else {
    return false;
  }
};
