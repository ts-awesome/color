const {from} = require('../dist/utils/from');

describe('from', () => {

  it('named', () => {
    const instance = from('white');

    expect(instance.red).toBe(0xff);
    expect(instance.green).toBe(0xff);
    expect(instance.blue).toBe(0xff);
    expect(instance.alpha).toBe(1.0);
  })

  it('hex short', () => {
    const instance = from('#fed');

    expect(instance.red).toBe(0xff);
    expect(instance.green).toBe(0xee);
    expect(instance.blue).toBe(0xdd);
    expect(instance.alpha).toBe(1.0);
  })

  it('hex', () => {
    const instance = from('#f0e0d0');

    expect(instance.red).toBe(0xf0);
    expect(instance.green).toBe(0xe0);
    expect(instance.blue).toBe(0xd0);
    expect(instance.alpha).toBe(1.0);
  })

  it('rgb', () => {
    const instance = from('rgb(255, 250, 245)');

    expect(instance.red).toBe(255);
    expect(instance.green).toBe(250);
    expect(instance.blue).toBe(245);
    expect(instance.alpha).toBe(1.0);
  })

  it('rgba', () => {
    const instance = from('rgb(255, 250, 245, .5)');

    expect(instance.red).toBe(255);
    expect(instance.green).toBe(250);
    expect(instance.blue).toBe(245);
    expect(instance.alpha).toBe(.5);
  })

  it('hsl', () => {
    const instance = from('hsl(0, 50%, 75%)');

    expect(instance.hsl.hue).toBe(0);
    expect(instance.hsl.saturation).toBe(50);
    expect(instance.hsl.luminosity).toBe(75);
    expect(instance.alpha).toBe(1);
  })

  it('hsla', () => {
    const instance = from('hsla(0, 50%, 75%, .5)');

    expect(instance.hsl.hue).toBe(0);
    expect(instance.hsl.saturation).toBe(50);
    expect(instance.hsl.luminosity).toBe(75);
    expect(instance.alpha).toBe(.5);
  })

  it('hwb', () => {
    const instance = from('hwb(0, 50%, 25%)');

    expect(instance.hwb.hue).toBe(0);
    expect(instance.hwb.white).toBe(50);
    expect(instance.hwb.black).toBe(25);
    expect(instance.alpha).toBe(1);
  })
});
