//USE map or filter to compare object 1 to object 2
//If they find a match, add the match to match array,
//If they dont match, then add to different array
//each section will have match array, differentOne and differentTwo array
const toDo = JSON.parse(localStorage.getItem('toDoList'));
const sponsonOl = document.querySelector('#sponsonOl');
const hullNumOne = document.querySelector('#hullNumOne');
const hullNumTwo = document.querySelector('#hullNumTwo')
const sponsonSame = document.querySelector('#sponsonSame');
const sponsonDiffOne = document.querySelector('#sponsonDiffOne');
const sponsonDiffTwo = document.querySelector('#sponsonDiffTwo');

function init() {
    hullNumOne.textContent = toDo[1].hullNum[0]
    hullNumTwo.textContent = toDo[2].hullNum[0]
    compareSponson(toDo[1].sponson, toDo[2].sponson)
}

function compareSponson(array1, array2) {
    let sponsonSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let SponsonDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let SponsonDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeSponson(sponsonSameArr, SponsonDiffOne, SponsonDiffTwo)
}

function writeSponson(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        sponsonSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        sponsonDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        sponsonDiffTwo.append(list)
    });
}

init()