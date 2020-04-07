/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    if (n === 1) {
      return 1;
    } else {
      res *= i;
    }
  }
  return res;
}
factorial(0);
factorial(1);
factorial(3);
factorial(5);
