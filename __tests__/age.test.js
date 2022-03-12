import Age from '../src/js/age.js';

describe('Age', () => {
  test('should return age on Mercury', () => {
    let person1 = new Age("mercury", 39);
    expect(person1.ageConverter()).toEqual(163);
  });

  test('should return age on Venus', () => {
    let person1 = new Age("venus", 39);
    expect(person1.ageConverter()).toEqual(63);
  })

  test('should return age on Mars', () => {
    let person1 = new Age("Mars", 39);
    expect(person1.ageConverter()).toEqual(21);
  })

});


