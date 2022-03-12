import Age from '../src/js/age.js';

describe('Age', () => {
  test('should return age on Mercury', () => {
    let person1 = new Age("mercury" , 39);
    expect(person1.ageConverter()).toEqual(162.5);
  });
});

