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
    let person1 = new Age("mars", 39);
    expect(person1.ageConverter()).toEqual(21);
  })

  test('should return age on Jupiter', () => {
    let person1 = new Age("jupiter", 39);
    expect(person1.ageConverter()).toEqual(3);
  })

  test('should return years left to live based on user input', () => {
    let person1 = new Age("mercury", 39);
    let person2 = new Age("mercury", 1);
    expect(person1.yearsLeft(78)).toEqual(85);
    expect(person2.yearsLeft(78)).toEqual(74);
  })

});


