// membuat object




// object literal

// let mhs = {
//     nama: "Ardy",
//     nim: 181011450168,
//     email: "ardywirasaputra@gmail.com",
//     jurusan: "Teknik Informatika",
//     bio: function () {
//         console.log(`halo nama saya ${this.nama}, dengan nim ${this.nim} dan jurusan ${this.jurusan}`);
//     }

// }
// console.log(mhs);
// mhs.bio();


// let mhs2 = {
//     nama: "Cici Awalia",
//     nim: 181011450162,
//     email: "ciciawalia@gmail.com",
//     jurusan: "Teknik Industri",
//     bio: function () {
//         console.log(`halo nama saya ${this.nama}, dengan nim ${this.nim} dan jurusan ${this.jurusan}`);
//     }
// }
// console.log(mhs2);
// mhs2.bio();





// function declaration

function objectMahasiswa(nama, nim, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    mhs.bio = function () {
        console.log(`halo nama saya ${this.nama}, dengan nim ${this.nim}, dan jurusan ${this.jurusan}`);
    }

    return mhs;
}

let mhs = objectMahasiswa("ardy", 181011450168, "ardywirasaputra@gmail.com", "Teknik Informatika");
mhs.bio();
console.log(mhs);

let mhs2 = objectMahasiswa("cici", 181011450132, "ciciawalia@gmail.com", "Teknik Industri");
mhs2.bio();
console.log(mhs2);




// constructor (new Object()) -> sering digunakan

// function Mahasiswa(nama, nim, email, jurusan) {
//     this.nama = nama;
//     this.nim = nim;
//     this.email = email;
//     this.jurusan = jurusan;
// }

// let mhs = new Mahasiswa("ardy", 181011450168, "ardywirasaputra@gmail.com", "Teknik Informatika");
// console.log(mhs);

// let mhs2 = new Mahasiswa("cici", 181011450132, "ciciawalia@gmail.com", "Teknik Industri");
// console.log(mhs2);