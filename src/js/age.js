export default class Age {
  constructor(planet, age) {
    this.planet = planet;
    this.age = age;
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  ageConverter() {
    if (this.planet === "mercury") {
      return (Math.round(this.age / this.mercury));
    }
  }
}

