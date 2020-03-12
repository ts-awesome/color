import {get} from 'color-string';
import {hsl, hwb} from 'color-convert';
import {Color, ColorLike} from "../interfaces";
import {ColorImpl} from "../color.impl";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function from(color: string): Color;
export function from(color: ColorLike): Color;
export function from(strings: TemplateStringsArray, ...exps: string[]): Color;
export function from(color: any, ...extra: string[]): Color {
  if (typeof color === 'object') {
    const {red, green, blue, alpha} = color;
    if (red != null && green != null && blue != null) {
      return new ColorImpl(red, green, blue, alpha ?? 1.0);
    }
  }

  if (Array.isArray(color)) {
    color = color.map((x, idx) => `${x}${extra[idx] ?? ''}`).join('');
  }

  if (typeof color !== 'string') {
    throw new Error(`Unexpected color value type ${typeof color}`);
  }

  // eslint-disable-next-line prefer-const
  let {model, value = []} = get(color) ?? {};
  if (model === undefined) {
    throw new Error(`Unknown color scheme of ${color}`);
  }
  const alpha = value.pop();
  if (model === 'hsl') {
    value = hsl.rgb(value as any) as any;
  } else if (model === 'hwb') {
    value = hwb.rgb(value as any) as any;
  } else if (model !== 'rgb') {
    throw new Error(`Unknown color scheme ${JSON.stringify(model)}`);
  }

  const [red, green, blue] = value;
  return new ColorImpl(red, green, blue, alpha);
}
