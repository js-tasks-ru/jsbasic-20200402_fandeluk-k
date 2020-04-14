/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let rows = Array.from(table.rows);

  rows.forEach((tr, i) => {
    tr.cells[i].style.backgroundColor = "red";
  });
}
