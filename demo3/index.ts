/*
 * @Author: Fan
 * @Date: 2021-02-04 17:22:19
 * @description: 
 */
import { Container } from "inversify";
import "reflect-metadata"
import { Warrior } from "./interfaces";
import { warriorModule, weaponModule, throwableWeaponModule} from "./inversify.config";
import { TYPES } from "./types";

let container = new Container();

container.load(warriorModule, weaponModule, throwableWeaponModule)

console.log(11)

const ninja = container.get<Warrior>(TYPES.Warrior)


//  const ninja = myContainer.get<Warrior>(TYPES.Warrior)

console.log(ninja.fight())