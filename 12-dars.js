//Array
// const arr = ['olma', 'anor', 'nok', 12, 1, 2, 3, 'London', 'ewe']


// let arr1 = new Array(1, 2, 3, 4, 5)
// console.log(arr1[0])    ikkinchi usul

// console.log(arr[arr.length - 1])   //ixirgi qiymatni olish


// let numbers = [1, 2, 3, 4]
// numbers.push(5)    //arrayga malumot qo'shish
// numbers[0] = 123 //yangilash
// numbers.pop()  //exirgi elemntni ochiradi
// numbers.shift()  //boshidagi elemntni ichiradi

// numbers.unshift(1234)   //boshiga malumot qoshadi
// console.log(numbers)


// JavaScript Array — bu bir nechta qiymatlarni bitta o‘zgaruvchida saqlash imkonini beruvchi obyekt turi. Array ichidagi qiymatlar indekslar (raqamlar) orqali boshqariladi.




// ==========================================================

// let arr = [1, 2, 3, 'salom', function () { }, true, { name: "Rahmadjon" }, null,'salom']

// console.log(arr[arr.length - 2])
// console.log(arr.at(-2))

// let arr = [1, 2, 3]

// arr.unshift('salom')
// arr.push('alik')


// arr[4] = 'Taraqqiyot center'
// arr.pop()
// arr.shift(1)

// let arr = [1, 2, 3]
// let arr1 = [4, 5, 6]

// console.log(arr)
// console.log(arr.toString())   // bu array elementlarini stringga utkazadi
// console.log(arr + arr1)

// console.log(arr.concat(arr1, [7, 8], []))  arraylani qo'shish

// let newArr = []
// newArr[10] = 2
// console.log(newArr.length)

// console.log(arr.join("=="))    // array elemetlarini birlashtirish

// let test = ['salom', 'nima gapla', 1, 2, 3, 'Ali', 4]

// console.log(Array.isArray(test))

// if(Array.isArray(test)){
//     test.push('yaxshi')
// }
// else {
//     console.log('array emas')
// }
// console.log(test)

// let test = [3, 'salom', 23, 'nima gapla', 1, 2, 3, 'Ali', 4]

// for (let i = 0; i < test.length; i++) {
//     console.log(test[i])
// }

// test.forEach((index, item) => {
//     // console.log(index, item)
// })

// let num = []
// let matn = []
// test.forEach((item) => {
//     if (typeof item == 'number') {
//         num.push(item)
//     }
//     else {
//         matn.push(item)
//     }
// })

// console.log('raqamlar=>', num.length)
// console.log('matnli qiymatlar=>', matn.length)

// console.log(typeof 12)

// let arr = [3, 'salom', 23, 'nima gapla', 1, 2, 3, 'Ali', 4]

// let newForetch = arr.forEach((element) => {
//     return element + 200
// })

// let newArr = arr.map((element) => {
//     return element + 200
// }
// )
// console.log('forEatch=>',newForetch)
// console.log('map=>', newArr)

let num = [12, 5, 7, 8, 4, 8, 0, 5, 3, 'salom']

let result = num.filter((element) => element  == 'salom')

console.log(result)

