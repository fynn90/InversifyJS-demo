/*
 * @Author: Fan
 * @Date: 2021-02-08 11:51:07
 * @description:
 */

import { Container } from "inversify";
import { INinja, Ninjia, IWeapon, katana, Shuriken } from "./entities";

const MyContainer = new Container();

MyContainer.bind<INinja>("Ninja").to(Ninjia);
MyContainer.bind<IWeapon>("Weapon").to(katana);
MyContainer.bind<IWeapon>("Weapon").to(Shuriken);

export { MyContainer };
