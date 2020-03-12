const {ColorImpl} = require('../dist/color.impl');

describe('impl', () => {

  it('accept correct values', () => {
    const instance = new ColorImpl(100, 150, 200, 1);

    expect(instance.red).toBe(100);
    expect(instance.green).toBe(150);
    expect(instance.blue).toBe(200);
    expect(instance.alpha).toBe(1.0);
  })

  it('accept limit invalid values', () => {
    const instance = new ColorImpl(1255, 1255, 1255, 10);

    expect(instance.red).toBe(255);
    expect(instance.green).toBe(255);
    expect(instance.blue).toBe(255);
    expect(instance.alpha).toBe(1.0);
  })
});
