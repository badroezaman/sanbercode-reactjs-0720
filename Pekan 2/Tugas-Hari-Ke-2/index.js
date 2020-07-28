// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "Komik", timeSpent: 1000 },
];

// lanjutkan code pada index.js untuk memanggil function readBooks. Buku yang akan dihabiskan adalah buku-buku di dalam array books. Pertama function readBooks menerima input waktu yang dimiliki yaitu 10000 ms (10 detik) dan books pada indeks ke-0. Setelah mendapatkan callback sisa waktu yang dikirim lewat callback, sisa waktu tersebut dipakai untuk membaca buku pada indeks ke-1. Begitu seterusnya sampai waktu habis atau semua buku sudah terbaca. Untuk melihat output, jalankan file index.js dengan node js :

//  $ node index.js

// Tulis code untuk memanggil function readBooks di sini

// readBooks(4000, books[0], function (sisaWaktu) {
//   console.log(sisaWaktu);
//   readBooks(sisaWaktu, books[1], function (sisaWaktu) {
//     console.log(sisaWaktu);
//     readBooks(sisaWaktu, books[2], function (sisaWaktu) {
//       console.log(sisaWaktu);
//       readBooks(sisaWaktu, books[3], function (sisaWaktu) {});
//       // console.log(check4);
//     });
//   });
// });

function recursiveRead(waktu, i) {
  readBooks(waktu, books[i], function (sisaWaktu) {
    // console.log(sisaWaktu);
    if (waktu >= sisaWaktu) {
      // console.log(sisaWaktu);
      readBooks(sisaWaktu, books[1], function (sisaWaktu) {
        // console.log(sisaWaktu);
        readBooks(sisaWaktu, books[2], function (sisaWaktu) {
          // console.log(sisaWaktu);
          readBooks(sisaWaktu, books[3], function () {});
          // console.log(sisaWaktu);
          return;
        });
      });
    } else {
      return;
    }
  });
}

recursiveRead(10000, 0);
