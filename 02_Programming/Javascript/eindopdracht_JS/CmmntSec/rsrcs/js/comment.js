let textField = document.querySelector('textarea')
let backUp = textField.getAttribute('placeholder')
let btn = document.querySelector('.btn')
let clear = document.getElementById('clear')

textField.onfocus = function(){
    this.setAttribute('placeholder', ' ')
    this.style.borderColor = '#333'
    btn.style.display = 'flex'
}

textField.onblur = function () {
    this.setAttribute('placeholder', backUp)

}

clear.onclick = function(){
    btn.style.display = 'none'
    textField.value = ''
}

const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parentContainer = e.target.closest(".comment__container");
    let _id = parentContainer.id;
    if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
      );
      childrenContainer.forEach((child) => child.classList.toggle("active"));
    }
  })
);