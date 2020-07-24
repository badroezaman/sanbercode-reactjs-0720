// Soal 1
console.log("--- SOAL 1 ---");

console.log("LOOPING PERTAMA");
var y = 20;
for (x = 2; x <= y; x += 2) {
  console.log(x + " - I love coding");
}

console.log("LOOPING KEDUA");
for (x = y; x > 0; x -= 2) {
  console.log(x + " - I will become a frontend developer");
}

console.log();

// Soal 2
console.log("--- SOAL 2 ---");

var y = 20;
for (x = 1; x <= y; x++) {
  //   console.log(x);
  if (x % 3 == 0 && x % 2 == 1) {
    console.log(x + " - I Love Coding");
  } else if (x % 2 == 1) {
    console.log(x + " - Santai");
  } else if (x % 2 == 0) {
    console.log(x + " - Berkualitas");
  }
}

console.log();

// Soal 3
console.log("--- SOAL 3 ---");

var j = 7;
for (y = 1; y <= j; y++) {
  var pagar = "";
  for (z = 1; z <= y; z++) {
    pagar += "#";
  }
  console.log(pagar);
}

console.log();

// Soal 4
console.log("--- SOAL 4 ---");

var kalimat = "saya sangat senang belajar javascript";
var arr = kalimat.split(" ");
console.log(arr);

console.log();

// Soal 5
console.log("--- SOAL 5 ---");

var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
daftarBuah.sort();
for (x = 0; x < daftarBuah.length; x++) {
  console.log(daftarBuah[x]);
}
