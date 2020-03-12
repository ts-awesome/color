import {ColorLike} from "../interfaces";

/** @link http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale */
export function grayscale({red, green, blue, alpha}: ColorLike): ColorLike {
  const val = red * 0.3 + green * 0.59 + blue * 0.11;
  return {red: val, green: val, blue: val, alpha};
}
