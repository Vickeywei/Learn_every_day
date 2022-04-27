/*
变量
*/
/*
布尔值
*/
const isDone: boolean = false;
/*
数字
*/

const aNumber: number = 1
const bNumber: number = 1.0
const cNumber: number = 0xf00a; // 16进制
const dNumber: number = 0b1010; // 二进制
const eNumber: number = 0o704;  // 八进制
console.log(aNumber, bNumber, cNumber, dNumber, eNumber);

// 字符串

const aString: string = 'a';

const bString: string = `${bNumber}`
console.log(aString, bString)
// 基础变量联系
const name: string = 'vicky'
const age: number = 28
const gender: boolean = false;
const helloVicky = `hello my name is ${name}, age is ${age} ,gender is ${gender}`
console.log(helloVicky)


/*
数组
*/

// 字符串数组
const strs: string[] = ['1', '2 ', '4']
// const strs1: Array<string> = ['1', '2 ', '4']
// 数值数组
const nums: number[] = [1, 2, 4]
// const nums1: Array<number> = [1, 2, 4]
// any 数组
const anys: any[] = [1, '2',]
// const anys1: Array<any> = [1, '2', {}]

/*
元祖
*/

const tupex: [number, string, object, string[], any, ...any] = [1, '2', {}, ['1'], 1]

console.log(tupex);

tupex[7] = 'word'

console.log(tupex)


/*
枚举

*/

enum Color { Red = 1, Green, Blue }

const colora: Color = Color.Red
console.log(colora)

const colorName: string = Color[3]

console.log(colorName)

/*
Any

*/



let anya: any = []
anya = '我'
console.log(anya)
anya = false
console.log(anya)

// console.log(anya.ifItExists())
// console.log(anya.toFixed())

const anyb: object = {}
console.log(anyb.valueOf())

const ro: ReadonlyArray<number> = [1,2,3,5]
console.log(ro.length);

let normalA: number[] = [23, 4, 5]
normalA = ro as number[]
console.log(normalA);

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