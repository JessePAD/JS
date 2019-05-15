// Demo
const b = 200;
let a = 100;
let c = a + b;
console.log("Tulosta c:n arvo", c);

if( a > b) {
    "kissa"
} else {
    "koira"
}

function summa(a, b) {
    let aNum = Number(a);
    let bNum = Number(b);
    if(isNaN(bNum) || isNaN(aNum)) {
        return "anna kaksi lukua!"
    } else {
        let vastaus = aNum + bNum;
        return vastaus;
    }
}

console.log("summa-funktion testi:", summa("3","Jesse"));