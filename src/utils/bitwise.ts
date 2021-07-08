export default class Bitwise {
  /**
   * A number represents radix
   */
  private static radix: number = 2;

  /**
   * A number represents the bitwise value
   */
  private static value: number = 0b10;

  /**
   * Grow the bitwise value
   */
  static grow(): number {
    const { radix, value } = this;

    return (this.value = parseInt(
      value ? `${value.toString(radix)}0` : '10',
      radix,
    ));
  }

  /**
   * Reset value and radix
   * @param value A number represents the bitwise value
   * @param radix A number represents radix
   */
  static reset(value: number, radix: number = 2): number {
    this.value = value;
    this.radix = radix;
    return value;
  }
}
