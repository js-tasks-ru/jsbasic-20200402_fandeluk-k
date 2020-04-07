/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name.length < 4 || name == "" || name.includes(" ")) {
    return false;
  } else {
    return true;
  }
}

function sayHello() {
  const userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}

sayHello("user");
