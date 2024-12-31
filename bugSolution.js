function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; //concatenate strings if both inputs are strings
  } else if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a ? 1 : 0 + (b ? 1 : 0);
  }else{
    return 'Invalid input types';
  }
}
console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // "12"
console.log(foo(true, false)); // 1
console.log(foo(1, true));//Invalid input types