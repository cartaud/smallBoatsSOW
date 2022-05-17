//I should have two different local storage items, one for assessment and one of sow
//In the assessment.js file, when adding to toDo, add the response that would be used in sow to the sow local storage
const toDo = JSON.parse(localStorage.getItem('toDoList'));
const sponsonOl = document.querySelector('#sponsonOl');
const hullNumOne = document.querySelector('#hullNumOne');
const hullNumTwo = document.querySelector('#hullNumTwo')
const sponsonSame = document.querySelector('#sponsonSame');
const sponsonDiffOne = document.querySelector('#sponsonDiffOne');
const sponsonDiffTwo = document.querySelector('#sponsonDiffTwo');
const engineSame = document.querySelector('#engineSame');
const engineDiffOne = document.querySelector('#engineDiffOne');
const engineDiffTwo = document.querySelector('#engineDiffTwo');
const outdriveSame = document.querySelector('#outdriveSame');
const outdriveDiffOne = document.querySelector('#outdriveDiffOne');
const outdriveDiffTwo = document.querySelector('#outdriveDiffTwo');
const electricalSame = document.querySelector('#electricalSame');
const electricalDiffOne = document.querySelector('#electricalDiffOne');
const electricalDiffTwo = document.querySelector('#electricalDiffTwo');

function init() {
    hullNumOne.textContent = toDo[1].hullNum[0]
    hullNumTwo.textContent = toDo[2].hullNum[0]
    compareSponson(toDo[1].sponson, toDo[2].sponson)
}

function compareSponson(array1, array2) {
    let sponsonSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let sponsonDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let sponsonDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeSponson(sponsonSameArr, sponsonDiffOne, sponsonDiffTwo)
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
    compareEngine(toDo[1].engine, toDo[2].engine)
}

function compareEngine(array1, array2) {
    let engineSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let engineDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let engineDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeEngine(engineSameArr, engineDiffOne, engineDiffTwo)
}

function writeEngine(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        engineSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        engineDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        engineDiffTwo.append(list)
    });
    compareOutdrive(toDo[1].outdrive, toDo[2].outdrive)
}

function compareOutdrive(array1, array2) {
    let outdriveSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let outdriveDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let outdriveDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeOutdrive(outdriveSameArr, outdriveDiffOne, outdriveDiffTwo)
}

function writeOutdrive(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        outdriveSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        outdriveDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        outdriveDiffTwo.append(list)
    });
    compareElectrical(toDo[1].electrical, toDo[2].electrical)
}

function compareElectrical(array1, array2) {
    let electricalSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let electricalDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let electricalDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeElectrical(electricalSameArr, electricalDiffOne, electricalDiffTwo)
}

function writeElectrical(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        electricalSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        electricalDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        electricalDiffTwo.append(list)
    });
}
init()