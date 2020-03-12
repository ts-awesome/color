import {base, manipulation} from "../operators/base";
import {Color, HSVColorSpace, Operator} from "../interfaces";
import {ColorImpl} from "../color.impl";
import {hsv} from 'color-convert';

/* eslint-disable @typescript-eslint/no-explicit-any */

const space: any = (color: number | [number, number, number], saturation?: number, value?: number): Color => {
  if (typeof color === 'number') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    color = [color, saturation!, value!];
  }

  return new ColorImpl(...hsv.rgb(color));
};
(space as any).hue = manipulation('hsv', 0, 360);
(space as any).saturation = manipulation('hsv', 1, 100);
(space as any).value = manipulation('hsv', 2, 100);

(space as any).rotate = (value: number): Operator => base('hsv', 0, undefined, 360, 0, undefined, value, 360);
(space as any).saturate = (value: number): Operator => base('hsv', 1, undefined, 100, 0, undefined, +value);
(space as any).desaturate = (value: number): Operator => base('hsv', 1, undefined, 100, 0, undefined, -value);

export default (space as HSVColorSpace)
