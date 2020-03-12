import {ColorLike} from "../interfaces";
import {from} from "./from";

export function compare(a: ColorLike, b: ColorLike): -1 | 0 | 1 {
  const x = from(a).valueOf();
  const y = from(b).valueOf();
  return x < y ? -1 : x > y ? 1 : 0;
}
