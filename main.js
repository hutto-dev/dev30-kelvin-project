// today's forecast in Kelvin
const kelvin = 273;

// kelvin to celsius conversion
const celsius = kelvin - 273;

// celsius to fahrenheit conversion
let fahrenheit = celsius * (9 / 5) + 32;

// rounding down fahrenheit temp
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton`);
