import {base, manipulation} from "../operators/base";
import {Color, HSLColorSpace} from "../interfaces";
import {ColorImpl} from "../color.impl";
import {hsl} from 'color-convert';

/* eslint-disable @typescript-eslint/no-explicit-any */

const space: any = (color: number | [number, number, number], saturation?: number, luminance?: number, black?: number): Color => {
  if (typeof color === 'number') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    color = [color, saturation!, luminance!];
  }

  return new ColorImpl(...hsl.rgb(color));
};
(space as any).hue = manipulation('hsl', 0, 360);
(space as any).saturation = manipulation('hsl', 1, 100);
(space as any).luminance = manipulation('hsl', 2, 100);

(space as any).rotate = (value: number) => base('hsl', 0, undefined, 360, 0, undefined, value, 360);
(space as any).saturate = (value: number) => base('hsl', 1, undefined, 100, 0, undefined, +value);
(space as any).desaturate = (value: number) => base('hsl', 1, undefined, 100, 0, undefined, -value);
(space as any).darken = (value: number) => base('hsl', 2, undefined, 100, 0, undefined, -value);
(space as any).lighten = (value: number) => base('hsl', 2, undefined, 100, 0, undefined, +value);

export default (space as HSLColorSpace)
