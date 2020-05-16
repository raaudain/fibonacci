// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where each number is the sume of the preceeding two.


function fibonacci(n){
  // Solution #1
  const result = [0, 1];

  for (let i = 2; i <= n; i++){
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

fibonacci(4);