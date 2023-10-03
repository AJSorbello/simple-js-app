let pokemonList = [
    { name: "Pikachu", height: .4, type: ["electric", "speed"] },
    { name: "Blastoise", height: 1.6, type: ["water", "cannon"] },
    { name: "Sandslash", height: 1, type: ["ground", "slow"] }
];
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {
        document.write(pokemonList[i].name + "  " + "(height:" + "  " + pokemonList[i].height + " ) " + "- Wow, That\'s one big pokemon!" + "<br>"); 
//condition for pokemon with the height > 1 
    } else {
        document.write(pokemonList[i].name + "  " + "(height:" + "  " + pokemonList[i].height + " ) " + "<br>");
    }
}