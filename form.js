const nomeAnimale = document.getElementById("petsname-field");
const nomeProprietario = document.getElementById("owerName-field");
const specie = document.getElementById("species-field");
const razza = document.getElementById("bread-field");

const pets = [];

class Pets {
  constructor(_nomeAnimale, _nomeProprietario, _specie, _razza) {
    this.nomeAnimele = _nomeAnimale;
    this.nomeProprietario = _nomeProprietario;
    this.specie = _specie;
    this.razza = _razza;
  }
}

const renderList = function () {
  const contactsList = document.querySelector("ul");

  pets.innerHTML = "";

  pets.forEach((pet) => {
    const newLi = document.createElement("li");

    newLi.innerText = `${pets.nomeAnimele} ${pets.nomeProprietario} - ${pets.specie} ${pets.razza}`;

    petsList.appendChild(newLi);
  });
};

const formReference = document.querySelector("form");
formReference.addEventListener("submit", function (e) {
  e.preventDefault();
  const newpets = new pets(
    nomeAnimaleInput.value,
    nomePropietarioInput.value,
    specieInput.value,
    razzaInput.value
  );

  console.log("Animale Archiviato", newContact);

  pets.push(newpets);

  nomeAnimaleInput.value = "";
  nomeProprietarioInput.value = "";
  specieInput.value = "";
  razzaImput.value = "";

  renderList();
});
