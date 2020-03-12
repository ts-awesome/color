const {ColorImpl} = require('../dist/color.impl');

describe('hsv', () => {

  it('red', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.hsv.hue).toBe(0);
    expect(instance.hsv.saturation).toBe(100);
    expect(instance.hsv.value).toBe(39);
  })

  it('green', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.hsv.hue).toBe(120);
    expect(instance.hsv.saturation).toBe(100);
    expect(instance.hsv.value).toBe(39);
  })

  it('blue', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.hsv.hue).toBe(240);
    expect(instance.hsv.saturation).toBe(100);
    expect(instance.hsv.value).toBe(39);
  })

  it('black', () => {
    const instance = new ColorImpl(0, 0, 0, 1);

    expect(instance.hsv.hue).toBe(0);
    expect(instance.hsv.saturation).toBe(0);
    expect(instance.hsv.value).toBe(0);
  })

  it('white', () => {
    const instance = new ColorImpl(0xFF, 0xFF, 0xFF, 1);

    expect(instance.hsv.hue).toBe(0);
    expect(instance.hsv.saturation).toBe(0);
    expect(instance.hsv.value).toBe(100);
  })
});
