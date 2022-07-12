const resultCardTemplate = document.querySelector('[data-template')
let data = JSON.parse();

Object.keys(data).forEach(function (k) {
  localStorage.setItem(k, data[k]);
});

function search( ) {
    let searchFor = document.getElementById('searchbar').value // user input turned into searchFor

                                            function createItem() {
                                                localStorage.setItem('nameOfItem', 'value'); //this should save search in locStor
                                            } 
                                            createItem()


}