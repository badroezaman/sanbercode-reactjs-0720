var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

// Lakukan hal yang sama dengan soal no.1, habiskan waktu selama 10000 ms (10 detik) untuk membaca semua buku dalam array books.!

// Lanjutkan code untuk menjalankan function readBooksPromise

// function readAgain(waktu, i) {
//   readBooksPromise(waktu, books[i])
//     .then(function (baca) {
//       readBooksPromise(baca, books[1]).then(function (baca) {
//         readBooksPromise(baca, books[2]).then();
//       });
//     })
//     .catch(function (sisaWaktu) {
//       console.log(sisaWaktu);
//     });
// }

// readAgain(10000, 0);

// Jawaban
var booksQueue = books.length;
var time = 10000;

function execute(time, ind, booksQueue) {
  readBooksPromise(time, books[ind])
    .then(function (remainingTime) {
      time = remainingTime;
      booksQueue = booksQueue - 1;
      if (booksQueue > 0) {
        execute(time, ind + 1, booksQueue);
      }
    })
    .catch(function (error) {});
}

execute(time, 0, booksQueue);
