import {CMYK, Color, ColorLike, HCG, HSL, HSV, HWB, LAB, Operator, XYZ} from './interfaces';
import {pipe} from './operators/pipe';
import {rgb} from 'color-convert';
import {to} from 'color-string';
import {from} from "./utils/from";

function limit(value: number, max = 255, min = 0): number {
  return Math.min(max, Math.max(min, value));
}

function hex(x: number, l = 2): string {
  return ('0000000000000000' + x.toString(16)).substr(-1 * l, l);
}

export class ColorImpl implements Color {

  private readonly _red: number;
  private readonly _blue: number;
  private readonly _green: number;
  private readonly _alpha: number;

  constructor(
    red: number,
    green: number,
    blue: number,
    alpha = 1.0,
  ) {
    this._red = limit(red, 255);
    this._blue = limit(blue, 255);
    this._green = limit(green, 255);
    this._alpha = limit(alpha, 1);
  }

  public get red(): number {
    return this._red;
  }

  public get blue(): number {
    return this._blue;
  }

  public get green(): number {
    return this._green;
  }

  public get alpha(): number {
    return this._alpha;
  }

  /**
   * @link http://www.poynton.com/notes/colour_and_gamma/ColorFAQ.html#RTFToC9
   */
  public get luminance(): number {
    return this._red * .2126 + this._green * .7152 + this._blue * .0722;
  }

  /**
   * @link http://www.w3.org/TR/WCAG20/#relativeluminancedef
   */
  public get luminosity(): number {
    const [a, b, c] = [this._red, this._green, this._blue]
      .map(x => x / 255)
      .map(chan => (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4));

    return 0.2126 * a + 0.7152 * b + 0.0722 * c;
  }

  /**
   * @link http://24ways.org/2010/calculating-color-contrast
   */
  public get yiq(): number {
    return this._red * .2990 + this._green * .5870 + this._blue * .1140;
  }

  public get dark(): boolean {
    return this.yiq < 128;
  }

  public get light(): boolean {
    return this.yiq >= 128;
  }

  public toString(): string {
    return to.rgb([this._red, this._green, this._blue, this._alpha]);
  }

  public toJSON(): ColorLike {
    return {
      red: this._red,
      green: this._green,
      blue: this._blue,
      alpha: this._alpha,
    }
  }

  public valueOf(): number {
    return parseInt(`${hex(this._red)}${hex(this._green)}${hex(this._blue)}${hex(Math.ceil(255 * this._alpha))}`, 16);
  }

  public pipe(op: ReadonlyArray<Operator> | Operator, ...ops: Operator[]): Color {
    return from(pipe(op, ...ops)(this));
  }

  public get cmyk(): CMYK {
    const [cyan, magenta, yellow, black] = rgb.cmyk([this._red, this._green, this._blue]);
    return Object.freeze({cyan, magenta, yellow, black});
  }

  public get hsl(): HSL {
    const [hue, saturation, luminosity] = rgb.hsl([this._red, this._green, this._blue]);
    return Object.freeze({hue, saturation, luminosity});
  }

  public get hsv(): HSV {
    const [hue, saturation, value] = rgb.hsv([this._red, this._green, this._blue]);
    return Object.freeze({hue, saturation, value});
  }

  public get hwb(): HWB {
    const [hue, white, black] = rgb.hwb([this._red, this._green, this._blue]);
    return Object.freeze({hue, white, black});
  }

  public get xyz(): XYZ {
    const [x, y, z] = rgb.xyz([this._red, this._green, this._blue]);
    return Object.freeze({x, y, z});
  }

  public get lab(): LAB {
    const [l, a, b] = rgb.lab([this._red, this._green, this._blue]);
    return Object.freeze({l, a, b});
  }

  public get hcg(): HCG {
    const [hue, chroma, gray] = rgb.hcg([this._red, this._green, this._blue]);
    return Object.freeze({hue, chroma, gray});
  }
}
