// Tehtävä 1: Merkkijonojen yhdistäminen

function moi (nimi){
    let tervehdys = "Hei, " +nimi +" mitä kuuluu?";
    return tervehdys;
}
console.log(moi("Jesse"));
console.log(moi("Tiina"));

// Tehtävä 2: Neliöön korottaminen

function pot (x){
    return x ** 2;
}
console.log(pot(3));
console.log(pot(5));

// Tehtävä 3: Täysi-ikäisyys

function adult (a){
    if(a >= 18) {
    return "täysi-ikäinen"
    } else {
    return "alaikäinen"
    }    
}
console.log(adult(26));
console.log(adult(16));
console.log(adult(18));

// Tehtävä 4: Suurempi luku

function larger (x, y){
    if (x > y) {
        return "Annetuista luvuista x ja y suurempi on: x"
    }else{
        return "Annetuista luvuista x ja y suurempi on: y"
    }
}
console.log(larger(16, 20))
console.log(larger(20, 4))
console.log(larger(2000, 2000))

// Tehtävä 5: Kolmion pinta-ala

function tri (x, y, z){

}
console.log(tri(20, 20))
console.log(tri(150, 380))

// Tehtävä 6: Osamäärä

