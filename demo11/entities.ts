/*
 * @Author: Fan
 * @Date: 2021-02-02 19:14:03
 * @description: 
 */
import {injectable, inject, named} from "inversify";
import "reflect-metadata";
import {Weapon, ThrowableWeapon, Warrior} from "./interfaces"
import { TYPES } from "./types";

@injectable()
class Katana implements Weapon {
  public hit() {
    return 'Katana cut!'
  }
}

@injectable()
class Shuriken implements Weapon {
  public hit() {
    return 'Shuriken hit!'
  }
}

@injectable()
class Ninja implements Warrior {
  private _katana: Weapon;
  private _shuriken: Weapon;

  public constructor(
    @inject(TYPES.Weapon) @named('strong')  katana: Weapon,
    @inject(TYPES.Weapon) @named('weak') shuriken: Weapon
  ) {
    this._katana = katana;
    this._shuriken = shuriken;
  }
  fight(): string {
    return this._katana.hit();
  }
  sneak(): string {
    return this._shuriken.hit();
  }
}

export {Ninja, Katana, Shuriken}
