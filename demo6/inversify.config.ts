/*
 * @Author: Fan
 * @Date: 2021-02-02 19:28:11
 * @description:
 */
import { Container } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Ninja, Katana, Shuriken, KatanaProvider } from "./entities";

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

myContainer
  .bind<KatanaProvider>("KatanaProvider")
  .toProvider<Weapon>((context) => {
    return () => {
      return new Promise<Weapon>((resolve) => {
        let katana = context.container.get<Weapon>(TYPES.Weapon);
        resolve(katana);
      });
    };
  });

export { myContainer };
