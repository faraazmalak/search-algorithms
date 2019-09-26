  const factorial = (number, breakpoint = 0) => number > 0 && number >= breakpoint ? number * factorial(--number, breakpoint)  : 1;


//console.log(factorial(10));


module.exports = factorial;