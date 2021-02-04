/*
 * @Author: Fan
 * @Date: 2021-02-02 19:28:11
 * @description: 
 */
import {Container, interfaces} from 'inversify'
import {TYPES} from "./types"
import {Warrior, Weapon, ThrowableWeapon} from "./interfaces"
import {Ninja, Katana, Shuriken} from "./entities"

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>('TYPES.Weapon').to(Katana);
// 绑定工厂函数
myContainer.bind<interfaces.Factory<Weapon>>(TYPES.Weapon).toFactory<Weapon>((context: interfaces.Context) => {
  return (s) => {
    // 接收参数
    console.log(s)
    return context.container.get<Weapon>('TYPES.Weapon')
  }
});
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export {myContainer}