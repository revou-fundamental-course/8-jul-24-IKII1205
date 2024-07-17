function hitungBMI() {
    
    // mengambil input id (berat) lalu mengubah ke tipe float
    var berat = parseFloat(document.getElementById("berat").value); 
    
    // mengambil input id (tinggi) lalu mengubah ke tipe float, namun pada urusan tinggi saya harus mengubahnya kedalam meter terlebih dahulu dengan cara saya bagi 100 agar dapat penghitungan yang akurat dan juga tidak menyulitkan user untuk mengubah / menghitung tinggi bdannya kedalam meter 
    var tinggi = parseFloat(document.getElementById("tinggi").value) / 100; 
    
    // ini itu bagian proses validasinya min apakah ini inputannya angka atau bukan, jika bukan maka tidak bisa menginput selain angka 
    if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0) {
        document.getElementById("hasilBMI").innerText = "Masukkan berat dan tinggi badan yang valid.";
        return; 
    }
    
    // ini merupakan proses penghitungannya dengan rumus yang sudah diberikan 
    var bmi = berat / (tinggi * tinggi);
    
    // ini merupakan proses agar menampilkan hasilnya 2 angka di belakang koma
    document.getElementById("hasilBMI").innerText = "BMI Anda: " + bmi.toFixed(2);
    
    //ini merupakan bagian ketentuan klasifikasi dari hasil perhitungan di atas 
    var kategori;
    if (bmi < 18.5) {
        kategori = "Anda berada dalam kategori kekurangan berat badan"; // Jika BMI kurang dari 18.5 masuk katergori kekurangan berat badan 
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = "Anda berada dalam kategori ideal"; // Jika BMI antara 18.5 dan 24.9 masuk mategori ideal
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        kategori = "Anda berada dalam kategori kelebihan berat badan"; // Jika BMI antara 25.0 dan 29.9 maka masuk kategori kelebihan berat bdan 
    } else {
        kategori = "Anda berada dalam kategori obesitas "; // Jika BMI lebih dari 30 maka masuk kategori obesitas, kenapa tidak seperti yang atas karena else merupakan pintu akhir yang mana kategori 30 ke atas itu obesitas 
    }
    
    // ini merupakan pengeluaran hasil dari perhitungan  
    document.getElementById("kategoriBMI").innerText = "Kategori: " + kategori;

    // ini digunakan agar tombol resetnya muncul ketika sudah selesai melakukan penghitungan
    document.getElementById("resetButton").style.display = "block";
}
    // ini fungsi tombol reset
    function resetForm() {
        document.getElementById("bmiForm").reset();
        document.getElementById("hasilBMI").innerText = "";
        document.getElementById("kategoriBMI").innerText = "";
        document.getElementById("resetButton").style.display = "none";
    }


