# Pokedex

## Project description
Pokedex is an app created with HTML, CSS, and Javascript. It loads a list of different pokemon characters from the pokemon api.  This app allows you to click on a pokemon characters name and a small window will pop up to reveal it's image, height, type of pokemon. 

## How to get the project running
bootstrap, modal containers, HTML, Javascript, CSS, and ESlinters

## Project dependencies (libraries)
Bootstrap
Jquery
Popper

## api used
Pokemon API link (https://pokeapi.co/api/v2/pokemon/?limit=150)
# About This Code
This code is a JavaScript module for managing a list of Pokémon fetched from the PokeAPI. Here's a breakdown:

1. **Initialization**:
   - The module `pokemonRepository` is defined as an immediately invoked function expression (IIFE) to provide encapsulation.
   - An empty array `pokemonList` is initialized to store Pokémon.
   - The `apiUrl` is set to fetch the first 150 Pokémon from the PokeAPI.

2. **Adding Pokémon**:
   - The `add` function allows the addition of Pokémon objects to the `pokemonList` if they're of type "object".

3. **Search Bar**:
   - A search bar is created which filters the displayed Pokémon based on the user's search input.

4. **Pokémon List Handling**:
   - The `getAll` function returns the entire `pokemonList`.
   - The `removeAllItems` function clears the displayed Pokémon list.
   - The `addListItem` function creates a list item for a given Pokémon and appends it to the display list.

5. **Fetching Data from the API**:
   - The `loadList` function fetches the list of Pokémon from the API, sorts them alphabetically, and adds them to the `pokemonList`.
   - The `loadDetails` function fetches detailed data for a specific Pokémon from the API.

6. **Modal Handling**:
   - The `showDetails` function displays detailed information of a Pokémon in a modal after fetching its details.
   - The `showModal` function creates the modal with the Pokémon's details like name, image, height, and type.
   - The `hideModal` function hides the modal.
   - An event listener for the "Escape" key is added to close the modal when the key is pressed.

7. **Module Return**:
   - Several functions are made publicly accessible by returning them at the end of the IIFE.

8. **Execution**:
   - After defining the module, the Pokémon list is loaded from the API and displayed.

Overall, the code provides a way to display a list of Pokémon, lets users search through the list, and view detailed information about each Pokémon in a modal.