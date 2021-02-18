/*
 * @Author: Fan
 * @Date: 2021-02-18 13:40:51
 * @description:
 */
import "reflect-metadata";
import { Warrior } from "./interfaces";
import { myContainer } from "./inversify.config";
import { TYPES } from "./types";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);
console.log(ninja.fight());
