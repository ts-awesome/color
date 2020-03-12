import {ColorLike} from "../interfaces";
import {from} from "./from";

/** @link http://www.w3.org/TR/WCAG20/#contrast-ratiodef */
export function contrast(a: ColorLike, b: ColorLike): number {
  const lum1 = from(a).luminosity;
  const lum2 = from(b).luminosity;
  return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
}
