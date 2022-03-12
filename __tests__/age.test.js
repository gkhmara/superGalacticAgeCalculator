import Age from '../src/js/age.js';

describe('Age', () => {
  test('should return age on Mercury', () => {
    let person1 = new Age("mercury", 39);
    expect(person1.ageConverter()).toEqual(163);
  });
});

test('should return age on Venus', () => {
  let person1 = new Age("venus", 39);
  expect(person1.ageConverter()).toEqual(63);
})
