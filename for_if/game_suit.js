konfirmasi = true;
while (konfirmasi) {
    // menangkap pilihan player
    let player = prompt("pilih: gajah, semut, orang!");

    // menangkap pilihan player dengan bilangan random
    let komputer = Math.random();

    if (komputer < 0.34) {
        komputer = "gajah";
    } else if (komputer >= 0.4 && komputer < 0.67) {
        komputer = "orang";
    } else {
        komputer = "semut";
    }

    // menentukan rules  
    let hasil = "";
    if (player == komputer) {
        hasil = "SERI!";
    } else if (player == "gajah") {
        if (komputer == "orang") {
            hasil = "kamu MENANG!";
        } else {
            hasil = "KALAH!";
        }
    } else if (player == "semut") {
        if (komputer == "gajah") {
            hasil = "kamu MENANG!";
        } else {
            hasil = "KALAH!";
        }
    } else if (player == "orang") {
        if (komputer == "semut") {
            hasil = "kamu MENANG!";
        } else {
            hasil = "kamu KALAH!";
        }
    } else {
        hasil = "kata yang anda masukan salah";
    }

    alert(`kamu memilih: ${player} dan komputer memilih: ${komputer} \nmaka hasilnya: ${hasil}`)

    konfirmasi = confirm("Apakah anda ingin main lagi?");
}

alert("terima kasih sudah bermain!")