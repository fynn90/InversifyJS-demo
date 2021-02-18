/*
 * @Author: Fan
 * @Date: 2021-02-02 19:28:11
 * @description: 
 */
import {Container} from 'inversify'
import {TYPES} from "./types"
import {Warrior, Weapon, ThrowableWeapon} from "./interfaces"
import {Ninja, Katana, Shuriken} from "./entities"

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana).whenTargetNamed('strong');
myContainer.bind<Weapon>(TYPES.Weapon).to(Shuriken).whenTargetNamed('weak');

export {myContainer}