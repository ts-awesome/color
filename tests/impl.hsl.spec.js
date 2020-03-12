const {ColorImpl} = require('../dist/color.impl');

describe('hsl', () => {

  it('red', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.hsl.hue).toBe(0);
    expect(instance.hsl.saturation).toBe(100);
    expect(instance.hsl.luminosity).toBe(20);
  })

  it('green', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.hsl.hue).toBe(120);
    expect(instance.hsl.saturation).toBe(100);
    expect(instance.hsl.luminosity).toBe(20);
  })

  it('blue', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.hsl.hue).toBe(240);
    expect(instance.hsl.saturation).toBe(100);
    expect(instance.hsl.luminosity).toBe(20);
  })

  it('black', () => {
    const instance = new ColorImpl(0, 0, 0, 1);

    expect(instance.hsl.hue).toBe(0);
    expect(instance.hsl.saturation).toBe(0);
    expect(instance.hsl.luminosity).toBe(0);
  })

  it('white', () => {
    const instance = new ColorImpl(0xFF, 0xFF, 0xFF, 1);

    expect(instance.hsl.hue).toBe(0);
    expect(instance.hsl.saturation).toBe(0);
    expect(instance.hsl.luminosity).toBe(100);
  })
});
