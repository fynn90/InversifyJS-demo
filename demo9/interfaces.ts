/*
 * @Author: Fan
 * @Date: 2021-02-02 19:03:47
 * @description:
 */
export interface Warrior {
  fight(): string;
  sneak(): string;
}

export interface Weapon {
  hit(): string;
}

export interface ThrowableWeapon {
  throw(): string;
}
