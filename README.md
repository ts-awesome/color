# ts-color

```bash
npm install --save @ts-awesome/color
```

## Sample usage

```javascript

import color, {grayscale, invert, hwb, rgb, mix, cmyk, opaquer, alpha, fade} from '@ts-awesome/color';

const c = color`#123456`.pipe(
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
).toString();

```
