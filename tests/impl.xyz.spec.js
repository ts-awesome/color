const {ColorImpl} = require('../dist/color.impl');

describe('xyz', () => {

  it('red', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.xyz.x).toBe(5);
    expect(instance.xyz.y).toBe(3);
    expect(instance.xyz.z).toBe(0);
  })

  it('green', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.xyz.x).toBe(5);
    expect(instance.xyz.y).toBe(9);
    expect(instance.xyz.z).toBe(2);
  })

  it('blue', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.xyz.x).toBe(2);
    expect(instance.xyz.y).toBe(1);
    expect(instance.xyz.z).toBe(12);
  })

  it('black', () => {
    const instance = new ColorImpl(0, 0, 0, 1);

    expect(instance.xyz.x).toBe(0);
    expect(instance.xyz.y).toBe(0);
    expect(instance.xyz.z).toBe(0);
  })

  it('white', () => {
    const instance = new ColorImpl(0xFF, 0xFF, 0xFF, 1);

    expect(instance.xyz.x).toBe(95);
    expect(instance.xyz.y).toBe(100);
    expect(instance.xyz.z).toBe(109);
  })
});
