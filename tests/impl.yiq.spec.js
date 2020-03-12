const {ColorImpl} = require('../dist/color.impl');

describe('yiq', () => {

  it('red channel', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.red).toBe(100);
    expect(instance.yiq).toBe(29.9);
  })

  it('green channel', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.green).toBe(100);
    expect(Number(instance.yiq.toFixed(1))).toBe(58.7);
  })

  it('blue channel', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.blue).toBe(100);
    expect(instance.yiq).toBe(11.4);
  })

  it('all channels', () => {
    const instance = new ColorImpl(100, 100, 100, 1);

    expect(instance.yiq).toBe(29.9 + 58.7 + 11.4);
  })

  it('dark', () => {
    const instance = new ColorImpl(0x11, 0x11, 0x11, 1);

    expect(instance.dark).toBe(true);
    expect(instance.light).toBe(false);
  })

  it('light', () => {
    const instance = new ColorImpl(0xEE, 0xEE, 0xEE, 1);

    expect(instance.dark).toBe(false);
    expect(instance.light).toBe(true);
  })
});
