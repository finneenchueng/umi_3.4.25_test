import Bitwise from './Bitwise';

export enum EnumX {
  A = Bitwise.reset(0b10),
  B = Bitwise.grow(),
  C = A | B | Bitwise.grow(),
}
