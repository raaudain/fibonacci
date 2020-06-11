// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where each number is the sume of the preceeding two.


// function fibonacci(n){
//   // Solution #1
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++){
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];


//   // Solution #2
//   if (n < 2){
//     return n;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }


// Solution #3

function fib(n, memo){
  memo = memo || {};

  if (memo[n]){
    console.log(memo[n])
    return memo[n]
  }

  if(n < 2){
    return n;
  }

  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

// fibonacci(5);
fib(50);
