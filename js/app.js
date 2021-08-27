document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })

const handleNewItemFormSubmit = function (event) {
event.preventDefault();

const endangeredSpeciesItem = createEndangeredSpeciesItem(event.target);
const endangeredSpecies = document.querySelector('#endangered-species');
endangeredSpecies.appendChild(endangeredSpeciesItem);

event.target.reset();
}

const createEndangeredSpeciesItem = function (form) {
    const endangeredSpeciesItem = document.createElement('li');
    endangeredSpeciesItem.classList.add('endangered-species-item');
  
    const name = document.createElement('h2');
    name.textContent = form.name.value;
    endangeredSpeciesItem.appendChild(name);
  
    const species = document.createElement('h3');
    species.textContent = form.species.value;
    endangeredSpeciesItem.appendChild(species);
  
    const continent = document.createElement('p');
    continent.textContent = form.continent.value;
    endangeredSpeciesItem.appendChild(continent);
  
    return endangeredSpeciesItem;
  }

  const handleDeleteAllClick = function (event) {
    const endangeredSpecies = document.querySelector('#endangered-species');
    endangeredSpecies.innerHTML = '';
  }