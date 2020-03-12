const {ColorImpl} = require('../dist/color.impl');

describe('hwb', () => {

  it('red', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.hwb.hue).toBe(0);
    expect(instance.hwb.white).toBe(0);
    expect(instance.hwb.black).toBe(61);
  })

  it('green', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.hwb.hue).toBe(120);
    expect(instance.hwb.white).toBe(0);
    expect(instance.hwb.black).toBe(61);
  })

  it('blue', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.hwb.hue).toBe(240);
    expect(instance.hwb.white).toBe(0);
    expect(instance.hwb.black).toBe(61);
  })

  it('black', () => {
    const instance = new ColorImpl(0, 0, 0, 1);

    expect(instance.hwb.hue).toBe(0);
    expect(instance.hwb.white).toBe(0);
    expect(instance.hwb.black).toBe(100);
  })

  it('white', () => {
    const instance = new ColorImpl(0xFF, 0xFF, 0xFF, 1);

    expect(instance.hwb.hue).toBe(0);
    expect(instance.hwb.white).toBe(100);
    expect(instance.hwb.black).toBe(0);
  })
});
