/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tBody = document.querySelector("tbody");
  let tBodyRows = Array.from(tBody.rows);

  tBodyRows.forEach((td) => {
    let dataAvailble = td.cells[3].getAttribute("data-available");
    let userAge = td.cells[1].textContent;
    let genderSwitch = td.cells[2].textContent;

    dataAvailble == "true" ? td.classList.add("available") : false;
    dataAvailble == null ? td.setAttribute("hidden", "hidden") : false;
    userAge < 18
      ? td.setAttribute("style", "text-decoration: line-through")
      : false;

    if (genderSwitch == "m") {
      td.classList.add("Male");
    } else {
      td.classList.add("Flame");
    }
  });
}
