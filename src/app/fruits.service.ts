import { Injectable } from '@angular/core';

const FRUITS = [
  'alma',
  'körte',
  'szilva'
];

@Injectable()
export class FruitsService {

  getFruits(): Promise<string[]> {
    return Promise.resolve([
      'alma',
      'körte',
      'szilva'
    ]);
  }

  getFruitsSlowly(): Promise<string[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(FRUITS), 2000);
    });
  }

  getFruit(id: number): Promise<string> {
    return Promise.resolve(FRUITS[id]);
  }

}
