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

export type KatanaProvider = () => Promise<Weapon>

@injectable()
class Ninja implements Warrior {
  public katana: Weapon|null;
  public shuriken: ThrowableWeapon;
  public katanaProvider: KatanaProvider;

  public constructor(
    // 绑定 Promise
    @inject('KatanaProvider') katanaProvider: KatanaProvider,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this.katanaProvider = katanaProvider;
    this.katana = null;
    this.shuriken = shuriken;
  }
  fight(): string {
    return this.katana!.hit();
  }
  sneak(): string {
    return this.shuriken.throw();
  }
}

export {Ninja, Katana, Shuriken}
