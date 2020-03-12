import {base, manipulation} from "../operators/base";
import {Color, HWBColorSpace, Operator} from "../interfaces";
import {ColorImpl} from "../color.impl";
import {hwb} from 'color-convert';

/* eslint-disable @typescript-eslint/no-explicit-any */

const space: any = (color: number | [number, number, number], white?: number, black?: number): Color => {
  if (typeof color === 'number') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    color = [color, white!, black!];
  }

  return new ColorImpl(...hwb.rgb(color));
};
(space as any).hue = manipulation('hwb', 0, 360);
(space as any).white = manipulation('hwb', 1, 100);
(space as any).black = manipulation('hwb', 2, 100);

(space as any).rotate = (value: number): Operator => base('hwb', 0, undefined, 360, 0, undefined, value, 360);
(space as any).blacken = (value: number): Operator => base('hwb', 2, undefined, 100, 0, undefined, +value);
(space as any).whiten = (value: number): Operator => base('hwb', 1, undefined, 100, 0, undefined, +value);

export default (space as HWBColorSpace)
