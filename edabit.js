//Find the Smallest and Biggest Numbers
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  //Sum of Cube
function sumOfCubes(arr) {
    return arr.reduce((sum, num) => sum + num ** 3, 0);
}

// Example usage:
console.log(sumOfCubes([1, 2, 3])); // Output: 36 (1³ + 2³ + 3³)
console.log(sumOfCubes([]));        // Output: 0 (empty array)
console.log(sumOfCubes([4, 5, 6])); // Output: 341 (4³ + 5³ + 6³)

//Filter out Strings from an Array
function filterArray(arr) {
    return arr.filter(n => typeof n === 'number');
  }
  

//Is the Number Symmetrical?
const isSymmetrical = num => {
	const str = String(num);
	return str.split('').reverse().join('') === str;
}

//Special arrays
const isSpecialArray = a => a.every((v, i) => v%2 == i%2);

//How much is true?
const countTrue = r => r.filter(Boolean).length

//Array of Multiples

//Convert Key, Values in an Object to Array
function objectToArray(obj) {
    return Object.keys(obj).map(key => [key, obj[key]])
  }  

//25-Mile Marathon
function marathonDistance(d){
	return d.reduce((total, item)=>total +=Math.abs(item), 0)==25
}
//Square Every Digit
function squareDigits(num) {
    return Number(
        String(num)
            .split('')
            .map(digit => digit ** 2)
            .join('')
    );
}

// Example usage:
console.log(squareDigits(9119)); // Output: 811181 (9²1²1²9²)
console.log(squareDigits(1234)); // Output: 14916 (1²2²3²4²)
console.log(squareDigits(0));    // Output: 0


