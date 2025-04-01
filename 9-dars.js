// funtion
// function declorations
// function salomber() {
//    console.log('salom') 
// }
// // function — kalit so‘z.
// // salomlash — funksiya nomi.
// // {} ichida bajariladigan kod yoziladi.
// salomber();
// Paramet va  function salomber(paramet = defaultParametr){
// console.log(parametr)
// }
// salomber("argument")

// function salomber(ism, son='10', son3='23') {
//    console.log(ism, son, son3)
// }

// salomber("Rahmajon",111,223)

// function hisobla(son, son1) {
//    let natija = son * son1
//    if (isNaN(natija)) {
//       console.log('son emas')
//    }
//    else {
//       console.log(natija)
//    }
// }

// hisobla(13, 2)
// function hisobla() {
//    let natija = 4 + 5
//    return natija
// }
// // return — funksiyadan qiymat qaytaradi va uni to‘xtatadi.

// let natija = 4 + 5
// console.log(natija + 11)

// let natija2 = hisobla()
// console.log(natija2)

// let sum = 0
// function hisobla() {
//    let natija = 4 + 5
//    sum += natija
// }
// hisobla()
// console.log(sum+12)

// function hisobla(son1, son2, son3) {
//    let natija = (son1 + son2 + son3) / son3
//    return natija
// }
// console.log(hisobla(2, 6,3))

// --------------------------------------------------------------------------------
//

// console.log(hisobla(2, 6, 3))
// function hisobla(son1, son2, son3) {
//    let natija = (son1 + son2 + son3) / son3
//    return natija
// }


// Function Expression
// const his = 12+3
// const hisobla = function () {
//    return 12 + 3
// }
// hisobla = 12+3
// console.log(hisobla())
// Arrow function

// const hisobla = (amal, a, b) => {
//    switch (amal) {
//       case 'kvadrat':
//          console.log(a ** b)
//          break
//       case 'ayrish':
//          console.log(a - b)
//          break
//       case 'qoshish':
//          console.log(a + b)
//          break
//       case 'kopaytirish':
//          console.log(a * b)
//          break
//       default:
//          console.log('bunday amal mavjud emas')
//    }
// }
// hisobla('ayrdsish', 15, 2)

// fetch('https://cbu.uz/oz/arkhiv-kursov-valyut/json/')
//     .then((res) => res.json())
//     .then((data) => {
//      console.log(data)
//     })
