/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let rows = Array.from(table.rows);
  rows.forEach((value, i) => {
    value.cells[i].style.backgroundColor = "red";
  });
}
