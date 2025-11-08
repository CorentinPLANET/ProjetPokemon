import Atck from "./Atck.js";

export default class Pokemon {
  static data = [
    {
      name: "salameche",
      atcks: [
        {
          name: "flame",
          dmg: 50,
          pp: 25,
          purpose: "damage"
        },
        {
          name: "flame heal",
          dmg: 10,
          pp: 25,
          purpose: "heal"
        },
        {
          name: "flame",
          dmg: 10,
          pp: 25,
          purpose: "damage"
        },
        {
          name: "flame lifesteal",
          dmg: 10,
          pp: 25,
          purpose: "lifesteal"
        },
      ],
      maxHealth: 130,
      healthpoint: 130,
      attack: 20,
      defence: 10,
      speed: 20,
    },
    {
      name: "carapuce",
      atcks: [
        {
          name: "water",
          dmg: 50,
          pp: 25,
          purpose: "damage"
        },
        {
          name: "water heal",
          dmg: 10,
          pp: 25,
          purpose: "heal"
        },
        {
          name: "water",
          dmg: 10,
          pp: 25,
          purpose: "damage"
        },
        {
          name: "water lifesteal",
          dmg: 10,
          pp: 25,
          purpose: "lifesteal"
        },
      ],
      maxHealth: 120,
      healthpoint: 100,
      attack: 15,
      defence: 15,
      speed: 30,
    },
    {
      name: "bulbizarre",
      atcks: [
        {
          name: "plant",
          dmg: 50,
          pp: 25,
          purpose: "damage"
          
        },
        {
          name: "plant heal",
          dmg: 0,
          pp: 25,
          purpose: "heal"
        },
        {
          name: "plant",
          dmg: 10,
          pp: 25,
          purpose: "damage"
        },
        {
          name: "plant lifesteal",
          dmg: 10,
          pp: 25,
          purpose: "lifesteal"
        },
      ],
      maxHealth: 140,
      healthpoint: 100,
      attack: 15,
      defence: 25,
      speed: 10,
    },
  ];

  name;
  atcks = [];
  healthpoint;
  constructor(dataPokemon) {
    this.name = dataPokemon.name;
    this.maxHealth = dataPokemon.maxHealth;
    this.healthpoint = dataPokemon.healthpoint;
    dataPokemon.atcks.forEach((atck) => this.atcks.push(new Atck(atck)));
    this.attack = dataPokemon.attack;
    this.defence = dataPokemon.defence;
    this.speed = dataPokemon.speed;
  }
}
