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
function memoize(fn){
  const cache = {};

  return function(...args){
    if (cache[args]){
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n){
  if(n < 2){
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// fibonacci(5);
fib(15);
memoize(fib);