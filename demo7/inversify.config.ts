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
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
// 给一个类型添加一个激活句柄是可能的。激活句柄在依赖被找到后、但是还没有被添加到缓存（如果是单例的话）并注入之前被调用。
// 感觉不如直接 写个 AOP装饰器来的方便
myContainer
  .bind<Weapon>(TYPES.Weapon)
  .to(Katana)
  .onActivation((context: interfaces.Context, _katana) => {
    let handle = {
      apply(target: any, thisArgument: any, argumentsList: any) {
        console.log(`Starting: ${new Date().getTime()}`);
        let result = target.apply(thisArgument, argumentsList);
        console.log(`Finished:${new Date().getTime()}`);
        return result;
      },
    };
    _katana.hit = new Proxy(_katana.hit, handle);
    return _katana;
  });
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
