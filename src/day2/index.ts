/*
函数重载
*/

// 为什么使用函数重载



// 函数重载
type myCustom = number | string

export function add(a: string, b: string): string;
export function add(a: string, b: number): string;
export function add(a: number, b: number): number;
export function add(a: string, b: number): string;
export function add(a: myCustom, b: myCustom): myCustom {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  else {
    return a + b;
  }
}
// 类实例方法重载

interface Person {
  name: string;
  age: number;
  gender:boolean;
}

class MyPerson {
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: number): number;
  add(a: string, b: number): string;
  add(a: myCustom, b: myCustom): myCustom {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    else {
      return a + b;
    }
  }

  public name: string = '';
  public age: number = 19;
  public gender:boolean = false;

  constructor();
  constructor(person: Person);
  constructor(obj?: any) {
    this.name = obj?.name;
    this.age = obj?.age;
    this.gender = obj?.gender;
  }
}

const person: Person = {
  name: 'vicky',
  age: 20,
  gender:false,
}

const pen1: MyPerson = new MyPerson(person);
console.log(pen1)

// 构造函数重载

// 特定重载签名

console.log(add(3, 4))


/*
类型断言
*/
const somevalue: any = 'this is a string'
// @ts-ignore
const strLength: number = (somevalue as string).length;

// 非空断言
function myFunc(maybeString: string | undefined | null): void {
  // const onlyString: string = maybeString
  const ignoreUndefinedandNull: string = maybeString!;
}


type NumGenerator = () => number

function myFunc2(numGenerator: NumGenerator | undefined) {
// Object is possibly 'undefined'.(2532)
// Cannot invoke an object which is possibly 'undefined'.(2722)
// const num1 = numGenerator(); // Error
console.log(typeof numGenerator)
const num2 = numGenerator!();
}

const fn: NumGenerator = ():number => {
  return 1
}

myFunc2(fn)

let x1!: number;

initNum();
console.log(2 * x1)

function initNum():void {
  x1 = 10
}