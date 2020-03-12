const {base} = require('../dist/operators/base');

describe('rgb red', () => {

  it('set 50', () => {
    const op = base( 'rgb', 0, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(50);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('mul 5', () => {
    const op = base('rgb', 0, undefined, undefined, undefined, 5);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(50);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('add 40', () => {
    const op = base('rgb', 0, undefined, undefined, undefined, undefined, 40);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(50);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('min 50', () => {
    const op = base('rgb', 0, undefined, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(50);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('max 50', () => {
    const op = base('rgb', 0, undefined, 50);

    const result = op({red: 100, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(50);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })
});

describe('rgb green', () => {
  it('set 50', () => {
    const op = base('rgb', 1, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(50);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('mul 5', () => {
    const op = base('rgb', 1, undefined, undefined, undefined, 5);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(100);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('add 40', () => {
    const op = base('rgb', 1, undefined, undefined, undefined, undefined,40);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(60);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('min 50', () => {
    const op = base('rgb', 1, undefined, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(50);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })

  it('max 50', () => {
    const op = base('rgb', 1, undefined, 50);

    const result = op({red: 10, green: 200, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(50);
    expect(result.blue).toBe(30);
    expect(result.alpha).toBe(1);
  })
});

describe('rgb blue', () => {
  it('set 50', () => {
    const op = base('rgb', 2, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(50);
    expect(result.alpha).toBe(1);
  })

  it('mul 5', () => {
    const op = base('rgb', 2, undefined, undefined, undefined, 5);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(150);
    expect(result.alpha).toBe(1);
  })

  it('add 40', () => {
    const op = base('rgb', 2, undefined, undefined, undefined, undefined,40);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(70);
    expect(result.alpha).toBe(1);
  })

  it('min 50', () => {
    const op = base('rgb', 2, undefined, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(50);
    expect(result.alpha).toBe(1);
  })

  it('max 50', () => {
    const op = base('rgb', 2, undefined, 50);

    const result = op({red: 10, green: 20, blue: 300, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(20);
    expect(result.blue).toBe(50);
    expect(result.alpha).toBe(1);
  })
});

describe('cmyk cyan', () => {
  it('set 50', () => {
    const op = base('cmyk', 0, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(15);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('mul 5', () => {
    const op = base('cmyk', 0, undefined, undefined, undefined, 5);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(0);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('add 40', () => {
    const op = base('cmyk', 0, undefined, undefined, undefined, undefined,40);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(0);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('min 50', () => {
    const op = base('cmyk', 0, undefined, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('max 50', () => {
    const op = base('cmyk', 0, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(15);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })
});

describe('cmyk magenta', () => {
  it('set 50', () => {
    const op = base('cmyk', 1, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(15);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('mul 5', () => {
    const op = base('cmyk', 1, undefined, undefined, undefined, 5);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(0);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('add 40', () => {
    const op = base('cmyk', 1, undefined, undefined, undefined, undefined,40);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(8);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('min 50', () => {
    const op = base('cmyk', 1, undefined, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(15);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('max 50', () => {
    const op = base('cmyk', 1, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })
});

describe('cmyk yellow', () => {
  it('set 50', () => {
    const op = base('cmyk', 2, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(15);
    expect(result.alpha).toBe(1);
  })

  it('mul 5', () => {
    const op = base('cmyk', 2, undefined, undefined, undefined, 5);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('add 40', () => {
    const op = base('cmyk', 2, undefined, undefined, undefined, undefined,40);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(18);
    expect(result.alpha).toBe(1);
  })

  it('min 50', () => {
    const op = base('cmyk', 2, undefined, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(15);
    expect(result.alpha).toBe(1);
  })

  it('max 50', () => {
    const op = base('cmyk', 2, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })
});

describe('cmyk black', () => {
  it('set 50', () => {
    const op = base('cmyk', 3, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(42);
    expect(result.green).toBe(85);
    expect(result.blue).toBe(128);
    expect(result.alpha).toBe(1);
  })

  it('mul 5', () => {
    const op = base('cmyk', 3, undefined, undefined, undefined, 5);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(0);
    expect(result.green).toBe(0);
    expect(result.blue).toBe(0);
    expect(result.alpha).toBe(1);
  })

  it('add 40', () => {
    const op = base('cmyk', 3, undefined, undefined, undefined, undefined,40);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(0);
    expect(result.green).toBe(0);
    expect(result.blue).toBe(0);
    expect(result.alpha).toBe(1);
  })

  it('min 50', () => {
    const op = base('cmyk', 3, undefined, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(10);
    expect(result.green).toBe(21);
    expect(result.blue).toBe(31);
    expect(result.alpha).toBe(1);
  })

  it('max 50', () => {
    const op = base('cmyk', 3, undefined, 50);

    const result = op({red: 10, green: 20, blue: 30, alpha: 1});

    expect(result.red).toBe(42);
    expect(result.green).toBe(85);
    expect(result.blue).toBe(128);
    expect(result.alpha).toBe(1);
  })
});
