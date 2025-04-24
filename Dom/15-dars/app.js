// document
// window  =>  javascripdagi eng katta object

// const ul = document.getElementsByTagName('ul')
// const li = document.getElementsByTagName('li')
// const title = document.getElementsByTagName('h1')

// console.log(ul)
// console.log(li)

// selecttors
// function addclass(soz) {
//     title.className += ' yangi'
//     title.textContent = soz
// }
// console.log(title)

// box.innerHTML += `<h1>Yangi teg</h1>`
// console.log(box)


const title = document.querySelector('.title')
const box = document.getElementById('box')
const addTeg = document.getElementById('addTeg')

title.textContent += ' sa'     //matnni uzgartirish
title.innerHTML = '<i>salom</i> <p class="matn">nima gapla</p>'   //html element qoshish
title.className += ' yangi'   //class qoshish

addTeg.addEventListener('click', () => {
    title.className = 'title'
})

// document.addEventListener('keydown', (key) => {
// title.textContent = key.key
// })


const change = document.getElementById('change')

const box1 = document.getElementById('box1')

// box1.classList.add('text')  //class qoshish
// box1.classList.remove('text')   //classni ochirish


box1.addEventListener('click', () => {
    box1.classList.toggle('text')  // toggle clas bolasa ichiradi bolmasa qoshadi
})

console.log(box1)