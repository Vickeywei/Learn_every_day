/* 
变量
*/
/* 
布尔值
*/
let isDone: boolean = false;
/* 
数字
*/

export function sum(a: number, b: number): number {
  return a + b;
}


export function cloneArrayWithFrom(arr: any[]): any[] {
  return Array.from(arr);
}

export function cloneArrayWithMap(arr: any[]): any[] {
  return arr.map(i => i);
}

export function cloneArrayWithSlice(arr: any[]): any[] {
  return arr.slice();
}

export function cloneArrayWithFilter(arr: any[]): any[] {
  return arr.filter((i) => true);
}

export function cloneArrayWithOperatorSymbol(arr: any[]): any[] {
  return [...arr];
}