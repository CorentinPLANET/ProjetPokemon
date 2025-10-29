import Pokemon from "./Pokemon.js";
import UI from "./UI.js";

// Sert à gerer le jeu
export default class Game {
  players = [];
  turn = 0;

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
   * Starts combat
   */
  startFight() {
    UI.displayFight(this.players);
    this.play();
  }

  play() {
    const player = this.players[this.turn];
    const target = this.players[this.turn == 0 ? 1 : 0];
    UI.dialogAtck(player, (atckData) => {
      this.atckDamage(target, atckData);
      this.turn = this.turn == 0 ? 1 : 0;
      this.play();
    });
  }
  /**
   * Calculates damage and updates pp
   * @param {Object} target
   * Object containing data of attack target
   * @param {Object} atckData
   * Object containing all Attack Data
   */
  atckDamage(target, atckData) {
    atckData.pp--;
    target.healthpoint -= atckData.dmg;
    console.log(atckData, target.healthpoint);
  }
}
