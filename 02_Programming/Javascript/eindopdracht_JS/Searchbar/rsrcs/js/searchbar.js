const searchContainer = document.getElementById('search__container')
const searchInput = document.getElementById('searchbar')

const searchButton = document.querySelector('[data-class-srch')
const deleteButton =document.querySelector('[data-class-del')

const searches = document.getElementById('searches')


function searchAdd() {  // pusht inhoud van searchbar naar localStorage on ''search''
    searchStorage.push(searchInput.value)
    localStorage.setItem('searches', JSON.stringify(searchStorage))
}

let searchStorage = localStorage.getItem('searches')
    ? JSON.parse(localStorage.getItem('searches')) : [ ]; //localstorage items become array

    
    dupeRemover = () => {// apply on searchstorage to filter for duplicate searches
      let z = [ ]
  for (let i = 0; i < searchStorage.length; i++) {
    if (z.indexOf(searchStorage[i]) == -1) {
      z.push(searchStorage[i])
    }
  }
  return z
}
let parsedStorage = dupeRemover(searchStorage)//applied dupeRemover to searchstorage

function acomp(bar, arr) {
  let searchbarActive
  bar.addEventListener('input', function (e) {
    let x,
         y,
         i,
         val = this.value;

    closeAllLists() 
    if (!val) {
      return false 
    } 
    searchbarActive = -1
    x = document.createElement('div');
    x.setAttribute('id', this.id + ' acomp__list');
    x.setAttribute('class', 'acomp__item');

    this.parentNode.appendChild(x);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].toUpperCase().indexOf(val.toUpperCase()) != -1) {
        for(i = 0; i < arr.length; i++) {
             y = document.createElement('div');
                y.className = ('result'+ (i+1))
       

        let pos = arr[i].toUpperCase().indexOf(val.toUpperCase()),
          str1 = arr[i].substring(pos, pos + val.length);

          y.innerHTML = arr[i].replace(str1, '<strong>' + str1 + '</strong>');
          y.innerHTML += `<input type='hidden' value=''` + arr[i] + '>';

          y.addEventListener('click', function (e) {
            // debugger
            // searchInput.textContent =  this.innerText;
            bar.value = this.innerText
            // debugger
            closeAllLists();
   })
  x.appendChild(y)
    }
  }
}})

function closeAllLists(item) {
  let x = document.getElementsByClassName('acomp__item');
  for (let i = 0; i < x.length; i++) {
    if (item != x[i] && item != bar) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
}

searchButton.addEventListener('click', (e) => {
  searchAdd()
})

acomp(document.querySelector('#searchbar'), parsedStorage)//apply auto fnc on parsedStorage, used to be searchstorage before filter fnc






// searchButton.addEventListener('click', (e) => {
//         e.preventDefault()
//         searchStorage.push(searchInput.value)
//         localStorage.setItem('searches', JSON.stringify(searchStorage))
//         searchLister(searchInput.value)
//         searchInput.value = ''
// })



// const searchLister = (srchTxt) => {
//   const search = document.createElement('li')
//   search.innerHTML = srchTxt + ` <button onclick="deleteSearch(this)" data-class-del>x</button>`;
//   searches.appendChild(search)
// }

// // deleteButton.addEventListener('click', (e) => {
// //   e.preventDefault()
// //   .innerHTML = ''
// // })

// const fetchSearches = JSON.parse(localStorage.getItem('searches'))
// fetchSearches.forEach((search) => {
//   searchLister(search)
// })

// const deleteSearch = (btn) => {
//   let el = btn.parentNode
//   const index = [...el.parentElement.children].indexOf(el)
//   searchStorage.splice(index, 1)
//   localStorage.setItem('searches', JSON.stringify(searchStorage))
//   el.remove
// }

