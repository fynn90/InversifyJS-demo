/*
 * @Author: Fan
 * @Date: 2021-02-07 11:06:19
 * @description:
 */

import { Container } from "inversify";
import { Katana } from "./entities";
import { IKatana } from "./types";

const MyContainer = new Container();
MyContainer.bind<IKatana>("Katana").to(Katana);

export { MyContainer };
