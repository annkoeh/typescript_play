// function sayHi(humanName : String) {
//     alert(`Hello, ${humanName}!`);
// }
//
// sayHi("Julius Caesar");
//
// function tryEnums() {
//     enum Comida { Sopa, Torta = 300, Fideo };
//     let miComidaFavorita = Comida.Fideo;
//     alert("value: " + miComidaFavorita);
// }
//
// tryEnums();


//two number params, returns string
let mathFunction: (num1: number, num2: number) =>
string;

function add(n1: number, n2: number): string {
    return "" + n1 + n2;
}

mathFunction = add;


const test = (name: string) => {
    alert(`Hello, ${name}`);
}
test("Jack");


const addNums = (a: number, b: number): number => a + b;
alert(addNums(2,3));

//in typescript, null and undefined can be explicitly assigned


//Default paramaters
const multByFive = (a: number, b: number=5): number =>
    a * b;
alert(multByFive(3));


//spreads; ? mark optional param;
function optionals() {
    const addThree = (a?: number, b?: number, c?: number): number =>
        a + b + c;
    const numbers: number[] = [1, 2, 3];
    alert("optionals()" + addThree(...numbers));
}
optionals();

// ... rest operator - zero or more args can be there
function spreads() {
    const addNums = (...a: number[]): number =>
        a.reduce((acc, val) => acc + val);
    const nums: number[] = [ 5, 6 ];
    alert("spreads() " + addNums(...nums));
}
spreads()

//array destructuring
let x = 1;
let y = 2;
[ x, y ] = [ y, x ];
alert(x); // 2
alert(y); // 1
