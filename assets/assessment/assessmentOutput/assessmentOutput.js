const hullListEl = document.querySelector('#hullList');
const outdriveListEl = document.querySelector('#outdriveList');
const sponsonListEl = document.querySelector('#sponsonList');
const deckListEl = document.querySelector('#deckList');
const consoleListEl = document.querySelector('#consoleList');
const electricalListEl = document.querySelector('#electricalList');
const engineListEl = document.querySelector('#engineList');
const bilgeListEl = document.querySelector('#bilgeList');
const backBtn = document.querySelector('#back');
const hullNumEl = document.querySelector('#hullNum');

function renderToDo(toDo) {
    for (let i=0; i<toDo.hull.length;i++) { //loops for amount of data entries in each section
        const list = document.createElement('li')
        list.textContent = `${toDo.hull[i]}`;   
        hullListEl.append(list);
    }
    for (let i=0; i<toDo.outdrive.length;i++) { 
        const list = document.createElement('li')
        list.textContent = `${toDo.outdrive[i]}`; 
        outdriveListEl.append(list);
    }
    for (let i=0; i<toDo.sponson.length;i++) { 
        const list = document.createElement('li')
        list.textContent = `${toDo.sponson[i]}`; 
        sponsonListEl.append(list);
    }
    for (let i=0; i<toDo.deck.length;i++) { 
        const list = document.createElement('li')
        list.textContent = `${toDo.deck[i]}`; 
        deckListEl.append(list);
    }
    for (let i=0; i<toDo.console.length;i++) { 
        const list = document.createElement('li')
        list.textContent = `${toDo.console[i]}`; 
        consoleListEl.append(list);
    }
    for (let i=0; i<toDo.electrical.length;i++) { 
        const list = document.createElement('li')
        list.textContent = `${toDo.electrical[i]}`; 
        electricalListEl.append(list);
    }
    for (let i=0; i<toDo.engine.length;i++) { 
        const list = document.createElement('li')
        list.textContent = `${toDo.engine[i]}`; 
        engineListEl.append(list);
    }
    for (let i=0; i<toDo.bilge.length;i++) { 
        const list = document.createElement('li')
        list.textContent = `${toDo.bilge[i]}`; 
        bilgeListEl.append(list);
    }
}
//is importing the array of responses via require method better than local storage? 
function init() {
    let hullNumber = JSON.parse(localStorage.getItem('hullNumber')) || ''; 
    hullNumEl.innerHTML = `${hullNumber}`
    let toDo = JSON.parse(localStorage.getItem('toDoList')); //retrieves stored data from local
    renderToDo(toDo);
}

backBtn.addEventListener('click', restart)
backBtn.addEventListener('touch', restart)

function restart() {
    localStorage.clear();
    window.open('https://cartaud.github.io/smallBoatsSOW/assets/assessment/assessment.html', '_self');
}

init() //initiates 