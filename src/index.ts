import {color as ns, ColorLike, Operator} from './interfaces';
import {from} from "./utils/from";
import rgb from "./spaces/rgb";
import cmyk from "./spaces/cmyk";
import hsl from './spaces/hsl';
import hsv from "./spaces/hsv";
import hwb from "./spaces/hwb";
import {pipe} from "./operators/pipe";
import {alpha as alphaBase, alphaManipulation} from "./operators/base";
import {mix} from "./operators/mix";
import {invert} from "./utils/invert";
import {grayscale} from "./utils/grayscale";
import {compare} from "./utils/compare";
import {contrast} from "./utils/contrast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const color = (arg: any, ...args: any[]): ColorLike => from(arg, ...args);

color.from = from;
color.pipe = pipe;

color.rgb = rgb;
color.cmyk = cmyk;
color.hsl = hsl;
color.hsv = hsv;
color.hwb = hwb;

color.contrast = contrast;
color.compare = compare;

color.grayscale = grayscale;
color.invert = invert;

color.mix = mix;

color.red = rgb.red;
color.green = rgb.green;
color.blue = rgb.blue;
color.alpha = alphaManipulation();
color.fade = (value: number): Operator => alphaBase(undefined, 1, 0, undefined, -value);
color.opaquer = (value: number): Operator => alphaBase(undefined, 1, 0, undefined, value);

Object.freeze(color);

export default (color as ns);
export {
  from,
  pipe,
  rgb,
  cmyk,
  hsl,
  hsv,
  hwb,
  contrast,
  compare,
  grayscale,
  invert,
  mix,
}

export const red = color.red;
export const green = color.green;
export const blue = color.blue;
export const alpha = color.alpha;
export const fade = color.fade;
export const opaquer = color.opaquer;
