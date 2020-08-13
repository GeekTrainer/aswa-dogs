const dogs = [
    { name: 'Sammy' },
    { name: 'Roscoe' },
    { name: 'Su' },
    { name: 'Wiggles' },
    { name: 'Sophie' },
]

main();

function main() {
    displayDogs();
    document.getElementById('dog-save')
        .addEventListener('click', saveDog);
}

function displayDogs() {
    for (let dog of dogs) {
        addDogToDisplay(dog);
    }
}

function addDogToDisplay(dog) {
    const dogItem = document.createElement('a');
    dogItem.href = '#';
    dogItem.innerText = dog.name;
    dogItem.className = 'list-group-item';

    const dogsListUI = document.getElementById('dog-list');
    dogsListUI.appendChild(dogItem);
}

function saveDog() {
    const name = document.getElementById('dog-name').value;
    const dog = { name };
    dogs.push(dog);
    addDogToDisplay(dog);
}