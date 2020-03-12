import {manipulation} from "../operators/base";
import {Color, RGBColorSpace} from "../interfaces";
import {ColorImpl} from "../color.impl";
import {hex} from 'color-convert';

/* eslint-disable @typescript-eslint/no-explicit-any */

const space: any = (color: string | number | [number, number, number], green?: number, blue?: number): Color => {
  if (typeof color === 'string') {
    color = hex.rgb(color);
  } else if (typeof color === 'number') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    color = [color, green!, blue!];
  }

  return new ColorImpl(...color);
};

(space as any).red = manipulation('rgb', 0, 255);
(space as any).green = manipulation('rgb', 1, 255);
(space as any).blue = manipulation('rgb', 1, 255);

export default (space as RGBColorSpace)
