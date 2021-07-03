// Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
// convert temperatute 
let inoc = 20;
let inof = 72;
if(inoc){
    console.log((inoc * 9 / 5) + 32 + "°F");
}
    if(inof){
        console.log(Math.round((inof - 32) * 5 / 9) + "°C" );
    }
