// let nama = "Arifatwa" // type data string
// let usia = 20 // type data integer
// let tinggiBadan = 160.3 // type data float atau double
// let beratBadan
// let pacar = null // type data yang tidak punya nilai 
// beratBadan = 50.3

// if (pacar == null){
//     pacar = "udah punya"
// }

// alert(`nama saya ${nama}, usia saya itu ${usia}, tinggi badan saya ${tinggiBadan}, dan saya pacar saya ${pacar}, berat badan saya ${beratBadan}`)



let nama = prompt("masukkan nama anda")
let usia = prompt("masukkan usia anda")
let tinggiBadan = prompt("masukkan ntinngi badan anda")
let beratBadan
let pacar = prompt("apakah anda sudah punya pacar?")
if (pacar == "ya"){
    pacar = prompt("siapa nama pacar anda?")
    alert(`pacar saya ${pacar}`)
} else{
    alert('kasiaann')
}
beratBadan = prompt("masukkan berat badan anda")
alert(`nama saya ${nama}, usia saya itu ${usia} tahun, tinggi badan khum ${tinggiBadan}, pacar saya itu.. ${pacar}, dan berat badan saya ${beratBadan}`)

 

let saldoAwal = prompt("Masukkan saldo awal: ")
let saldoTambahan = prompt("Masukkan saldo akhir: ")

// const totalSaldo = saldoAwal + saldoTambahan 
// const totalSaldo = saldoAwal - saldoTambahan
// const totalSaldo = saldoAwal * saldoTambahan
// const totalSaldo = saldoAwal / saldoTambahan
const totalSaldo = saldoAwal % saldoTambahan

alert(`saldo awal saya adalah Rp.${saldoAwal} dan saldo tambahan saya adalah Rp.${saldoTambahan} saldo akhir saya adalah Rp.${totalSaldo}`)
