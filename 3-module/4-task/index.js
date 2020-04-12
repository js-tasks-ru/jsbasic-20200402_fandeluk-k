/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let str = "";
  data.forEach((item, index) => {
    if (+age >= +item.age) {
      str += `${item.name}, ${item.balance}\n`;
    }
  });
  return str.slice(0, -1);
}
