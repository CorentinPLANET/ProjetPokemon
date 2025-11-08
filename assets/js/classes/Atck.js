export default class Atck {
  name;
  dmg;
  pp;
  purpose;
  constructor(data) {
    this.name = data.name;
    this.dmg = data.dmg;
    this.pp = data.pp;
    this.purpose = data.purpose
  }
}
