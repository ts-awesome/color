const {from} = require('../dist/utils/from');
const {alpha} = require('../dist/index.js');

function hex(x) { return ('00000000' + x.toString(16)).substr(-8, 8).toUpperCase(); }

describe('valueOf', () => {

  it('red', () => {
    const instance = from('#FF0000').valueOf();

    expect(hex(instance)).toBe('FF0000FF');
  })

  it('green', () => {
    const instance = from('#00FF00').valueOf();

    expect(hex(instance)).toBe('00FF00FF');
  })

  it('blue', () => {
    const instance = from('#0000FF').valueOf();

    expect(hex(instance)).toBe('0000FFFF');
  })

  it('black', () => {
    const instance = from('black').valueOf();

    expect(hex(instance)).toBe('000000FF');
  })

  it('opaque', () => {
    const instance = from('black').pipe(alpha.set(0)).valueOf();

    expect(hex(instance)).toBe('00000000');
  })
});
