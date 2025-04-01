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


const obj1 = {
    name: "Rahmadjon",
    fio: "Abdullayev",
    age: "23",
    gender: "male",
    job: "devoloper",
    skisl: "nodejs Express"
}
for (let i in obj1){
    console.log(obj1[i])
}
