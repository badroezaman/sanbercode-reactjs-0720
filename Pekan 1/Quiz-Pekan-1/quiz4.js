console.log("--- Tampilkan Bintang ---");
//ketentuan: nama functionnya adalah tampilkanBintang(jumlahBintang)

var j = 7;
for (y = 1; y <= j; y++) {
  var bintang = "";
  for (z = j; z >= y; z--) {
    bintang += "*";
  }
  console.log(bintang);
}
