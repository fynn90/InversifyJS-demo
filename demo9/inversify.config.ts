/*
 * @Author: Fan
 * @Date: 2021-02-02 19:28:11
 * @description:
 */
import { Container, interfaces } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Ninja, Katana, Shuriken } from "./entities";

function logger(planAndResolve: interfaces.Next): interfaces.Next {
  return (args: interfaces.NextArgs) => {
    let start = new Date().getTime();
    let result = planAndResolve(args);
    let end = new Date().getTime();
    console.log(`Woooo ${end - start}`);
    return result;
  };
}

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
myContainer.applyMiddleware(logger);

export { myContainer };
