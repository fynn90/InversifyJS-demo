import { KatanaProvider } from "./entities";

/*
 * @Author: Fan
 * @Date: 2021-02-02 19:03:47
 * @description: 
 */
export interface Warrior {
  fight(): string;
  sneak(): string;
  katana: Weapon|null;
  shuriken: ThrowableWeapon;
  katanaProvider: KatanaProvider;
}

export interface Weapon {
  hit(): string;
}

export interface ThrowableWeapon {
  throw():string
}
