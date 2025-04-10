// let obj = {
//     name: "Sardorbek",
//     fio: "Mamajanov",
//     yosh: 17,
//     'ism fio':'Sardorbek Mamajanov'
// };

// // obj.name = 'Rahmadjon'   //malumot yangilash
// // delete obj.fio //ochirish

// console.log(obj['ism fio'])

// let ism = 'Sardorbek'
// let fio = "Mamajanov"

// let obj = { ism, fio };
// console.log(obj.ism)

// let obj = {
//     name: "Sardorbek",
//     fio: "Mamajanov",
// };
// // Object.freeze(obj)  //muszlatish
// Object.seal(obj)  //bu faqat yangilashga ruxsat beradi
// obj.age = 17; //yangi malumot qo'shish agar yoq bolsa
// obj.name = "Taraqqiyot"
// delete obj.fio
// console.log(obj)


// let ism = "Sardorbek";
// let parol = '12345678';
// let userData = { ism, parol }

// const mbbt = {
//     ism: 'Sardorbek',
//     fio: 'Mamajanov',
//     email: 'email@.com',
//     parol: '123456789'
// }

// if (userData.ism == mbbt.ism) {
//     console.log('ism tasdiqlandi')
// }
// else if (userData.ism !== mbbt.ism) {
//     console.log('bunday foydalanuchi mavjud emas')
// }

// if (userData.parol == mbbt.parol) {
//     console.log('parol tasdiqlandi')
// }
// else if (userData.parol.length < 8) {
//     console.log('kamida 8 ta belgi')
// }
// else if (userData.parol !== mbbt.parol) {
//     console.log('parol mos kelmadi')
// }

// ===============================================================


// const obj = {
//     name: "Rahmadjon",
//     fio: "Abdullayev",
//     'full name': { job: 'devoloper', age: "23", boshqa: { gender: "male" } }
// }

// console.log(obj.name)
// console.log(obj["full name"].boshqa.gender)

// const obj1 = {
//     name: "Rahmadjon",
//     fio: "Abdullayev",
//     fulname: { job: "devoloper" }
// }

// let obj2 = obj1

// obj1.name = "Sardor"
// obj2.fio = "Sardor"

// console.log(obj1)
// console.log(obj2)

// let obj2 = {}
// Object.assign(obj2, obj1) //nusxa olish bir birigga bo'gli emas yuzaki

// // obj1.name = "Sardor"
// // delete obj2.fio

// obj1.name = "Sardor"
// obj1.fulname.job = 'tiecher'

// console.log(obj1)
// console.log(obj2)



// const obj1 = {
//     name: "Rahmadjon",
//     fio: "Abdullayev",
//     fulname: { job: "devoloper" }
// }
// let obj2 = structuredClone(obj1)  //churuq nusa object ichidagi objectl;arniha nushalaydi
// obj1.name = 'Sardor'
// obj1.fio = 'Mamajanov'
// obj1.fulname.job = 'Talaba'

// console.log(obj1)
// console.log(obj2)


// const name = 'nomalum'
// const obj1 = {
//     name: "Rahmadjon",
//     fio: "Abdullayev",
//     age: "23",
//     child: {
//         childname: 'Sardorbek'
//     }
// }
// let { name: yangiName, child: { childname } } = obj1

// console.log(name)
// console.log(yangiName)
// console.log(childname)


// let obj1 = {
// name: 'Rahmadjon',
// fio: "Abdullayev",
// age: "23",
// sayHi: ({ job, age }) => {
//     console.log('salom => ', job, age)
// }

// Mainfunc() {
//  console.log(this.name)
// console.log(obj1.name)
// }
// }
// obj1.sayHi({ job: "Designer", age: 14 })

// let newObj = obj1
// obj1 = null

// newObj.Mainfunc()

//Garbiche collection  => bu javascriptda ishlatilinmayotgan objectlarni avtomatik ochirib tashlanshi
//this => bu javascriptdagi eng katta objectlardan bir va u qayerda ishlatilisna qiymati usha yerga teng boldi

// let obj = {
//     name: "Rahmadjon",
//     child: {
//         baxo: 2,
//         baxo1: 3,
//         baxo2: 5,
//     }
// }

// let getData = ({ name, child: { baxo, baxo1, baxo2 } }) => {
//     return `${name} ${(baxo + baxo1 + baxo2) / 3}`
// }
// console.log(getData(obj))


// let obj1 = {
//     name: 'Rahmadjon',
//     age: 12,
//     child: {
//         childname: "Sardorbek",
//         age: 99,
//         child: {
//             childname: "Ali",
//             age: 1,
//         }
//     }
// }

// obj1 = obj1.child
// obj1 = obj1.child
// console.log(obj1)

// let natija = 0

// while (1) {
//     if (obj1) {
//         natija += obj1.age
//     }
//     else {
//         break
//     }
//     obj1 = obj1.child
// }
// console.log(natija)



let obj = {
    name: "Rahmadjon",
    age: 12,
    job: "usta",
}
let newObj = {  ...obj, gender: 'male', fio: "Aliyev" }

console.log(obj)
//SPREAD OPERATOR yani ... bu object malumotlarini uzgartirish uchun ishlatilinadi ...obj bu xolda objet qiymatlari tashqariga chiqadi





