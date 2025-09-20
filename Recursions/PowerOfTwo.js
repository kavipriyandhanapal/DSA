function sum(n) {
  let val;
  console.log(n)
  if (n == 1) return true;
  val = n % 2;
  if (val != 0) return false
  
   //if(n<=0) return false -- > correct way because the divide values goes 0 or  below 0

  return sum(n/2)
}

console.log(sum(17))
