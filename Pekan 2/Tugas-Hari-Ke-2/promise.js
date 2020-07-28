// Buatlah sebuah file dengan nama promise.js. Tulislah sebuah function dengan nama readBooksPromise yang me-return sebuah promise seperti berikut:

// di file promise.js
function readBooksPromise (time, book) {
  console.log(`saya mulai membaca ${book.name}`)
  return new Promise( function (resolve, reject){
    setTimeout(function(){
      let sisaWaktu = time - book.timeSpent
      if(sisaWaktu >= 0 ){
          console.log(`saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
          resolve(sisaWaktu)
      } else {
          console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`)
          reject(sisaWaktu)
      }
    }, book.timeSpent)
  })
}
 
module.exports = readBooksPromise


// var isMomHappy = false;
 
// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled atau janji dipenuhi
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject (ingkar)
//         }
 
//     }
// ); 