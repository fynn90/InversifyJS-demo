/*
 * @Author: Fan
 * @Date: 2021-02-07 11:06:09
 * @description: 
 */

import { injectable, postConstruct } from "inversify";
import { IKatana } from "./types";

@injectable()
class Katana implements IKatana {
  constructor() {
    console.log("Katana is born!")
  }

  public use() {
    return "Used Katana!"
  }

  /**
   * @postConstruct 装饰器到一个类或者方法。
   * 这个装饰器将在一个对象被示例化之后，
   * 以及在所有激活句柄之前运行。
   * 当构造器已经被调用但是组件还没有初始化或者你想在构造器被调用后执行一个初始化逻辑时非常有用。
   */
  @postConstruct()
  public testMethod() {
    console.log("testMethod")
  }
}

export {Katana}