let ostokset = ["keksiä", "karkkia", "limpparia"];
let määrät = [4, 10, 2];
// console.log(`osta ${ostokset[0]}, ${määrät[0]}`);

for(let i=0; i < ostokset.length; i++){
    console.log(`osta ${ostokset[i]} ${määrät[i]}`);
}

let henkilö1 = {nimi: "Tiina", ikä: 46, luonne: "itsepäinen"};
let henkilö2 = {nimi: "Suvi", ikä: 28, luonne: "kiintoisa"};
let henkilö3 = {nimi: "Anni", ikä: 28, luonne: "rento"};
// console.log(henkilö.nimi, henkilö.ikä, henkilö.luonne);
// console.log(henkilö);
let henkilöt = [henkilö1, henkilö2, henkilö3];

henkilöt.forEach(function(henkilö){
    console.log(henkilö);
})

ostokset.push("roskapusseja");
console.log(ostokset);
ostokset.pop();
console.log(ostokset);