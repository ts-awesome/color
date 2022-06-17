# @ts-awesome/color

TypeScript color manipulations library

This library is inspired by [color](https://github.com/Qix-/color). Huge thanks to **Qix-** for a great work!

Main advantages are

* pipe-able operators
* template literals
* immutable results

## Sample usage

```ts

import color, {grayscale, invert, opaquer, fade} from '@ts-awesome/color';

const c = color`#123456`.pipe(
  grayscale,
  invert,
  opaquer(.5),
  fade(.2),
).toString();

```

## advanced case

```ts

import color, {grayscale, invert, hwb, rgb, mix, cmyk, opaquer, alpha, fade, pipe} from '@ts-awesome/color';

const transformation = pipe(
  grayscale,
  invert,
  hwb.whiten(.1),
  rgb.blue.set(0),
  rgb.red.increase(+10),
  rgb.green.amplify(2),
  mix(color`lightblue`, .3),
  cmyk.black.atMost(0xCC),
  opaquer(.5),
  alpha.atMost(.7),
  fade(.2),
);

const source = color`#123456`;
const result = transformation(source);
const result2 = transformation(result);

console.log(result.toString(), result2.toString());

```

## `ColorLike`

Library can work over any `ColorLike` that has following interface

```ts
interface ColorLike {
  readonly alpha: number;
  readonly red: number;
  readonly blue: number;
  readonly green: number;
}
```

```ts
import color, {grayscale, invert, opaquer, fade, pipe} from '@ts-awesome/color';

const transformation = pipe(
  grayscale,
  invert,
  opaquer(.5),
  fade(.2),
);

const source = {
  alpha: .8,
  red: 255,
  green: 63,
  blue: 127,
};

const result = transformation(source);

console.log(result.toString());
```

# License
May be freely distributed under the [MIT license](https://opensource.org/licenses/MIT).

Copyright (c) 2022 Volodymyr Iatsyshyn and other contributors
