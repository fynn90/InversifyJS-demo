/*
 * @Author: Fan
 * @Date: 2021-02-04 16:39:51
 */
import { Container } from "inversify";
import { Katana, Shuriken } from "./entities";
import { Weapon } from "./interfaces";

let container = new Container();

container.bind<Weapon>("Weapon").to(Katana);
container.bind<Weapon>("Weapon").to(Shuriken);

// 获取所有的 标识符实例
let weapons = container.getAll<Weapon>("Weapon");

console.log(weapons);

console.log(weapons[1].hit());

interface Intl {
  hello?: string;
  goodbye?: string;
}

// 绑定一个具体的对象数据
container
  .bind<Intl>("Intl")
  .toConstantValue({ hello: "Hi, Fan" })
  .whenTargetNamed("f");
container
  .bind<Intl>("Intl")
  .toConstantValue({ goodbye: "goodbye Fan!" })
  .whenTargetNamed("f");

container
  .bind<Intl>("Intl")
  .toConstantValue({ hello: "Hi, Echo" })
  .whenTargetNamed("E");
container
  .bind<Intl>("Intl")
  .toConstantValue({ goodbye: "goodbye Echo!" })
  .whenTargetNamed("E");

let f = container.getAllNamed<Intl>("Intl", "f");

console.log(f);
