console.log("Hello World!");
console.log(" I am " + 25 + " years old. ");
console.log(` I am ${25} years old. `);
console.log((0.1 + 0.2)==(0.1 + 0.2));
console.log((0.1 + 0.3)==(0.1 + 0.2));

if (true){
    var x =  10;
    const y = 20;
    console.log(x);
    console.log(y);
}
console.log(x);


function name(firstName, lastName){
return firstName + lastName;
}
console.log(name("Hussam", "Almofarreh"));

function mean(n){
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += n[i];
    }
    return sum/n.length;
}
console.log(mean([10, 20, 50, 80]));