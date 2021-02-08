/*
 * @Author: Fan
 * @Date: 2021-02-08 11:50:55
 * @description:
 */
import "reflect-metadata";
import { MyContainer } from "./inversify.config";
import { INinja } from "./entities";

const ninja = MyContainer.get<INinja>("Ninja");
ninja.testMethod();
