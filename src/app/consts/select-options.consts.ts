import { IColor, INumber, ITexture } from '../interfaces/select.interfaces';

export const numbers: INumber[] = [
  { number: 'One', value: 1 },
  { number: 'Two', value: 2 },
  { number: 'Three', value: 3 },
  { number: 'Four', value: 4 },
];
export const colors: IColor[] = [
  { color: 'Red', value: 'red' },
  { color: 'Green', value: 'green' },
  { color: 'Blue', value: 'blue' },
  { color: 'Yellow', value: 'yellow' },
];
export const textures: ITexture[] = [
  { texture: 'Hairy', value: 'hairy' },
  { texture: 'Viscous', value: 'viscous' },
  { texture: 'Hard', value: 'hard' },
  { texture: 'Liquid', value: 'liquid' },
];
