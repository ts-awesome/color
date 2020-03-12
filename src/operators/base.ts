import {ColorLike, OperandManipulation, Operator} from "../interfaces";
import * as convert from 'color-convert';

export function base(
  model: 'rgb'|'cmyk'|'hsl'|'hsv'|'hcg'|'hwb'|'xyz',
  component: 0|1|2|3,
  value?: number,
  max?: number,
  min?: number,
  mul?: number,
  add?: number,
  mod?: number,
): Operator {
  return function (color: ColorLike): ColorLike {
    const alpha = color.alpha;
    let components: [number, number, number] | [number, number, number, number] = [color.red, color.green, color.blue];
    if (model !== 'rgb') {
      components = convert['rgb'][model](components);
    }
    let initial = components[component] ?? 0;
    if (value != null) {
      initial = value;
    }
    if (mul != null) {
      initial *= mul;
    }
    if (add != null) {
      initial += add;
    }
    if (mod != null) {
      initial = (mod + (initial % mod)) % mod;
    }
    if (max != null) {
      initial = Math.min(max, initial);
    }
    if (min != null) {
      initial = Math.max(min, initial);
    }
    components[component] = initial;
    if (model != 'rgb') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      components = convert[model]['rgb'](components as any);
    }
    const [red, green, blue] = components;
    return {
      red,
      green,
      blue,
      alpha,
    };
  };
}

export function alpha(
  value?: number,
  max?: number,
  min?: number,
  mul?: number,
  add?: number,
  mod?: number,
): Operator {
  return function (color: ColorLike): ColorLike {
    let initial = color.alpha;
    if (value != null) {
      initial = value;
    }
    if (mul != null) {
      initial *= mul;
    }
    if (add != null) {
      initial += add;
    }
    if (mod != null) {
      initial = (mod + (initial % mod)) % mod;
    }
    if (max != null) {
      initial = Math.min(max, initial);
    }
    if (min != null) {
      initial = Math.max(min, initial);
    }

    const [red, green, blue] = [color.red, color.green, color.blue];
    return {
      red,
      green,
      blue,
      alpha: initial,
    };
  };
}

export function manipulation(model: 'rgb'|'cmyk'|'hsl'|'hsv'|'hcg'|'hwb'|'xyz', component: 0|1|2|3, max: number): OperandManipulation {
  const set: OperandManipulation = (value: number) => base(model, component, value, max, 0);

  set.set = set;
  set.atMost = (value: number): Operator => base(model, component, undefined, value, 0);
  set.atLeast = (value: number): Operator => base(model, component, undefined, max, value);
  set.amplify = (value: number): Operator => base(model, component, undefined, max, 0, value);
  set.increase = (value: number): Operator => base(model, component, undefined, max, 0, undefined, value);

  return set;
}

export function alphaManipulation(): OperandManipulation {
  const set: OperandManipulation = (value: number) => alpha(value, 1, 0);

  set.set = set;
  set.atMost = (value: number): Operator => alpha(undefined, value, 0);
  set.atLeast = (value: number): Operator => alpha(undefined, 1, value);
  set.amplify = (value: number): Operator => alpha(undefined, 1, 0, value);
  set.increase = (value: number): Operator => alpha(undefined, 1, 0, undefined, value);

  return set;
}
