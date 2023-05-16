function number_cardinality(number) {
    const lastDigit = number % 10;
  
    switch (lastDigit) {
      case 0:
        return 'zero';
      case 5:
        return 'five';
      default:
        return number % 2 === 0 ? 'even' : 'odd';
    }
  }
  
console.log(number_cardinality(20));  
console.log(number_cardinality(35));  
console.log(number_cardinality(12));   
console.log(number_cardinality(14));   