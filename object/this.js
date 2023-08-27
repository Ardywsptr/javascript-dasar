// secara default this == window -> object window

// default
// let a = 10;  /** default -> variable scope = this/window -> object window*/
// console.log(this.a);  /** 10 */




// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log("hello word");
// }

// this.halo(); /** window{} dan "hallo word" */
// -> callback/mengembalikan object window




// cara 2 - object literal
// let obj = {
//     a: 10,
//     nama: "Ardy",
// };

// obj.halo = function () {
//     console.log(this);
//     console.log("hello word");
// }
// obj.halo(); /** obj{} dan "hello word" */
// -> callbak/mengembalikan object yg bersangkutan/itu sendiri




// cara 3 - constructor 
function Halo() {
    console.log(this);
    console.log("hello word");
}

let obj1 = new Halo(); /** obj1{} dan "hello word" */
let obj2 = new Halo(); /** obj2{} dan "hello word" */
//-> callback/mengembalikan object yang baru dibuat