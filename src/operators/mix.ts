import {ColorLike, Operator} from "../interfaces";

export function mix(color2: ColorLike, weight = 0.5): Operator {
  return (color1): ColorLike => {
    // ported from sass implementation in C
    // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
    const p = weight === undefined ? 0.5 : weight;

    const w = 2 * p - 1;
    const a = color1.alpha - color2.alpha;

    const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    const w2 = 1 - w1;

    return {
      red: w1 * color1.red + w2 * color2.red,
      green: w1 * color1.green + w2 * color2.green,
      blue: w1 * color1.blue + w2 * color2.blue,
      alpha: color1.alpha * p + color2.alpha * (1 - p)
    };
  }
}
