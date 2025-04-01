// let yosh = prompt('yosh kiting')

// if (yosh > 90) {
//     alert('haliham tirikmisiz')
// }

// else if (yosh >= 16) {
//     alert('siz pasport ola olasiz');
// }

// else if (yosh == 0) {
//     alert('Tizimda qandeydur xatolik bor')
// }
// else if (yosh < 16) {
//     alert('Siz pasport olish yoshiga yetmagansiz');
// }
// else {
//     alert('Momalum xatolik')
// }


// ===============================================================
// ===============================================================
// switch case


// let kun = 'hafta kunlari';
// switch (kun) {
//     case 'dushanba':
//         console.log('ha bugun dushanba kurs yoq')
//         break
//     case 'seshanba':
//         console.log('ha bugun seshanba kurs bor');
//         break
//     case 'chor':
//         console.log('chor');
//         break
//     case 'pay':
//         console.log('pay');
//         break
//     default:
//         console.log('Bunday kun mavjud emas')
// }

// =====================================
// shart ? natija : 'xato

let ism = 'Rahmadjon';
if (ism == 'Sardor') {
    console.log('rost')
}
// ism == 'Rahmadjon' ? console.log('rost') : console.log('yolgon'); // =>uchlik operatori



ism == 'Rahmadjon' ? console.log('Rahmadjon ekan') : ism == 'Jasur' ? console.log('jasur ekan') : ism == 'Sardor' ? console.log('sardor ekan') :console.log('Bimadim nomalum shaxs')