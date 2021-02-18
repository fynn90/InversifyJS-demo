/*
 * @Author: Fan
 * @Date: 2021-02-07 11:05:39
 * @description:
 */
import "reflect-metadata";
import { MyContainer } from "./inversify.config";
import { IKatana } from "./types";

let KatanaInstance = MyContainer.get<IKatana>("Katana");

console.log(KatanaInstance.use());
