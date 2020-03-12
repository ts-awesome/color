const {ColorImpl} = require('../dist/color.impl');

describe('hcg', () => {

  it('red', () => {
    const instance = new ColorImpl(100, 0, 0, 1);

    expect(instance.hcg.hue).toBe(0);
    expect(instance.hcg.chroma).toBe(39);
    expect(instance.hcg.gray).toBe(0);
  })

  it('green', () => {
    const instance = new ColorImpl(0, 100, 0, 1);

    expect(instance.hcg.hue).toBe(120);
    expect(instance.hcg.chroma).toBe(39);
    expect(instance.hcg.gray).toBe(0);
  })

  it('blue', () => {
    const instance = new ColorImpl(0, 0, 100, 1);

    expect(instance.hcg.hue).toBe(240);
    expect(instance.hcg.chroma).toBe(39);
    expect(instance.hcg.gray).toBe(0);
  })

  it('black', () => {
    const instance = new ColorImpl(0, 0, 0, 1);

    expect(instance.hcg.hue).toBe(0);
    expect(instance.hcg.chroma).toBe(0);
    expect(instance.hcg.gray).toBe(0);
  })

  it('white', () => {
    const instance = new ColorImpl(0xFF, 0xFF, 0xFF, 1);

    expect(instance.hcg.hue).toBe(0);
    expect(instance.hcg.chroma).toBe(0);
    expect(instance.hcg.gray).toBe(100);
  })
});
