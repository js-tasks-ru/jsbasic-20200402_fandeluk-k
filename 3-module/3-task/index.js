/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str
    .split("-")
    .map((vl, i) => (i == 0 ? vl : vl[0].toUpperCase() + vl.slice(1)))
    .join("");
}
