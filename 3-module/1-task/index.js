/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let arr = [];
  users.forEach((value, i) => {
    arr.push(value.name);
  });
  return arr;
}
