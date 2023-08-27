// 1. .length -> mengetahui jumlah elemen array

// let arr = ["Ardy", "Cici", "Putra"];
// console.log(arr.length); /** 3 */




// 2. join() -> menampilkan/menggabungkan seluruh isi arrray dan mengubahnya menjadi string (digunakan untuk menampilkan isi array) -> mengembalikan nya menjadi string

// let arr = ["Ardy", "Cici", "Putra"];

// console.log(arr.join(" ")); /** Ardy Cici Putra */




// 3. push() -> menambahkan elemen baru di akhir elemen array -> mengembalikan nya array lama yg di perbarui

// let arr = ["Ardy", "Cici", "Putra"];
// arr.push("Awalia")

// console.log(arr); /** ['Ardy', 'Cici', 'Putra', 'Awalia'] */




// 4. pop() -> menghapus/menghilangkan elemen terakhir pada array -> mengembalikan nya array lama yg di perbarui

// let arr = ["Ardy", "Cici", "Putra"];
// arr.pop()

// console.log(arr); /** ['Ardy', 'Cici'] */




// 5. unshift() -> menambahkan elemen baru pada elemen pertama array -> mengembalikan nya array lama yg di perbarui

// let arr = ["Ardy", "Cici", "Putra"];
// arr.unshift("Awalia")

// console.log(arr); /** ['Awalia', 'Ardy', 'Cici', 'Putra'] */




// 6. shift() -> menghapus/menghilangkan elemen pertama pada array -> mengembalikan nya array lama yg di perbarui

// let arr = ["Ardy", "Cici", "Putra"];
// arr.shift()

// console.log(arr); /** ['Cici', 'Putra'] */




// 7. splice() -> menambahkan elemen baru ditengah-tengah elemen array -> mengembalikan nya array lama yg di perbarui

// let arr = ["Ardy", "Cici", "Putra"];

// // splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
// arr.splice(2, 0, "Awalia", "Nirwan") /** hanya menambahkan elemen */
// // arr.splice(2, 1, "Awalia", "Nirwan") /** menghapus dan menambahkan elemen */

// console.log(arr); /** ['Ardy', 'Cici', 'Awalia', 'Nirwan', 'Putra'] */




// 8. slice() -> memisahkan isi array menjadi array yang baru -> mengembalikan array baru

// let arr = ["Ardy", "Cici", "Awalia", "Nirwan", "Putra"];

// // slice(indexAwal, indexAkhir)
// let arr2 = arr.slice(1, 3);

// console.log(arr2); /** Cici - Awalia */




// 9. forEach() -> looping untuk memanggil elemen didalam array & mmengeksekusi function yg disediakan sekali untuk setiap elemen array -> mengembalikan string
// terdapat 3 elemen pada function forEach yaitu elemen, index(opsional), dan array(opsional)

// let arr = ["Ardy", "Cici", "Awalia", "Nirwan", "Putra"];

// tradisional -> function expression
// arr.forEach(function (elemen, index, array) {
//     console.log(`index ke - ${index} \n elemen ke - ${index+1} \n  nama: ${elemen} \n array : ${array} \n`);
// })

// atau

// modern -> arrow function
// arr.forEach((elemen, index, array) => {
//     console.log(`index ke - ${index} \n elemen ke - ${index+1} \n  nama: ${elemen} \n  array : ${array} \n`);
// })




// 10. map() -> hampir sama seperti foreach, yg membedakannya map merupakan looping yang mengembalikan (callback) nilai berupa array baru -> mengembalikan array baru
// terdapat 3 elemen pada function forEach yaitu elemen, index(opsional), dan array(opsional)

// let numbers = [1, 2, 3, 4, 5];

// tradisional -> function expression
// let refactNumbers = numbers.map(function (elemen, index, array) {
//     return elemen * 2;
// })

//  modern -> arrow function
// let refactNumbers = numbers.map((elemen, index, array) => {
//     return elemen * 2;
// })

// console.log(numbers);
// console.log(refactNumbers);




// 11. sort() -> mengurutkan isi nilai array -> mengembalikan array lama yg di perbarui
// jika parameter sort kosong maka secarra default mengurutkan berdasarkan string/Unicode UTF-16

// let numbers = [1, 13, 23, 2, 5];

// // default
// numbers.sort();
// console.log(numbers); /** [1, 13, 2, 23, 5] */

// // perbandingan ascending
// numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(numbers); /** [1, 2, 5, 13, 23] */

// // perbandingan desceding
// numbers.sort((a, b) => {
//     return b - a;
// })
// console.log(numbers); /** [23, 13, 5, 2, 1] */




// 12. find() -> mencari satu elemen tertentu di dalam array, dan mengembalikan nilai pertama yg ditemukan -> mengembalikan string

// let numbers = [1, 13, 12, 23, 2, 5, 4];

// let refactNumbers = numbers.find((elemen) => {
//     return elemen % 2 == 0;
// })

// console.log(refactNumbers); /** 12 */




// 13. filter() -> mencari semua elemen di dalam array, dan mengembalikan semua elemen yg ditemukan dalam bentuk array baru -> mengembalikan array baru

// let numbers = [1, 13, 12, 23, 2, 5, 4];

// let refactNumbers = numbers.filter((elemen) => {
//     return elemen % 2 == 0;
// })

// console.log(refactNumbers); /** [12, 2, 4] */