/*
 * @Author: Fan
 * @Date: 2021-02-02 19:14:03
 * @description: 
 */
import {injectable, inject} from "inversify";
import "reflect-metadata";
import {Weapon, ThrowableWeapon, Warrior} from "./interfaces"
import { TYPES } from "./types";

@injectable()
class Katana implements Weapon {
  public hit() {
    return 'cut!'
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw() {
    return 'hit!'
  }
}

@injectable()
class Ninja implements Warrior {
  private _katana: Weapon;
  private _shuriken: ThrowableWeapon;

  public constructor(
    // 绑定一个工厂函数
    @inject(TYPES.Weapon) katana: (n:any) => Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this._katana = katana(1); // 可以向工厂函数传递参数
    this._shuriken = shuriken;
  }
  fight(): string {
    return this._katana.hit();
  }
  sneak(): string {
    return this._shuriken.throw();
  }
}

export {Ninja, Katana, Shuriken}
