let pokemonRepository = (function () {

  let pokemonList = [
    { name: "Pikachu", height: 0.4, type: ["electric", "speed"] },
    { name: "Blastoise", height: 1.6, type: ["water", "cannon"] },
    { name: "Sandslash", height: 1.0, type: ["ground", "slow"] }
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon not home");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    //creating li element inside the ul
    let listpokemon = document.createElement("li");
    // creating button element inside the li
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    //append button to the li listpokemon as its child
    listpokemon.appendChild(button);
    //append the li listpokemon to the ul pokemonList as its child
    pokemonList.appendChild(listpokemon);
    //button
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log(pokemon)
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


pokemonRepository.add({ name: "Bulbasaur", height: "0.7 ", types: ["grass", "poison"] });
pokemonRepository.add({ name: "Squirtle", height: "1.0 ", types: ["water", "drowning"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

// let survey_form = document.querySelector('#survey_form');
//   let isFormHidden = survey_form.classList.contains('hidden');
//   if (!isFormHidden && event.key === 'Escape') {
//     survey_form.classList.add('hidden');
//   }
// //event handler 
// let button = document.querySelector('button');
// button.addEventListener('click', function (event) {
//   let target = event.target;
//   target.classList.toggle('button--red');
//   target.classList.toggle('button--green');
//   console.log(event);
// });

// // event Listener
// window.addEventListener('keydown', function (event) {
//   let survey_form = document.querySelector('#survey_form');
//   let isFormHidden = survey_form.classList.contains('hidden');
//   if (!isFormHidden && event.key === 'Escape') {
//     survey_form.classList.add('hidden');
//   }
// });

// // form
// let form = document.querySelector('form');
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   // Do something manually, for example, add custom validations
//   form.submit();
// });
// element.focus(); // Focus on this element. Mainly useful for <input> or <textarea>
// element.click(); // Click on this element
// element.blur(); // Remove focus from this element
// form.submit(); // Manually submits the form (in case form refers to a form element)

// console.log(pokemon.name + ' is ' + pokemon.height + ' tall ');
// document.write(pokemon.name + ' is ' + pokemon.height + ' tall ' + '<p>');
// container.appendChild(button);