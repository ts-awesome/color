import {Operator, ColorLike} from "../interfaces";

export function pipe(arg: ReadonlyArray<Operator> | Operator, ...ops: Operator[]): Operator {
  if (Array.isArray(arg)) {
    ops = [...arg];
  } else {
    ops = [arg as Operator, ...ops];
  }

  return function pipe(obj: ColorLike): ColorLike {
    return ops.length ? ops.reduce((acc, op) => op(acc), obj) : obj;
  }
}
