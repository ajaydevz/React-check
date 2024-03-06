// map examples!! 

const numbers = [1,2,3,4,5,6,7]
// just print same list
const num = numbers.map((num)=> num)
console.log(num)

const numbers2 = [8,9,10,11,12,13]
// doubled numbers 
const num2 = numbers2.map((num)=> num * 2)
console.log(num2)

// converting smallercase to uppercase

const words = ['hello','world']

const uppercase = words.map((word)=> word.toUpperCase())
console.log(uppercase)

// destucturing....

// basic array destructuring.

const num3 = [1,2,3,4,5,6]

const [a,b,c] = num3
console.log(a,b,c)

// object destructuring.

const person = {name:"ajay dev", age:21, place:"kozhikode"}

const {name, place , age} = person;
console.log(name, place, age)

// examples of filter

const num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = num4.filter((num)=> num % 2 == 0)
console.log(even)

// calculate sum using reduce

const num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = num5.reduce((a,b)=> a + b )
console.log(sum)


// export function add(x,y) {
//     return x + y
//   }


