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
}

function displayDogs() {
    const dogsListUI = document.getElementById('dog-list');
    for (let dog of dogs) {
        const dogItem = document.createElement('a');
        dogItem.href = '#';
        dogItem.innerText = dog.name;
        dogItem.className = 'list-group-item';

        dogsListUI.appendChild(dogItem);
    }
}