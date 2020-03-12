const {ColorImpl} = require('../dist/color.impl');

describe('lab', () => {

  it('red', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.lab.l).toBe(19);
    expect(instance.lab.a).toBe(40);
    expect(instance.lab.b).toBe(29);
  })

  it('green', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.lab.l).toBe(36);
    expect(instance.lab.a).toBe(-43);
    expect(instance.lab.b).toBe(42);
  })

  it('blue', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.lab.l).toBe(8);
    expect(instance.lab.a).toBe(40);
    expect(instance.lab.b).toBe(-54);
  })

  it('black', () => {
    const instance = new ColorImpl(0, 0, 0, 1);

    expect(instance.lab.l).toBe(0);
    expect(instance.lab.a).toBe(0);
    expect(instance.lab.b).toBe(0);
  })

  it('white', () => {
    const instance = new ColorImpl(0xFF, 0xFF, 0xFF, 1);

    expect(instance.lab.l).toBe(100);
    expect(instance.lab.a).toBe(0);
    expect(instance.lab.b).toBe(-0);
  })
});
