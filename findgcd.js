
function findGCD(a, b) {
    // to find the min value
    let min=Math.min(a,b);
    // assign gcd value for 1
    let gcd=1;
    // loop till min value
    for(let i=0;i<=min; i++){
        // check condition
      if(a%i==0 && b%i==0){
        // if it is true 
        gcd=i;
      }
    }

    // return gcd value
    return gcd;
}


let num1 = 150;
let num2 = 180;
let gcd = findGCD(num1, num2);

console.log(`GCD of ${num1} and ${num2}:`, gcd); 
