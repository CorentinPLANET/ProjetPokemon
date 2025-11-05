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

  /**
   * Player 1 & Player 2 choose their attack one after the other
   * @param {*} player1
   * @param {*} atckPlayer1
   */
  play(player1, atckPlayer1) {
    const player = this.players[this.turn];
    UI.dialogAtck(player, (atckData) => {
      if (this.turn == 1) {
        this.turn = this.turn == 0 ? 1 : 0;
        this.playTurn(player1, atckPlayer1, player, atckData);
      } else {
        this.turn = this.turn == 0 ? 1 : 0;

        this.play(player, atckData);
      }
    });
  }

  /**
   * Decides Turn Order based on Pokemon speed
   * @param {Object} player1
   * Data of Player1's Pokemon
   * @param {Object} atckPlayer1
   * Data of Attack from Player1
   * @param {Object} player2
   * Data of Player2's Pokemon
   * @param {Object} atckPlayer2
   * Data of Attack from Player2
   */
  playTurn(dataP1, atckP1, dataP2, atckP2) {
    if (this.speedCheck(dataP1, dataP2)) {
      this.fightText(dataP1, atckP1, dataP2, atckP2);
    } else {
      this.fightText(dataP2, atckP2, dataP1, atckP1);
    }
    setTimeout(() => {
      this.play();
    }, 4000);
  }
  /**
   * Checks the different speed values of the Pokemon to determine turn order
   * @param {Object} dataP1
   * Data of Player1's Pokemon
   * @param {Object} dataP2
   * Data of Player2's Pokemon
   */
  speedCheck(dataP1, dataP2) {
    if (dataP1.speed <= dataP2.speed) {
      return false;
    } else {
      return true;
    }
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
    console.log(target.healthpoint);
  }
  /**
   * Displays text for combat by order of speed
   * @param {Object} fastPlayer
   * data of Player with higher speed
   * @param {Object} fastAtck
   * data of Attack with higher speed
   * @param {Object} slowPlayer
   * data of Player with lower speed
   * @param {Object} slowAtck
   * data of Attack with lower speed
   */
  fightText(fastPlayer, fastAtck, slowPlayer, slowAtck) {
    UI.message(`${fastPlayer.name} utilise ${fastAtck.name}`);
    setTimeout(() => {
      this.atckDamage(slowPlayer, fastAtck);
      if (slowPlayer.healthpoint <= 0) {
        UI.message(`${slowPlayer.name} est K.O. !`);
      } else {
        UI.message(`${slowPlayer.name} utilise ${slowAtck.name}`);
        setTimeout(() => { 
          this.atckDamage(fastPlayer, slowAtck);
          if (fastPlayer.healthpoint <= 0) {
            UI.message(`${fastPlayer.name} est K.O. !`);
          }
        }, 2000);
      }
    }, 2000);
  }
}
