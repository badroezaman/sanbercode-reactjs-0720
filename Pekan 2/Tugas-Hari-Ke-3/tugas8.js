// Soal 1
console.log("-- Soal 1 --");
// buatlah fungsi menggunakan arrow function luas lingkaran dan keliling lingkaran dengan arrow function lalu gunakan let dan const di dalam soal ini

console.log("-- Luas Lingkaran --");
const phi = 3.14;
let r = 5;
let r2 = r ** 2;

let luas = (phi, r2) => {
  return phi * r2;
};

luasLingkaran = luas(phi, r2);
console.log(luasLingkaran);
console.log();

console.log("-- Keliling Lingkaran --");
let keliling = (phi, r) => {
  return 2 * phi * r;
};

kelilingLingkaran = keliling(phi, r);
console.log(kelilingLingkaran);

console.log();
// Soal 2
console.log("-- Soal 2 --");
// buatlah variable seperti di bawah ini:

// let kalimat = ""
// buatlah fungsi menambahkan kata di kalimat dan gunakan penambahan kata tersebut dengan template literal, berikut ini kata kata yang mesti di tambahkan

// saya
// adalah
// seorang
// frontend
// developer

let kalimat = "";

const tambahkanKata = (str) => {
  kalimat = `${kalimat} ${str}`;
};

tambahkanKata("saya");
tambahkanKata("adalah");
tambahkanKata("seorang");
tambahkanKata("frontend");
tambahkanKata("developer");

console.log(kalimat);

console.log();
// Soal 3
console.log("-- Soal 3 --");
// buatlah class Book yang didalamnya terdapat property name, totalPage, price. lalu buat class baru komik yang extends terhadap buku dan mempunyai property sendiri yaitu isColorful yang isinya true atau false

class Book {
  constructor(name, totalPage, price) {
    this.name = name;
    this.totalPage = totalPage;
    this.price = price;
  }
}
class Komik extends Book {
  constructor(name, totalPage, price, isColorful) {
    super(name, totalPage, price);
    this.isColorful = isColorful;
  }
}

let buku = new Komik("Bumi Manusia", 535, 100000);
let dragonBall = new Komik("Dragon Ball", 20, 20000, true);
let conan = new Komik("Conan", 30, 30000, false);

console.log(buku, dragonBall, conan);
