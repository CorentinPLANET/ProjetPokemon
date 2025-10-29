import Pokemon from "./Pokemon.js";

export default class UI {
  static dialogHTML = document.getElementById("dialog");
  static gameHTML = document.getElementById("game");

  /**
   * Empties Dialog display text
   */
  static dialogReset() {
    this.dialogHTML.innerHTML = "";
  }

  /**
   * Empties Game display
   */
  static gameReset() {
    this.gameHTML.innerHTML = "";
  }

  /**
   * Creates new message
   * @param {string} text
   * Message sent to dialog box
   */
  static message(text) {
    UI.dialogReset();
    UI.dialogHTML.textContent = text;
  }

  /**
   * Creates combat choice interface
   * @param {Object} player
   * Pokemon object
   */
  static dialogAtck(player) {
    UI.dialogReset();

    const atcks = document.createElement("div");
    atcks.classList.add("atcks");

    player.atcks.forEach((atck) => {
      const button = document.createElement("button");
      button.textContent = atck.name;
      atcks.appendChild(button);
    });

    UI.dialogHTML.appendChild(atcks);
    // <div class="atcks">
    //     <button>atck1</button>
    //     <button>atck2</button>
    //     <button>atck3</button>
    //     <button>atck4</button>
    //   </div>
  }
  /**
   * Displays Pokemon choice Interface
   * @param {lambda} handler
   * Variable to pass as a function
   */
  static PokeChoice(handler) {
    UI.gameReset();
    const pokechoice = document.createElement("div");
    pokechoice.classList.add("pokechoice");

    Pokemon.data.forEach((pokeData) => {
      const pokemon = document.createElement("button");
      pokemon.classList.add("pokemon", pokeData.name);
      pokemon.textContent = pokeData.name;
      pokemon.addEventListener("click", () => {
        handler(pokeData);
      });
      pokechoice.appendChild(pokemon);
    });

    UI.gameHTML.appendChild(pokechoice);
  }
  /**
   * Displays Combat Interface
   * @param {array} players
   * List of players
   */
  static displayFIght(players) {
    UI.gameReset();

    for (let i = 0; i < players.length; i++) {
      const pokemon = document.createElement("div");
      pokemon.classList.add("player", `player${i}`, players[i].name);
      UI.gameHTML.appendChild(pokemon);
    }
  }
}
