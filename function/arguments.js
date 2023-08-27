function tambah() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

let coba = tambah(1, 20, 1, 2, 5);
console.log(coba);