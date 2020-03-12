import {ColorLike} from "../interfaces";

export function invert({red, green, blue, alpha}: ColorLike): ColorLike {
  return ({
    red: 255 - red,
    green: 255 - green,
    blue: 255 - blue,
    alpha,
  });
}
