// Soal 1
console.log("--- SOAL 1 ---");
//ubahlah array di bawah ini menjadi object dengan property nama, jenis kelamin, hobi dan tahun lahir

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var objDaftarPeserta = {
  nama: "Asep",
  "jenis kelamin": "laki-laki",
  hobi: "baca buku",
  "tahun lahir": 1992,
};

// console.log(
//   "Nama : " +
//     objDaftarPeserta.nama +
//     "\n" +
//     "Jenis Kelamin : " +
//     objDaftarPeserta["jenis kelamin"] +
//     "\n" +
//     "Hobi : " +
//     objDaftarPeserta.hobi +
//     "\n" +
//     "Tahun lahir : " +
//     objDaftarPeserta["tahun lahir"]
// );
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
  { nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000 },
  { nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000 },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  { nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000 },
];

var arrayDataBuah = dataBuah.filter(function (item) {
  return item.nama == "strawberry";
});

console.debug(arrayDataBuah);
console.log();

// Soal 3
console.log("--- SOAL 3 ---");
// buatlah variable seperti di bawah ini

// var dataFilm = []

// buatlah fungsi untuk menambahkan dataFilm tersebut yang itemnya object adalah object dengan property nama, durasi , genre, tahun

var dataFilm = [];

function tambahFilm(item) {
  dataFilm.push(item);
}

var item = {
  nama: "Joker",
  durasi: "2h 2min",
  genre: "Crime, Drama, Thriller",
  tahun: "2019",
};

tambahFilm(item);
console.debug(dataFilm);
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
    this.anim = name;
    this.legs = 4;
    this.cold_blooded = "false";
  }
  get name() {
    return this.anim;
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
  constructor(name) {
    super(name);
  }
  yell() {
    // return console.log(this.anim + " " + "Auooo");
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

var sungokong = new Ape("kera sakti");
// console.log(sungokong.name);
sungokong.yell(); // "Auooo"

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"

console.log();

// Soal 5
console.log("--- SOAL 5 ---");
// Terdapat sebuah class dengan nama Clock yang ditulis seperti penulisan pada function, ubahlah fungsi tersebut menjadi class dan pastikan fungsi tersebut tetap berjalan dengan baik. Jalankan fungsi di terminal/console Anda untuk melihat hasilnya. (tekan tombol Ctrl + C pada terminal untuk menghentikan method clock.start())

// Hint: Fokus soal ini hanya pada kegiatan mengubah struktur function Clock menjadi class. Jangan lupa menambahkan constructor di dalam class, dan ubah function di dalam Clock menjadi method pada class.

class Clock {
  constructor({ template }) {
    var timer;

    function render() {
      var date = new Date();

      var hours = date.getHours();
      if (hours < 10) hours = "0" + hours;

      var mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;

      var secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;

      var output = template
        .replace("h", hours)
        .replace("m", mins)
        .replace("s", secs);

      console.log(output);
    }

    this.stop = function () {
      clearInterval(timer);
    };

    this.start = function () {
      render();
      timer = setInterval(render, 1000);
    };
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
