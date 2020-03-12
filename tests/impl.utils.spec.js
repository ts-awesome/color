const {ColorImpl} = require('../dist/color.impl');

describe('utils', () => {

  it('toString rgb', () => {
    const instance = new ColorImpl(100, 50, 0, 1);

    expect(instance.toString()).toBe('rgb(100, 50, 0)');
  })

  it('toString rgba', () => {
    const instance = new ColorImpl(100, 50, 0, .5);

    expect(instance.toString()).toBe('rgba(100, 50, 0, 0.5)');
  })

  it('toJSON', () => {
    const instance = new ColorImpl(50, 100, 200, .5);

    expect(instance.toJSON()).toStrictEqual({
      red: 50,
      green: 100,
      blue: 200,
      alpha: .5
    });
  })

  it('valueOf', () => {
    const instance = new ColorImpl(0x12, 0x34, 0x56, 0.5);

    expect(instance.valueOf()).toBe(0x12345680);
  })
});
