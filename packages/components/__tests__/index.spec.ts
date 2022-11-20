describe('index __tests__', () => {
  const fib = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  };

  test('__tests__ fib', () => {
    expect(fib(40)).toStrictEqual(165580141);
  });
});

