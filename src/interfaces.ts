
export interface Operator<T = ColorLike> {
  (op: T): T;
}

export interface OperandManipulation {
  (value: number): Operator;

  set(value: number): Operator;
  increase(value: number): Operator;
  amplify(value: number): Operator;
  atLeast(value: number): Operator;
  atMost(value: number): Operator;
}

export interface RGB<T = number> {
  readonly red: T;
  readonly blue: T;
  readonly green: T;
}

export interface CMYK<T = number> {
  readonly cyan: T;
  readonly magenta: T;
  readonly yellow: T;
  readonly black: T;
}

export interface HSL<T=number> {
  readonly hue: T;
  readonly saturation: T;
  readonly luminosity: T;
}

export interface HSV<T=number> {
  readonly hue: T;
  readonly saturation: T;
  readonly value: T;
}

export interface HWB<T=number> {
  readonly hue: T;
  readonly white: T;
  readonly black: T;
}

export interface HCG<T=number> {
  readonly hue: T;
  readonly chroma: T;
  readonly gray: T;
}

export interface XYZ<T=number> {
  readonly x: T;
  readonly y: T;
  readonly z: T;
}

export interface LAB<T=number> {
  readonly l: T;
  readonly a: T;
  readonly b: T;
}

export interface RGBColorSpace extends RGB<OperandManipulation> {
  (hex: string): Color;
  (red: number, blue: number, green: number): Color;
  (components: [number, number, number]): Color;
}

export interface CMYKColorSpace extends CMYK<OperandManipulation> {
  (cyan: number, magenta: number, yellow: number, black: number): Color;
  (components: [number, number, number, number]): Color;
}

export interface HSLColorSpace extends HSL<OperandManipulation> {
  (hue: number, saturation: number, luminosity: number): Color;
  (components: [number, number, number]): Color;

  rotate(angle: number): Operator;
  saturate(amount: number): Operator;
  desaturate(amount: number): Operator;
  darken(amount: number): Operator;
  lighten(amount: number): Operator;
}

export interface HSVColorSpace extends HSV<OperandManipulation> {
  (hue: number, saturation: number, value: number): Color;
  (components: [number, number, number]): Color;

  rotate(angle: number): Operator;
  saturate(amount: number): Operator;
  desaturate(amount: number): Operator;
}

export interface HWBColorSpace extends HWB<OperandManipulation> {
  (hue: number, white: number, black: number): Color;
  (components: [number, number, number]): Color;

  rotate(angle: number): Operator;
  blacken(amount: number): Operator;
  whiten(amount: number): Operator;
}

export interface ColorLike {
  readonly alpha: number;
  readonly red: number;
  readonly blue: number;
  readonly green: number;
}

export interface Color extends RGB, ColorLike {
  readonly alpha: number;
  readonly red: number;
  readonly blue: number;
  readonly green: number;

  /** @link https://www.w3.org/TR/WCAG20 */
  readonly luminance: number;
  /** @link http://www.w3.org/TR/WCAG20/#relativeluminancedef */
  readonly luminosity: number;
  readonly dark: boolean;
  readonly light: boolean;

  toString(): string;
  toJSON(): ColorLike;

  valueOf(): number;

  pipe(...operators: Operator[]): Color;
  pipe(operators: ReadonlyArray<Operator>): Color;

  readonly cmyk: CMYK;
  readonly hsl: HSL;
  readonly hsv: HSV;
  readonly hwb: HWB;
  readonly hcg: HCG;
  readonly xyz: XYZ;
  readonly lab: LAB;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface color {
  (color: string): Color;
  (color: ColorLike): Color;
  (strings: TemplateStringsArray, ...exps: string[]): Color;

  from(color: string): Color;
  from(color: ColorLike): Color;
  from(strings: TemplateStringsArray, ...exps: string[]): Color;

  rgb: RGBColorSpace;
  cmyk: CMYKColorSpace;
  hsl: HSLColorSpace;
  hsv: HSVColorSpace;
  hwb: HWBColorSpace;

  /** @link http://www.w3.org/TR/WCAG20/#contrast-ratiodef */
  contrast(a: ColorLike, b: ColorLike): number;
  compare(a: ColorLike, b: ColorLike): -1 | 0 | 1;

  /** @link http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale */
  grayscale(color: ColorLike): ColorLike;
  invert(color: ColorLike): ColorLike;

  mix(a: ColorLike, weight?: number): Operator;

  pipe(...operators: Operator[]): Operator;
  pipe(operators: ReadonlyArray<Operator>): Operator;

  // components
  red: OperandManipulation;
  blue: OperandManipulation;
  green: OperandManipulation;
  alpha: OperandManipulation;
  fade(amount: number): Operator;
  opaquer(amount: number): Operator;
}
