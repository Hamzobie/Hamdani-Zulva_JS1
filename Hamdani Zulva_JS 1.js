//If Else dan Nested If
const uang = 20000000;
const mobil = 2;

if (uang > 10000000) {
    if (mobil > 1) {
        console.log("Aku kaya raya");
    } else {
        console.log("Aku Kaya");
    }
} else {
    console.log("Aku Biasa Aja");
}

//Switch Case
let dadu = Math.floor(Math.random() * 6) + 1;
let posisi = 0;

switch (dadu) {
    case 1:
        console.log("Maju Satu langkah");
        posisi += 1;
    case 2:
        console.log('Maju dua langkah');
        posisi += 2;
    case 3:
        console.log('Maju Tiga langkah');
        posisi += 3;
    case 4:
        console.log('Maju Empat langkah');
        posisi += 4;
    case 5:
        console.log('Maju Lima langkah');
        posisi += 5;
    case 6:
        console.log('Maju Enam langkah');
        posisi += 6;
    default:
        break;
}

//For Statement
const buku = ['buku 1', 'buku 2', 'buku 3', 'buku 4'];

console.log('Koleksi Buku saya :')
for (let i = 0; i < buku.length; i++) {
    let urut = i + 1;
    console.log(urut + '. '+ buku[i]);
}

//while & do while
let sayang = true;
let break_up = false;
let love_container = 100;

while (sayang) {
    console.log('love you')
    love_container -= 1;
    if (love_container == 0) {
        sayang = false;
    }
}

do {
    console.log('love you');
    love_container -= 2;
    if (love_container < 2) {
        break_up = true;
    }
} while (break_up == false);

//Function
function FilterAyang(Duid) {
    if (Duid > 10000000) {
        for (let i = Duid; i > 0; i -= 100000) {
            console.log('Aku Sayang Kamu!!!');
        }
    } else {
        console.log('Gak Usah Hubungin Aku Lagi!!!');
    }
}

let wang = 20000000;
FilterAyang(wang);