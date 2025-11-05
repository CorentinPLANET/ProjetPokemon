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
        },
        {
          name: "flame",
          dmg: 10,
          pp: 25,
        },
        {
          name: "flame",
          dmg: 10,
          pp: 25,
        },
        {
          name: "flame",
          dmg: 10,
          pp: 25,
        },
      ],
      healthpoint: 100,
      speed:20
    },
    {
      name: "carapuce",
      atcks: [
        {
          name: "water",
          dmg: 50,
          pp: 25,
        },
        {
          name: "water",
          dmg: 10,
          pp: 25,
        },
        {
          name: "water",
          dmg: 10,
          pp: 25,
        },
        {
          name: "water",
          dmg: 10,
          pp: 25,
        },
      ],
      healthpoint: 100,
      speed:30
    },
    {
      name: "bulbizarre",
        atcks: [
        {
          name: "plant",
          dmg: 50,
          pp: 25,
        },
        {
          name: "plant",
          dmg: 10,
          pp: 25,
        },
        {
          name: "plant",
          dmg: 10,
          pp: 25,
        },
        {
          name: "plant",
          dmg: 10,
          pp: 25,
        },
      ],
      healthpoint: 100,
      speed:10
    },
  ];

  name;
  atcks = [];
  healthpoint;
  constructor(dataPokemon) {
    this.name = dataPokemon.name;
    this.healthpoint = dataPokemon.healthpoint;
    dataPokemon.atcks.forEach((atck) => this.atcks.push(new Atck(atck)));
    this.speed =dataPokemon.speed;
  }
}
