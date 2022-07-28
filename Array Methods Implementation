``` JavaScript
Array.prototype.forEach2 = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this)
  }
}

Array.prototype.map2 = function(func) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    const result = func(this[i], i, this)
    newArray.push(result)
  }
  
  return newArray;
}

Array.prototype.filter2 = function(func) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this))newArray.push(result)
  }
  
  return newArray;
}

Array.prototype.some2 = function(func) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) return true;
  }
  
  return false;
}

Array.prototype.every2 = function(func) {
  const newArray = [];
  
  for (let i = 0; i < this.length; i++) {
    if (!func(this[i], i, this)) return false;
  }
  
  return true;
}

const arr = [1, 2, 3, 4, 5];

arr.forEach2(element => console.log(element))

const arr2 = arr.map(element => element * 10)
const arr3 = arr.filter(element => element > 3)

const isSomeEven = arr.some2(element => element % 2 === 0)
const isEveryEven = arr.every2(element => element % 2 === 0)

console.log("arr2: " + arr2)
console.log("arr3: " + arr3)
console.log("isSomeEven: " + (isSomeEven ? "yes" : "no"))
console.log("isEveryEven: " + (isEveryEven ? "yes" : "no"))
```
