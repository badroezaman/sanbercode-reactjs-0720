console.log("--- LUAS LINGKARAN ---");
function hitung_luas_lingkaran() {
  return phi * r * r;
}

var phi = 3.14;
var r = 5;

var hasil_luas_lingkaran = hitung_luas_lingkaran();
console.log(hasil_luas_lingkaran);
console.log();

console.log("--- LUAS SEGITIGA ---");
function hitung_luas_segitiga() {
  return (1 / 2) * a * t;
}

var a = 3;
var t = 5;

var hasil_luas_segitiga = hitung_luas_segitiga();
console.log(hasil_luas_segitiga);
console.log();

console.log("--- LUAS PERSEGI ---");
function hitung_luas_persegi() {
  return s * s;
}

var s = 5;

var hasil_luas_persegi = hitung_luas_persegi();
console.log(hasil_luas_persegi);
console.log();
