/*
 * @Author: Fan
 * @Date: 2021-02-04 20:02:49
 * @description: 
 */
import "reflect-metadata"
import { Warrior,Weapon } from "./interfaces";
import { myContainer } from "./inversify.config";
import { TYPES } from "./types";


 const ninja = myContainer.get<Warrior>(TYPES.Warrior)

 // 获取promise
ninja.katanaProvider().then((katana: Weapon) => {
  ninja.katana = katana
  console.log(katana.hit())
}).catch((e:any) => console.log(e))