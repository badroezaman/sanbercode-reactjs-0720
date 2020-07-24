// Soal 1
console.log("--- SOAL 1 ---");
//Tulislah sebuah function dengan nama halo() yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.

function halo() {
  return "halo sanbers!";
}

var textHalo = halo();
var txtHalo =
  textHalo[0].toUpperCase() +
  textHalo.slice(1, 4) +
  " " +
  textHalo[5].toUpperCase() +
  textHalo.slice(6);

console.log(txtHalo);
console.log();

// Soal 2
console.log("--- SOAL 2 ---");
// Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.

function kalikan(num1 = 12, num2 = 4) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48
console.log();

// Soal 3
console.log("--- SOAL 3 ---");
// Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”

function introduce(name, age, address, hobby) {
  var x =
    "'Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!'";
  return x;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"
