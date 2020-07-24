// Soal 1
// buatlah variabel-variabel seperti di bawah ini

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

// gabungkan variabel-variabel di atas agar menghasilkan output
// "saya Senang belajar JAVASCRIPT"

// Jawaban Soal 1
console.log("--- SOAL 1 ---");

var kalimat =
  kataPertama +
  " " +
  (kataKedua[0].toUpperCase() + kataKedua.slice(1)) +
  " " +
  kataKetiga +
  " " +
  kataKeempat.toUpperCase();
console.log(kalimat);
console.log();

// Soal 2
// buatlah variabel-variabel seperti di bawah ini

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

// ubah lah variabel di atas ke dalam integer dan lakukan jumlahkan semua variabel dan tampilkan dalam output

// Jawaban Soal 2
var strInt1 = parseInt(kataPertama);
var strInt2 = parseInt(kataKedua);
var strInt3 = parseInt(kataKetiga);
var strInt4 = parseInt(kataKeempat);
var jumlah = strInt1 + strInt2 + strInt3 + strInt4;
console.log("--- SOAL 2 ---");
console.log(jumlah);
console.log();

// Soal 3
// buatlah variabel-variabel seperti di bawah ini

// var kalimat = 'wah javascript itu keren sekali';

// var kataPertama = kalimat.substring(0, 3);
// var kataKedua; // do your own!
// var kataKetiga; // do your own!
// var kataKeempat; // do your own!
// var kataKelima; // do your own!

// console.log('Kata Pertama: ' + kataPertama);
// console.log('Kata Kedua: ' + kataKedua);
// console.log('Kata Ketiga: ' + kataKetiga);
// console.log('Kata Keempat: ' + kataKeempat);
// console.log('Kata Kelima: ' + kataKelima);

// selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:
// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali

// Jawaban Soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own!
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25, 31); // do your own!

console.log("--- SOAL 3 ---");
console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

console.log();

// Soal 4
// buatlah variabel seperti di bawah ini

var nilai;

// pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi

// nilai >= 80 indeksnya A
// nilai >= 70 dan nilai < 80 indeksnya B
// nilai >= 60 dan nilai < 70 indeksnya c
// nilai >= 50 dan nilai < 60 indeksnya D
// nilai < 50 indeksnya E

// Jawaban Soal 4
var nilai = 88;

console.log("--- SOAL 4 ---");
if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("D");
} else {
  console.log("E");
}
console.log();

// Soal 5
// buatlah variabel seperti di bawah ini

var tanggal = 5;
var bulan = 1;
var tahun = 1991;

// ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)

// Jawaban Soal 5

console.log("--- SOAL 5 ---");
var namaBulan;
switch (bulan) {
  case 1: {
    namaBulan = "Januari";
    break;
  }
  case 2: {
    namaBulan = "Februari";
    break;
  }
  case 3: {
    namaBulan = "Maret";
    break;
  }
  case 4: {
    namaBulan = "April";
    break;
  }
  case 5: {
    namaBulan = "Mei";
    break;
  }
<<<<<<< HEAD
=======
  case 5: {
    namaBulan = "Mei";
    break;
  }
>>>>>>> cadbf27d2276f39c138fcb3d05fda71d71654f1f
  case 6: {
    namaBulan = "Juni";
    break;
  }
  case 7: {
    namaBulan = "Juli";
    break;
  }
  case 8: {
    namaBulan = "Agustus";
    break;
  }
  case 9: {
    namaBulan = "September";
    break;
  }
  case 10: {
    namaBulan = "Oktober";
    break;
  }
  case 11: {
    namaBulan = "November";
    break;
  }
  case 12: {
    namaBulan = "Desember";
    break;
  }
  default: {
    console.log("tidak dilahirkan");
    break;
  }
}

var namaBulan = namaBulan.toUpperCase();
console.log(tanggal + " " + namaBulan + " " + tahun);
