const {ColorImpl} = require('../dist/color.impl');

describe('cmyk', () => {

  it('red', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.cmyk.cyan).toBe(0);
    expect(instance.cmyk.magenta).toBe(100);
    expect(instance.cmyk.yellow).toBe(100);
    expect(instance.cmyk.black).toBe(61);
  })

  it('green', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.cmyk.cyan).toBe(100);
    expect(instance.cmyk.magenta).toBe(0);
    expect(instance.cmyk.yellow).toBe(100);
    expect(instance.cmyk.black).toBe(61);
  })

  it('blue', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.cmyk.cyan).toBe(100);
    expect(instance.cmyk.magenta).toBe(100);
    expect(instance.cmyk.yellow).toBe(0);
    expect(instance.cmyk.black).toBe(61);
  })

  it('black', () => {
    const instance = new ColorImpl(0, 0, 0, 1);

    expect(instance.cmyk.cyan).toBe(0);
    expect(instance.cmyk.magenta).toBe(0);
    expect(instance.cmyk.yellow).toBe(0);
    expect(instance.cmyk.black).toBe(100);
  })

  it('white', () => {
    const instance = new ColorImpl(0xFF, 0xFF, 0xFF, 1);

    expect(instance.cmyk.cyan).toBe(0);
    expect(instance.cmyk.magenta).toBe(0);
    expect(instance.cmyk.yellow).toBe(0);
    expect(instance.cmyk.black).toBe(0);
  })
});
