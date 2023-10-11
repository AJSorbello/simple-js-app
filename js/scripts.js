let pokemonList = [
    { name: "Pikachu", height: .4, type: ["electric", "speed"] },
    { name: "Blastoise", height: 1.6, type: ["water", "cannon"] },
    { name: "Sandslash", height: 1, type: ["ground", "slow"] }
];

pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + ' tall ');
    document.write(pokemon.name + ' is ' + pokemon.height + ' tall ' + '<p>');
});
// let pokemonRepository = (function () {

