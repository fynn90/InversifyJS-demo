/*
 * @Author: Fan
 * @Date: 2021-02-08 11:51:27
 * @description:
 */
import { injectable, multiInject } from "inversify";

export interface IWeapon {
  name: string;
}

@injectable()
export class katana implements IWeapon {
  public name = "katana";
}

@injectable()
export class Shuriken implements IWeapon {
  public name = "Shuriken";
}

export interface INinja {
  katana: IWeapon;
  shuriken: IWeapon;
  testMethod: () => void;
}

@injectable()
export class Ninjia implements INinja {
  public katana: IWeapon;
  public shuriken: IWeapon;
  // 多重注入
  // https://github.com/inversify/InversifyJS/blob/master/wiki/multi_injection.md
  public constructor(@multiInject("Weapon") weapons: IWeapon[]) {
    this.katana = weapons[0];
    this.shuriken = weapons[1];
  }
  public testMethod() {
    console.log(this.katana.name);
    console.log(this.shuriken.name);
  }
}
