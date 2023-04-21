// // const list = document.querySelectorAll('.list')
// // const itemBox = document.querySelectorAll('.itemBox')

// for (let i = 0; i < list.length; i++) {
//   list[i].addEventListener('click', function () {
//     for (let j = 0; j < list.length; j++) {
//       list[j].classList.remove('active')
//     }
//     this.classList.add('active')

//     // let dataFilter = this.getAttribute('data-filter')
//     for (let z = 0; z < itemBox.length; z++) {
//       itemBox[z].classList.remove('active')
//       itemBox[z].classList.add('hide')
//       if (
//         itemBox[z].getAttribute('data-item') ==
//           this.getAttribute('data-filter') ||
//         this.getAttribute('data-filter') == 'all'
//       ) {
//         itemBox[z].classList.remove('hide')
//         itemBox[z].classList.add('active')
//       }
//     }
//   })
// }

const list = document.querySelectorAll('.list')
const itemBox = document.querySelectorAll('.itemBox')
console.log(list)
console.log(itemBox)

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active')
    }
    this.classList.add('active')

    let dataFilter = this.getAttribute('data-filter')
    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove('active')
      itemBox[k].classList.add('hide')
      if (
        itemBox[k].getAttribute('data-item') == dataFilter ||
        dataFilter == 'all'
      ) {
        itemBox[k].classList.remove('hide')
        itemBox[k].classList.add('active')
      }
    }
  })
}
