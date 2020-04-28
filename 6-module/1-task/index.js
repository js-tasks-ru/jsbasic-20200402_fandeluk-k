/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    let table = document.createElement("table");
    this.elem = table;
    this.searchItem(rows);
    this.elem.addEventListener("click", (event) => this.onClick(event));
  }
  searchItem(rows) {
    for (let item of rows) {
      this.name = item.name;
      this.age = item.age;
      this.salary = item.salary;
      this.city = item.city;

      let template = ` <tr>
          <td>${this.name}</td>
          <td>${this.age}</td>
          <td>${this.salary}</td>
          <td>${this.city}</td>
          <td><button>X</button></td>
      </tr>
      `;
      this.elem.insertAdjacentHTML(`beforeend`, template);
    }
  }

  onClick(event) {
    let trDel = event.target.closest("tr");
    if (event.target.closest("button")) {
      trDel.style.display = "none";
    }
  }
}
