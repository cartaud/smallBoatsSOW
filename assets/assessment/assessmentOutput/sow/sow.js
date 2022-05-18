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
const deckSame = document.querySelector('#deckSame');
const deckDiffOne = document.querySelector('#deckDiffOne');
const deckDiffTwo = document.querySelector('#deckDiffTwo');
const consoleSame = document.querySelector('#consoleSame');
const consoleDiffOne = document.querySelector('#consoleDiffOne');
const consoleDiffTwo = document.querySelector('#consoleDiffTwo');
const bilgeSame = document.querySelector('#bilgeSame');
const bilgeDiffOne = document.querySelector('#bilgeDiffOne');
const bilgeDiffTwo = document.querySelector('#bilgeDiffTwo');
const hullSame = document.querySelector('#hullSame');
const hullDiffOne = document.querySelector('#hullDiffOne');
const hullDiffTwo = document.querySelector('#hullDiffTwo');

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
    compareDeck(toDo[1].deck, toDo[2].deck)
}

function compareDeck(array1, array2) {
    let deckSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let deckDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let deckDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeDeck(deckSameArr, deckDiffOne, deckDiffTwo)
}

function writeDeck(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        deckSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        deckDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        deckDiffTwo.append(list)
    });
    compareConsole(toDo[1].console, toDo[2].console)
}

function compareConsole(array1, array2) {
    let consoleSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let consoleDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let consoleDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeConsole(consoleSameArr, consoleDiffOne, consoleDiffTwo)
}

function writeConsole(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        consoleSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        consoleDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        consoleDiffTwo.append(list)
    });
    compareBilge(toDo[1].bilge, toDo[2].bilge)
}

function compareBilge(array1, array2) {
    let bilgeSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let bilgeDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let bilgeDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeBilge(bilgeSameArr, bilgeDiffOne, bilgeDiffTwo)
}

function writeBilge(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        bilgeSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        bilgeDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        bilgeDiffTwo.append(list)
    });
    compareHull(toDo[1].hull, toDo[2].hull)
}

function compareHull(array1, array2) {
    let hullSameArr = array1.filter(function(e) {
        return array2.indexOf(e) > -1;
    });
    let hullDiffOne = array1.filter(function(e) {
        return array2.indexOf(e) == -1;
    });
    let hullDiffTwo = array2.filter(function(e) {
        return array1.indexOf(e) == -1;
    });
    writeHull(hullSameArr, hullDiffOne, hullDiffTwo)
}

function writeHull(same, diffOne, diffTwo) {
    same.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        hullSame.append(list)
    });
    diffOne.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        hullDiffOne.append(list)
    });
    diffTwo.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        hullDiffTwo.append(list)
    });
}

init()