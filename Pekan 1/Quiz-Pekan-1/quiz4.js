console.log("--- Tampilkan Bintang ---");
//ketentuan: nama functionnya adalah tampilkanBintang(jumlahBintang)

// var j = 7;
// for (y = 1; y <= j; y++) {
//   var bintang = "";
//   for (z = j; z >= y; z--) {
//     bintang += "*";
//   }
//   console.log(bintang);
// }

function tampilkanBintang(jumlahBintang) {
  var jumlahBintang = "";
  for (var y = 1; y <= 7; y++) {
    for (var z = 7; z >= y; z--) {
      jumlahBintang += "*";
    }
    // console.log(jumlahBintang);
    return jumlahBintang;
  }
}
console.log(jumlahBintang);
// tampilkanBintang(jumlahBintang);
