/*
 * @Author: Fan
 * @Date: 2021-02-02 19:28:11
 * @description:
 */
import { Container, interfaces } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Ninja, Katana, Shuriken } from "./entities";

const myContainer = new Container();

myContainer
  .bind<interfaces.Newable<Weapon>>("Newable<Katana>")
  .toConstructor<Weapon>(Katana);
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
// myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
