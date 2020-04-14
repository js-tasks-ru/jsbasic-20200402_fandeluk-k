/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ulElement = document.createElement("ul");
  friends.forEach((value) => {
    ulElement.innerHTML += `
  <li> ${value.firstName} ${value.lastName} </li>
  `;
  });
  return ulElement;
}
