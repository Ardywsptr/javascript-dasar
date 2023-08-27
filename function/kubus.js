const sisiA = parseInt(prompt("Masukan sisi kubus A :"));
const sisiB = parseInt(prompt("Masukan sisi kubus B :"));

// function volumeKubus(a) {
//     volume = a ** 3;
//     return volume;
// }

// let kubusA = volumeKubus(parseInt(sisiA));
// let kubusB = volumeKubus(parseInt(sisiB));

// function jmlVolumeDuaKubus(x, y) {
//     return x + y;
// }


// refactoring
function jmlVolumeDuaKubus(a, b) {
    return a ** 3 + b ** 3;
}

console.log(jmlVolumeDuaKubus(sisiA, sisiB));