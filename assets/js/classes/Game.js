import Pokemon from "./Pokemon.js";
import UI from "./UI.js";

// Sert à gerer le jeu
export default class Game {
  players = [];

  constructor() {
    UI.message("Le joueur 1 choisie un pokemon");
    UI.PokeChoice((dataPokemon) => {
      this.players.push(new Pokemon(dataPokemon));

      UI.message("Le joueur 2 choisie un pokemon");
      UI.PokeChoice((dataPokemon) => {
        this.players.push(new Pokemon(dataPokemon));
        this.startFight();
      });
    });
  }
  /**
   * Starts all combat related functions
   */
  startFight() {
    UI.displayFIght(this.players);
    console.log(this.players[0]);

    UI.dialogAtck(this.players[0]);
  }
}
