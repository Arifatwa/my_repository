
// prompt untuk mengetahui saldo akhir apa yang di inputkan user
// menentukan hari dan tanggal ada sat ini di pc kalian


// Tugas 1
// prompt untuk mengetahui saldo akhir apa yang di inputkan user

// let saldoAwal = prompt("masukkan saldo awal anda")
// let saldoTambahan = prompt("masukkan saldo tambahan")
// const totalSaldo = Number(saldoAwal) + Number(saldoTambahan)
// alert(`saldo awal saya adalah Rp.${saldoAwal}, dan saldo tambahan saya sebesar Rp.${saldoTambahan}, jadi total saldo saya saat ini adalah Rp.${totalSaldo} `)
// console.log(`saldo awal saya adalah ${saldoAwal}, dan saldo tambahan saya sebesar ${saldoTambahan}, jadi total saldo saya saat ini adalah ${totalSaldo} `)



// Tugas 

// let hari = new Date().getDay()

// if (hari == 1){
//     hari = "senin"
// } else if (hari == 2){
//     hari = "selasa"
// } else if (hari == 3){
//     hari = "rabu"
// } else if (hari == 4){
//     hari = 'kamis'
// } else if (hari == 5){
//     hari = 'jumat'
// } else if (hari == 6){
//     hari = 'sabtu'
// } else if (hari == 7){
//     hari = "hari tidak di temukam"
// }

// console.log(`hari ini adala hari ${hari}`)
// alert(`hari ini adala hari ${hari}`)

let bulan = new Date().getMonth()

if (bulan == 1){
    bulan = "january"
} else if (bulan == 2){
    bulan = "february"
} else if (bulan == 3){
    bulan = "Maret"
} else if (bulan == 4){
    bulan = 'April'
} else if (bulan == 5){
    bulan = 'Mei'
} else if (bulan == 6){
    bulan = 'Juni'
} else if (bulan == 7){
    bulan = "juli"
} else if (bulan == 8){
    bulan = "Agustus"
} else if (bulan == 9){
    bulan = 'September'
} else if (bulan == 10){
    bulan = 'Oktober'
} else if (bulan == 11){
    bulan = 'November'
} else if(bulan = 12){
    bulan = "Desember"
}else{
    bulan = "bulan tidak di tentukan"
}

console.log(`bulan ini adala bulan ${bulan}`)
alert(`bulan ini adala bulan ${bulan}`)
