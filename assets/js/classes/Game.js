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
   * @param {Object} player1
   * data Player 1
   * @param {Object} atckPlayer1
   * Attack Player 1
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
    if (dataP1.speed < dataP2.speed) {
      return false;
    } else if (dataP1.speed > dataP2.speed) {
      return true;
    } else {
      if (this.random(0, 1) == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  /**
   * Calculates damage and updates pp
   * @param {Object} player
   * Object containing data of attacker
   * @param {Object} target
   * Object containing data of attack target
   * @param {Object} atckData
   * Object containing all Attack Data
   * @returns {int} damage dealt
   */
  atckDamage(player, target, atckData) {
    atckData.pp--;
    let damage =
      atckData.dmg + player.attack - target.defence > 0
        ? atckData.dmg + player.attack - target.defence
        : 1;
    target.healthpoint -= damage;
    return damage;
  }
  /**
   * heals player by half maxHP or sets healthpoint to maxHealth in case of overhealing
   * @param {Object} player
   * player that receives healing
   */
  heal(player, atckData) {
    atckData.pp--;
    player.maxHealth < player.healthpoint + Math.floor(player.maxHealth / 2)
      ? (player.healthpoint = player.maxHealth)
      : (player.healthpoint += Math.floor(player.maxHealth / 2));
    console.log(player.healthpoint);
  }
  lifeSteal(player, target, atckData) {
    player.maxHealth <
    player.healthpoint +
      Math.floor(this.atckDamage(player, target, atckData) / 2)
      ? (player.healthpoint = player.maxHealth)
      : (player.healthpoint += Math.floor(
          this.atckDamage(player, target, atckData) / 2
        ));
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
      if (fastAtck.purpose == "damage") {
        this.atckDamage(fastPlayer, slowPlayer, fastAtck);
      } else if (fastAtck.purpose == "heal") {
        this.heal(fastPlayer,fastAtck);
      } else if (fastAtck.purpose == "lifesteal") {
        this.lifeSteal(fastPlayer, slowPlayer, fastAtck);
      }
      UI.displayFight(this.players);
      if (slowPlayer.healthpoint <= 0) {
        UI.message(`${slowPlayer.name} est K.O. !`);
        setTimeout(() => {
          this.endCombat(fastPlayer);
        }, 2000);
      } else {
        UI.message(`${slowPlayer.name} utilise ${slowAtck.name}`);
        setTimeout(() => {
          if (slowAtck.purpose == "damage") {
            this.atckDamage(slowPlayer, fastPlayer, slowAtck);
          } else if (slowAtck.purpose == "heal") {
            this.heal(slowPlayer,slowAtck);
          } else if (slowAtck.purpose == "lifesteal") {
            this.lifeSteal(slowPlayer, fastPlayer, slowAtck);
          }

          UI.displayFight(this.players);
          if (fastPlayer.healthpoint <= 0) {
            UI.message(`${fastPlayer.name} est K.O. !`);
            setTimeout(() => {
              this.endCombat(slowPlayer);
            }, 2000);
          }
        }, 1500);
      }
    }, 1500);
  }
  /**
   * Generates a number between the lowerBound and the higherBound
   * @param {int} lowerBound
   * lowest number that the function can return
   * @param {int} higherBound
   * highest number that the function can return
   * @returns
   * a number between the lowerBound and the higherBound
   */
  random(lowerBound, higherBound) {
    return (
      Math.floor(Math.random() * (higherBound - lowerBound + 1)) + lowerBound
    );
  }
  /**
   * ends combat with winner message
   * @param {Object} winner
   * Winning Pokemon
   */
  endCombat(winner) {
    console.log("pass");
    UI.message(`${winner.name} a gagné le combat`);
  }
}
