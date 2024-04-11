function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1],
	  7:['IV', 4],
	  8:['IX', 9],
	  9:['XL', 40],
	  10['XC', 90],
	  11:['CD', 400],
	  12:['CM', 900]
    };

  //your code here
   let result = '';

  // Iterate through symbols
  for (let i = 0; i <13; i++) {
    let symbol = obj[i][0];
    let value = obj[i][1];
    // While input number is greater than or equal to current value
    while (num >= value) {
      // Subtract value from num and add corresponding symbol to result
      result += symbol;
      num -= value;
    }
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
