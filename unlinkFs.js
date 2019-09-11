//Unlink FS  = Hapus data/file

//Panggil library FS
const fs = require('fs');

/*Baca file terserah.txt apakah ada filenya? menggunakan fs.readfile */
fs.readFile('terserah.txt', async (err, data) => {

     //Jika data tidak ditemukan
     if(err) return console.log("Data tidak ditemukan!");

     //Jalankan console.log dulu menggunakan await
     await console.log("Data ditemukan!")

     //Data ditemukan kita langsung eksekusi delete
     fs.unlink('terserah.txt', (err) => {
         //Jika gagal delete
        if(err) return console.log("Gagal hapus data!");

        //Jika berhasil delete
        console.log("Hapus data berhasil!")
     })
})