import Atck from "./Atck.js";

export default class Pokemon {
  static data = [
    {
      name: "salameche",
      atcks: [
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
      ],
    },
    {
      name: "carapuce",
      atcks: [
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
      ],
    },
    {
      name: "bulbizarre",
      atcks: [
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
        {
          name: "charge",
          dmg: 10,
          pp: 25,
        },
      ],
    },
  ];

  name;
  atcks = [];

  constructor(dataPokemon) {
    this.name = dataPokemon.name;

    dataPokemon.atcks.forEach((atck) => this.atcks.push(new Atck(atck)));
  }
}
