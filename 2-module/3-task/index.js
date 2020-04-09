let calculator = {
  read(a, b) {
    // a = +prompt("Напиши первое число");
    // b = +prompt("Напиши второе  число");
    this.a = a;
    this.b = b;
  },
  sum() {
    return (this.res1 = this.a + this.b);
  },
  mul() {
    return (this.res2 = this.a * this.b);
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
