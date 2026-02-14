 📘 README — RemoveDuplicate JavaScript Function

📌 Description

This JavaScript function **`RemoveDuplicate`** is used to remove duplicate values from an array and return a new array containing only **unique elements**.

It uses the built-in **`Set`** object, which automatically stores only unique values.

---

## ⚙️ How the Code Works

```js
function RemoveDuplicate(arr){
    return [...new Set(arr)];
}

console.log(RemoveDuplicate([1,2,3,4,5,4,3,5,3]));
```

### Step-by-Step Explanation:

1. The function takes an array `arr` as input.
2. `new Set(arr)` converts the array into a **Set**:

   * A Set automatically removes duplicate values.
3. The spread operator `...` converts the Set back into an array.
4. The unique array is returned and printed using `console.log()`.

---

## ▶️ Example

### Input:

```js
[1,2,3,4,5,4,3,5,3]
```

### Output:

```
[1, 2, 3, 4, 5]
```

---

## ✅ Requirements

* JavaScript ES6 or later (for `Set` and spread operator)

---

## 💡 Use Cases

* Removing duplicate numbers
* Cleaning repeated data from lists
* Preparing unique datasets for processing

---

## 🚀 Alternative Method (Using Filter)

```js
function RemoveDuplicate(arr){
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
```

---

## 👨‍💻 Purpose

This function is commonly used in beginner-level JavaScript programs to understand:

* Sets
* Spread operator
* Array handling

---
