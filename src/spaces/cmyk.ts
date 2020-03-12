import {manipulation} from "../operators/base";
import {CMYKColorSpace, Color} from "../interfaces";
import {ColorImpl} from "../color.impl";
import {cmyk} from 'color-convert';

/* eslint-disable @typescript-eslint/no-explicit-any */

const space: any = (color: number | [number, number, number, number], magenta?: number, yellow?: number, black?: number): Color => {
  if (typeof color === 'number') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    color = [color, magenta!, yellow!, black!];
  }

  return new ColorImpl(...(cmyk.rgb(color)));
};
(space as any).cyan = manipulation('cmyk', 0, 100);
(space as any).magenta = manipulation('cmyk', 1, 100);
(space as any).yellow = manipulation('cmyk', 2, 100);
(space as any).black = manipulation('cmyk', 3, 100);

export default (space as CMYKColorSpace)
