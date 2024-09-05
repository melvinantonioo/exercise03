//1. multipication number 
// input: 9 , output (9x1),(9x2),(9xN),(9x10)

let _number: number = 9;
let _urutan3: number = 10;
let _result3: number = 1;

for (let i: number = 1; i <= _urutan3; i++) {
    console.log(i)
    console.log(`${_number} x ${i}`)
    _result3 += _number * i;

}
console.log(_result3)


//2. check the string if the string is a palindrome or not
let _round: string = "madam"

if (_round === _round) {
    console.log(`${_round} is a palidrome`)
} else {
    console.log(`${_round} is not a palidrome`)
}


//3. convert centimeter to kilometer
let _cm: string = "cm";
let _awal: number = 100000;
let _m: string = "m";

let _centimeters = _awal + _cm;
let _meters = _awal + _m;
let _kmFormula;

if (_cm) {
    _kmFormula = _awal / 100000
} else if (_m) {
    _kmFormula = _awal / 1000   //wrong formula
}
console.log(_kmFormula)

console.log(_centimeters)

if (_cm) {
    console.log(`${_centimeters} is ${_kmFormula + "km"} `)
} else if (_m) {
    console.log(`${_meters} is ${_kmFormula + "km"} `)
}


//4. remove the first occurence 
// string: "Hello World" , search string: "ell" , -> "Ho World"

let stringAwal: string = "Hello World";
let searchString: string = "ell";

// Build-in Method Untuk Replace elemen , isi parameter dengan variable yang ingin digunakan , kemudian berikan valu ("")
let stringResult: string = stringAwal.replace(searchString, "");
console.log(stringResult)


//5. capitalize The First Word of Sentence
// "hello world" -> "Hello World"

let string1: string = "hello world";
let stringHasil: any = string1.split(" ")                      // Split the string 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" ")

console.log(stringHasil)





//6. Replace The Initial Word , And return Into Inverted Capital Position

let string: string = 'The QuiCk BrOwN Fox';
let result: string = '';

for (let i = 0; i < string.length; i++) { //Looping Huruf , mendapatkan huruf satu satu , dengan limit dari string.length
    let char = string[i]   // variabel menghandle semua hurufnya , didalam array
    console.log(char)

    //check if the uppercase , switch to uppercase 
    if (char == char.toUpperCase()) {    // kondosi jika huruf nya Kapital 
        result += char.toLowerCase()    // Ubah ke Huruf kecil
    }
    // atau , ubah to upperCase
    else {
        result += char.toUpperCase()   // kemudian Jika ada huruf kecil , ubah ke huruf besar 
    }
}
console.log(result)



//7. Write A Code , To Find The largest of two given Integer
const int1: number = 47;
const int2: number = 27;
let largestNumber: number;

if (int1 > int2) {
    largestNumber = int1;
} else {
    largestNumber = int2;
}
console.log(largestNumber);


//8. write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let a1: number = 42;
let a2: number = 27;
let a3: number = 18;

let bArr: any = [a1, a2, a3];
let arrGabung: any;
//just Join
if (true) {
    arrGabung = bArr.join(",");
} else {
    console.log("didnt match")
}
console.log(arrGabung)

//sort descending
bArr.sort().join(",");
console.log(bArr)

//sort ascending
bArr.sort((a: any, b: any) => b - a);
console.log(bArr)


//9. shows 1 if the input is a string, 2 if the input is a number,3 for others data type

const inputChecker = (value: any) => {
    let hasil;

    if (typeof value === 'string') {
        console.log(`hasil dari ${value} =` + 1)
        return hasil = `hasil dari ${value} =` + 1
    } else if (typeof value === 'number') {
        return hasil = `hasil dari ${value} =` + 2
    } else {
        return hasil = `hasil dari ${value} =` + 3
    }
}
console.log(inputChecker("halo"))
console.log(inputChecker(2));
console.log(inputChecker([1, 2, 3]));
console.log(inputChecker({}));


//10. change every letter a into * from a string of input
//Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

let stringInit: string = "An apple a day keeps the doctor away";

let stringChange: string = stringInit.replace(/a/g, "*");
console.log(stringChange)


