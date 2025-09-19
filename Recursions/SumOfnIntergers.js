function fun(n) {
  if (n < 1) return 0;

  return n + fun(--n);
}

console.log(fun(5));
