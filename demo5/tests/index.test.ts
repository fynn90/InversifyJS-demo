/*
 * @Author: Fan
 * @Date: 2021-02-02 20:00:15
 * @description: 
 */
import { Warrior } from "../interfaces";
import { myContainer } from "../inversify.config";
import { TYPES } from "../types";


 const ninja = myContainer.get<Warrior>(TYPES.Warrior)

 describe('jest', () => {
   it('inversify', () => {
     expect(ninja.fight()).toBe('cut!')
   })
 })