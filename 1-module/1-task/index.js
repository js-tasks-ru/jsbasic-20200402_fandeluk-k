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
factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
