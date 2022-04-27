import {
  sum,
  cloneArrayWithFilter,
  cloneArrayWithFrom,
  cloneArrayWithMap,
  cloneArrayWithOperatorSymbol,
  cloneArrayWithSlice


} from './index'
test("sum(1,1) equal (2)", () => {
  expect(sum(1,1)).toBe(2)
})

test("Array.prototype.map", () => {
  const arr: number[] = [1, 2, 3]
  const newArr: number[] = cloneArrayWithMap(arr)
  newArr[0] = 0;
  expect(newArr).not.toEqual(arr)
  expect(newArr).toEqual([0, 2, 3])
  expect(arr).toEqual([1,2,3])
})

test("Array.prototype.filter", () => {
  const arr: number[] = [1, 2, 3]
  const newArr: number[] = cloneArrayWithFilter(arr)
  newArr[0] = 0;
  expect(newArr).not.toEqual(arr)
  expect(newArr).toEqual([0, 2, 3])
  expect(arr).toEqual([1,2,3])
})

test("Array.prototype.slice", () => {
  const arr: number[] = [1, 2, 3]
  const newArr: number[] = cloneArrayWithSlice(arr)
  newArr[0] = 0;
  expect(newArr).not.toEqual(arr)
  expect(newArr).toEqual([0, 2, 3])
  expect(arr).toEqual([1,2,3])
})

test("Array.prototype.from", () => {
  const arr: number[] = [1, 2, 3]
  const newArr: number[] = cloneArrayWithFrom(arr)
  newArr[0] = 0;
  expect(newArr).not.toEqual(arr)
  expect(newArr).toEqual([0, 2, 3])
  expect(arr).toEqual([1,2,3])
})

test("Array clone with operator symbol", () => {
  const arr: number[] = [1, 2, 3]
  const newArr: number[] = cloneArrayWithOperatorSymbol(arr)
  newArr[0] = 0;
  expect(newArr).not.toEqual(arr)
  expect(newArr).toEqual([0, 2, 3])
  expect(arr).toEqual([1,2,3])
})
