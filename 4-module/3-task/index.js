/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tBody = table.querySelector("tbody");
  let tBodyRows = Array.from(tBody.rows);
  tBodyRows.forEach((tr) => {
    console.log(tr);
    let dataAvailble = tr.cells[3].getAttribute("data-available");
    let userAge = tr.cells[1].textContent;
    let genderSwitch = tr.cells[2].textContent;

    dataAvailble == "true" ? tr.classList.add("available") : false;
    dataAvailble == "false" ? tr.classList.add("unavailable") : false;
    dataAvailble == null ? tr.setAttribute("hidden", "hidden") : false;
    userAge < 18
      ? tr.setAttribute("style", "text-decoration: line-through")
      : false;

    if (genderSwitch == "m") {
      tr.classList.add("male");
    } else {
      tr.classList.add("female");
    }
  });
}
