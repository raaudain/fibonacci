// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where each number is the sume of the preceeding two.


function fibonacci(n){
  // Solution #1
  const result = [0, 1];
  let c = 0
  for (let i = 2; i <= n; i++){
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
    console.log(c, a + b)
    c+=1
  }
  return result[n];


  // // Solution #2
  // if (n < 2){
  //   return n;
  // }

  // return fibonacci(n - 1) + fibonacci(n - 2);
}


// Solution #3


function fib(n, memo={}){
  const result = [0, 1]
  if (memo[n]){
    result.push(memo[n]);
    return memo[n]
  }

  if(n === 0) return 0;
  if(n === 1) return 1;

  // if(n < 3){
  //   return 1;
  // }

  console.log(fib(n - 1, memo) + fib(n - 2, memo))
  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

}

fibonacci(20);
// fib(50);
//printFib(12)
