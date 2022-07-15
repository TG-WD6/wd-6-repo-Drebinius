// const field = document.querySelector('textarea');
// const backUp = field.getAttribute('placeholder')
// const btn = document.querySelector('.btn');
// const clear = document.getElementById('clear')
// const submit = document.querySelector('#submit')
// // const comments = document.querySelector('#comment-box')
// const comments = document.getElementById('comment-box');

// // array to store the comments
// const comments_arr = [];

// // to generate html list based on comments array
// const display_comments = () => {
//   let list = '<ul>';
//    comments_arr.forEach(comment => {
//     list += `<li>${comment}</li>`;
//   })
//   list += '</ul>';
//   comments.innerHTML = list;
// }

// clear.onclick = function(event){
//   event.preventDefault();
//   // reset the array  
//    comments_arr.length = 0;
//   // re-genrate the comment html list
//   display_comments();
// }

// submit.onclick = function(event){
//     event.preventDefault();
//     const content = field.value;
//     if(content.length > 0){ // if there is content
//       // add the comment to the array
//       comments_arr.push(content);
//       // re-genrate the comment html list
//       display_comments();
//       // reset the textArea content 
//       field.value = '';
//     }
// }

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