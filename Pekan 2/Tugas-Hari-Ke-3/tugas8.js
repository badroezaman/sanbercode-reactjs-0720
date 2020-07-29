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

const kata1 = "saya";
const kata2 = "adalah";
const kata3 = "seorang";
const kata4 = "frontend";
const kata5 = "developer";

let kalimat = (kata1, kata2) => {
  return `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;
};

gabungan = kalimat(kata1, kata2);
console.log(gabungan);

console.log();
// Soal 3
console.log("-- Soal 3 --");
// buatlah class Book yang didalamnya terdapat property name, totalPage, price. lalu buat class baru komik yang extends terhadap buku dan mempunyai property sendiri yaitu isColorful yang isinya true atau false

const buku = {
  name: "Bumi Manusia",
  totalPage: 535,
  price: 100000,
};

class Book {
  constructor(name, totalPage, price) {
    this.name = name;
    this.totalPage = totalPage;
    this.price = price;
  }
  get name1() {
    return this.name;
  }
  get totalPage1() {
    return this.totalPage;
  }
  get price1() {
    return this.price;
  }
  present() {
    return this.name;
  }
}
class Komik extends Book {
  constructor(name) {
    super(name);
    this.isColorful = true;
  }
  show() {
    return (
      this.present() +
      " " +
      this.totalPage +
      " " +
      this.price +
      " " +
      this.isColorful
    );
  }
}
buku2 = new Komik("komik", 10, 10000);
console.log(buku2.show());
