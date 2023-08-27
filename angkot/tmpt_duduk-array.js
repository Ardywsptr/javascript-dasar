let tmptDuduk = ["Ardy", "Wirasaputra", "Cici"];

let tambahPenumpang = (namaPenumpang, tmptDuduk) => {
    // jika angkot kosong
    if (tmptDuduk.length == 0) {
        // tambah penumpang di awal array
        tmptDuduk.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return tmptDuduk;
    }
    // namun jika angkot terisi
    else {
        // telusuri seluruh kursi dari awal
        for (let i = 0; i < tmptDuduk.length; i++) {
            // jika ada kursi kosong
            if (tmptDuduk[i] == undefined) {
                // tambah penumpang di kursi tersebut
                tmptDuduk[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return tmptDuduk;
            }
            // jika sudah ada nama yang sama
            else if (tmptDuduk[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(`${namaPenumpang} sudah ada didalam`);
                // kembalikan isi array dan keluar dari function
                return tmptDuduk;
            }
            // jika seluruh kursi terisi
            else if (i == tmptDuduk.length - 1) {
                // tambah penumpang di akhir array
                tmptDuduk.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return tmptDuduk;
            }
        }
    }
}



let hapusPenumpang = (namaPenumpang, tmptDuduk) => {
    // jika angkot kosong
    if (tmptDuduk.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
        console.log("angkot kosong, tidak mungkin ada yang turun");
        // kembalikan isi array dan keluar dari function
        return tmptDuduk;
    }
    // namun jika angkot ada isi nya
    else {
        // telusuri seluruh isi kursi dari awal
        for (let i = 0; i < tmptDuduk.length; i++) {
            // jika nama penumpang sesuai
            if (tmptDuduk[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya menjadi undefined
                tmptDuduk[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return tmptDuduk;
            }
            // jika tidak ada nama yang sesuai
            else if (i == namaPenumpang.length - 1) {
                // tampilkan pesan kesalahannya
                console.log(`nama ${namaPenumpang} tidak ada`);
                // kembalikan isi array dan keluar dari function
                return tmptDuduk;
            }
        }
    }
}