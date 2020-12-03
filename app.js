let x = 1;
let y = 4;
let z = -1;

if ((x <= 2 && y >= 3) && z === 0){
    console.log("x est plus petit que 2 et y est plus grand que 4 et z est égal à 0")
}

if ((x <= 2 && y >= 3) || z === 0){
    console.log("x est plus petit que 2 et y est plus grand que 4")
}

let paragraphe = document.getElementById('paragraphe')
if (x <= 2){
    paragraphe.innerHTML=(x <= 2).toString();
}
else {
    paragraphe.innerHTML=(x >= 2).toString();
}

let result = document.getElementById('result')
if (y >= 3){
    result.innerHTML=(y >= 3).toString();
}
else{
    result.innerHTML=(y <= 3).toString();
}

let resultat = document.getElementById('resultat')
if (z === 0){
    resultat.innerHTML=(z === 0).toString();
}

else{
    resultat.innerHTML=(z >= 0).toString();
}