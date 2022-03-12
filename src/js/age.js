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
    if (this.planet.toUpperCase() === "MERCURY") {
      return (Math.round(this.age / this.mercury));
    } else if (this.planet.toUpperCase() === "VENUS") {
      return (Math.round(this.age / this.venus));
    } else if (this.planet.toUpperCase() === "MARS") {
      return (Math.round(this.age / this.mars));
    } else if (this.planet.toUpperCase() === "JUPITER") {
      return(Math.round(this.age / this.jupiter));
    }
  }
}

