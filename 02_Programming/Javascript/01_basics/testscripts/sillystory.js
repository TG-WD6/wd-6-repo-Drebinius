var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
// VAR BUITEN EEN FUNCTION IS VOOR HELE SCRIPT, BINNEN EEN FUNCTION ALLEEN VOOR DESBETREFFENDE FUNCTION

// var xItem = randomValueFromArray(insertX);
// var yItem = randomValueFromArray(insertY);
// var zItem = randomValueFromArray(insertZ);

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
console.log(insertX.length);

const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
console.log(insertY.length);

const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
console.log(insertZ.length);

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertX:','xItem');
    // newStory = newStory.replace('::', );
    newStory = newStory.replace(':insertY:','yItem');
    newStory = newStory.replace(':insertZ:','zItem');
    
    if (customName.value !== 'Bob') {
        const name = customName.value;

    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature = Math.round(94);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}