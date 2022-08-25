class CreatePokemon {
    constructor(element) {
        // Create image
        this.node = document.createElement("img");
        
        // Set attributes
        pokemon.setAttribute("id", "pokemon");
        pokemon.setAttribute("src", "src/assets/pikachu1.png");

        console.log(element)
        
        // Append as child node
        element.appendChild(this.node)
        console.log("A new pokemon has been created!")

        
    }
}
