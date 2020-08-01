// Soal 1
console.log("--- SOAL 1 ---");
//ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3],
};

console.debug(objDaftarPeserta);
console.log();

// Soal 2
console.log("--- SOAL 2 ---");
// anda diberikan data-data buah seperti di bawah ini
// 1.nama: strawberry
//   warna: merah
//   ada bijinya: tidak
//   harga: 9000
// 2.nama: jeruk
//   warna: oranye
//   ada bijinya: ada
//   harga: 8000
// 3.nama: Semangka
//   warna: Hijau & Merah
//   ada bijinya: ada
//   harga: 10000
// 4.nama: Pisang
//   warna: Kuning
//   ada bijinya: tidak
//   harga: 5000

// uraikan data tersebut menjadi array of object dan munculkan data pertama

var dataBuah = [
  { nama: "strawberry", warna: "merah", adaBijinya: false, harga: 9000 },
  { nama: "jeruk", warna: "oranye", adaBijinya: true, harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000 },
  { nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000 },
];

console.debug(dataBuah[0]);
console.log();

// Soal 3
console.log("--- SOAL 3 ---");
// buatlah variable seperti di bawah ini

// var dataFilm = []

// buatlah fungsi untuk menambahkan dataFilm tersebut yang itemnya object adalah object dengan property nama, durasi , genre, tahun

var dataFilm = [];

function tambahDataFilm(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  });
}

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);
console.log();

// Soal 4
console.log("--- SOAL 4 ---");
// Terdapat sebuah class Animal yang memiliki sebuah constructor name, default property band= 4 dan cold_blooded = false.

// Release 0

// Buatlah class Animal yang menerima satu parameter constructor berupa name. Secara default class Animal akan memiliki property yaitu legs (jumlah kaki) yang bernilai 4 dan cold_blooded bernilai false.

// Gunakan method getter untuk mengakses property di dalam class

console.log("--- Release 0 ---");

class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = "false";
  }
  get _name() {
    return this.name;
  }
  get _legs() {
    return this.legs;
  }
  set _legs(amount) {
    this.legs = amount;
  }
  get _cold_blooded() {
    return this.cold_blooded;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
console.log();

// // Buatlah class Frog dan class Ape yang merupakan inheritance dari class Animal. Perhatikan bahwa Ape (Kera) merupakan hewan berkaki 2, hingga dia tidak menurunkan sifat jumlah kaki 4 dari class Animal. class Ape memiliki function yell() yang menampilkan “Auooo” dan class Frog memiliki function jump() yang akan menampilkan “hop hop”.

console.log("--- Release 1 ---");

class Ape extends Animal {
  constructor(name, amount) {
    super(name);
    this.legs = amount;
  }
  yell() {
    return console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);
  }
  jump() {
    return console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti", 2);
sungokong.yell(); // "Auooo"
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);

console.log();

// Soal 5
console.log("--- SOAL 5 ---");
// Terdapat sebuah class dengan nama Clock yang ditulis seperti penulisan pada function, ubahlah fungsi tersebut menjadi class dan pastikan fungsi tersebut tetap berjalan dengan baik. Jalankan fungsi di terminal/console Anda untuk melihat hasilnya. (tekan tombol Ctrl + C pada terminal untuk menghentikan method clock.start())

// Hint: Fokus soal ini hanya pada kegiatan mengubah struktur function Clock menjadi class. Jangan lupa menambahkan constructor di dalam class, dan ubah function di dalam Clock menjadi method pada class.

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
