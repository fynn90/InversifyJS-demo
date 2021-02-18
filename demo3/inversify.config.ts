/*
 * @Author: Fan
 * @Date: 2021-02-02 19:28:11
 * @description:
 */
import { Container, ContainerModule, interfaces } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Ninja, Katana, Shuriken } from "./entities";

// 容器可以用来绑定 class直接的关系
let warriorModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<Warrior>(TYPES.Warrior).to(Ninja);
  }
);

let weaponModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<Weapon>(TYPES.Weapon).to(Katana);
  }
);

let throwableWeaponModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
  }
);

let container = new Container();

container.load(warriorModule, weaponModule, throwableWeaponModule);

export { warriorModule, weaponModule, throwableWeaponModule };
