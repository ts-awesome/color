const {ColorImpl} = require('../dist/color.impl');

describe('luminance', () => {

  it('red channel', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.red).toBe(100);
    expect(instance.luminance).toBe(21.26);
  })

  it('green channel', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.green).toBe(100);
    expect(instance.luminance).toBe(71.52);
  })

  it('blue channel', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.blue).toBe(100);
    expect(instance.luminance).toBe(7.22);
  })

  it('all channels', () => {
    const instance = new ColorImpl(100, 100, 100, 10);

    expect(instance.luminance).toBe(21.26 + 71.52 + 7.22);
  })
});
