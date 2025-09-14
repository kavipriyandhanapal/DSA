function palindrome(n) {
  const flag = false;
  if (n < 0) return flag;

  const val = n.toString();
  let start = 0;
  let end = val.length - 1;

  for (let i = 0; i < val.length; i++) {
    if (val[start] !== val[end]) return false;
    console.log(val[start], val[end]);
    if (start > end) break;
    start++;
    end--;
  }

  return true;
}

console.log(palindrome(-123));




//optimized apporach

function palindrome(n) {
  if (n < 0) return false; // negatives are never palindrome

  const val = n.toString();
  let start = 0;
  let end = val.length - 1;

  while (start < end) {
    if (val[start] !== val[end]) return false;
    console.log(val[start], val[end]);
    start++;
    end--;
  }

  return true;
}

console.log(palindrome(-123)); // false
console.log(palindrome(121));  // true
console.log(palindrome(1221)); // true
console.log(palindrome(10));   // false
