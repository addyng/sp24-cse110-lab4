1. Line 12 will print `3`. Since `i` is a `var` variable, it has function scope, meaning it's still accessible inside the function after the `for loop` block. The reason `i == 3` is because the `for loop` only performs its loop body while `i < price.length`, which in this case, `price.length == 3`. So, the loop body performs for `i = 0, 1, and 2` then after the third iteration, `i` is incremented by 1 with `i++` becoming `i == 3`, then the condition is checked where `3 < prices.length` is false so the `for loop` stops leaving `i == 3`.

2. Line 13 will print `150`. Since `discountedPrice` is a `var` variable, it has function scope, meaning it's still accessible inside the function after the `for loop` block despite being declared in the loop. The reason `discountedPrice == 150` is because on the third or last iteration of the `for loop`, `discountedPrice` is assigned with the value of `prices[2] * (1 - 0.5)`, where `prices[2] == 300` is the third element of the `prices` array. So, `discountedPrice = 150` is the latest assignment done to `discountedPrice` before it's printed by Line 13.

3. Line 14 will print `150`. `finalPrice` is a `var` variable so it can be accessed anywhere inside the function after it's declared. The reason `finalPrice == 150` is because it's reassigned on Line 8 with the reassigned `discountedPrice` value on Line 7. This means that on the third or last iteration of the `for loop`, `discountedPrice == 150`, so Line 8 will reassign `finalPrice` with `Math.round(150 * 100) / 100`, which is `finalPrice = 150`.

4. The function will return `discounted`, which is an array with the values `[50, 100, 150]`. `discounted` is a `var` variable so it can be accessed and returned anywhere inside the function after it's declared. `discounted` is initialized as an empty array and then values are later pushed to it from the `for loop`. In the `for loop`, the loop iterates through each element in the `prices` array. For each iteration, the loop body calculates the `discountedPrice and finalPrice` then pushes the `finalPrice` to the `discounted` array. Since `prices = [100, 200, 300] and discount = 0.5`, the first iteration of the loop will push `50`, the second iteration will push `100`, and the third iteration will push `150` resulting in `discounted` being an array with the elements `[50, 100, 150]`.

5. Line 12 will return an error. The reason is because `i` is declared as a `let` variable, meaning it has block scope and can't be accessed outside of its block. In this case, `i` is declared inside the `for loop`, meaning its scope is the `for loop` block so `i` can't be accessed outside of the `for loop`.

6. Line 13 will return an error. The reason is because `discountedPrice` is declared as a `let` variable, meaning it has block scope and can't be accessed outside of its block. In this case, `discountedPrice` is declared inside the `for loop`, meaning its scope is the `for loop` block so `discountedPrice` can't be accessed outside of the `for loop`.

7. Line 14 will print `150`. `finalPrice` is declared as a `let` variable, meaning it has block scope and can be accessed anywhere in the block after it's declared. In this case, the block scope of `finalPrice` is the function itself. It's reassigned within the `for loop`, which has a block scope of its own, but since the `for loop` block is within the function block and `finalPrice's` block scope is the entire function, `finalPrice` can be accessed and reassigned in the `for loop`. `150` is printed because `finalPrice` is reassigned with the `discountedPrice` value in the last iteration of the `for loop`. In this case, the last or third iteration will reassign `discountedPrice` with `150`, then `finalPrice = Math.round(150 * 100) / 100 = 150`.

8. The function will return `discounted`, which is an array with the values `[50, 100, 150]`. `discounted` is `let` variable with its block scope being the entire function, meaning it can be accessed and modified anywhere within the function after it's declared. So despite the `for loop` having its own block scope, `discounted` can still be accessed and modified from the `for loop` because the function block scope encompasses the `for loop` block scope. `discounted` is initialized as an empty array and then the `for loop` iterates through the `prices` array. In each iteration, the loop calculates the `discountedPrice` and `finalPrice` of the current element in `prices` at index `i`, then pushes `finalPrice` to the `discounted` array. After three iterations, the `discounted` array has the values `[50, 100, 150]` which is returned by the function.

9. Line 11 will return an error. `i` is declared as a `let` variable inside the `for loop`, so its block scope is the `for loop` block. This means that `i` can't be accessed outside of the `for loop` block resulting in an error when Line 11 tries to `console.log(i)` as it can't access `i`.

10. Line 12 will print `3`. `length` is declared as a `const` variable, meaning it can't be reassigned and it can only be accessed within its block scope. In this case, `length's` block scope is the function itself, meaning it can be accessed anywhere within the function after it's declared and initialized. So despite the `for loop` having its own block scope, since `for loop` is within the block scope of the function, `length` can be used in the `for loop`. `length == 3` because `length` is assigned the length of the `prices` array, which in this case, the `prices` array has 3 elements so its length is 3.

11. The function will return `discounted`, which is an array with the elements `[50, 100, 150]`. `discounted` is declared as a `const variable`, meaning it can't be reassigned and it can only be accessed within its block scope. In this case, the block scope of `discounted` is the function itself, meaning it can be accessed by the `for loop`, whose block is encompassed by the function. `discounted` is initialized as an empty list on Line 3 which is assignment for `discounted`, so `discounted` can't be reassigned afterwards since it's a `const` variable. The reason why the `for loop` and Line 8 was able to modify the `discounted` array despite it being a `const` variable is because pushing to an array with `discounted.push(discountedPrice)` is not a reassignment. This means that the value, in this case a list, that is assigned to the `discounted` `const` variable is not immutable, but the `const` variable itself is immutable as it can't be reassigned. An array with the elements `[50, 100, 150]` is returned because the `for loop` iterates through the `prices` array, then for each element, calculates the `discountedPrice` and pushes that `discountedPrice` to the `discounted` array. In this case, `discount == 0.5` and `prices = [100, 200, 300]`, so half of each element results in `discounted` having an array with the elements `[50, 100, 150]`, which is returned by the function.

12. 
    - A. `student['name']`
    - B. `student['Grad Year']`
    - C. `student.greeting()`
    - D. `student['Favorite Teacher']['name']`
    - E. `student['courseLoad'][0]`

13. Arithmetic
    - A. `'32'` Reason: `2` was mapped to its string representation, `'2'`, so it did string concatenation with '3' + '2'
    - B. `1` Reason: `'3'` was mapped to its integer form, `3`, so it subtracted the two integers `3` - `2`
    - C. `3` Reason: `null` was mapped to its integer form, `0`, so it added the two integers `3` + `0`
    - D. `'3null'` Reason: `null` was mapped to its string representation, `'null'`, so it did string concatenation with `'3'` + `'null'`
    - E. `4` Reason: `true` was mapped to its integer form, `1`, so it added the two integers `1` + `3`
    - F. `0` Reason: Both were mapped to their integer forms, `false` becoming `0` and `null` becoming `0`, so it added the two integers `0` + `0`
    - G. `'3undefined'` Reason: `undefined` was mapped to its string representation, `'undefined'`, so it did string concatentation with `'3'` + `'undefined'`
    - H. `NaN` Reason: Since the operator is subtraction, both were mapped to their integer forms, `'3'` becoming `3` and `undefined` becoming `NaN`, then the subtraction between `3` - `NaN` is `NaN`

14. Comparison
    - A. `true` Reason: `'2'` was converted to its integer form, `2`, where `2 > 1` is true.
    - B. `false` Reason: Both are strings so string comparison happened. In string comparison, lexicographical order is used, in which the characters are compared from left to right. In this case, the first letter for `'2'` is `'2'` while the second letter for `'12'` is `'1'`, so the first comparison is `'2' < '1'`. JavaScript compares their Unicode value and `'2'` has a greater unicode value than `'1'` so the comparison returns false.
    - C. `true` Reason: `==` is a regular equality check which coverts the values to numbers if they're different types. So, `'2'` was converted to its integer form, `2`, then the comparison become `2 == 2` which is true.
    - D. `false` Reason: `===` is a strict equality check which compares the values without converting the types even if they are different types. In this case, `2` is an integer and `'2'` is a string, so the comparison returns false since they are different types.
    - E. `false` Reason: Since it's a regular equality check, `true` is converted to its integer form, `1`, so the comparison becomes `1 == 2` which is false
    - F. `true` Reason: Since it's a strict equality check, no type conversions happen due to the comparator. The Boolean conversion converts the integer value `2` into `true` so the comparison becomes `true === true` which is true.

15. The difference between the `==` and `===` operators is that `==` converts the values being compared to numbers if they are of different types, while `===` doesn't convert the values at all. `==` is called a `regular equality check`. When using `==`, if the operands are of differing types, then the `==` operator will convert both values to numbers and then check for equality. `===` is called a `strict equality check` and doesn't do type conversion. When using `===`, if the operands are of differing types, then the `===` will simply return `false` without trying to convert them.

16. In `part2-question16.js` file

17. The function will return `newArr`, which is an array with the values `[2, 4, 6]`. `modifyArray([1,2,3], doSomething)` will pass in `[1,2,3]` as the array for the parameter `array` and `doSomething` as the function for the parameter `callback`. In `modifyArray`, a `const` variable `newArr` is created and is initialized with an empty array. Then the `for loop` iterates through the elements of `array`, which is the passed in array `[1, 2, 3]` by comparing `i` with `array.length`. For each iteration of the `for loop`, `newArr.push(callback(array[i]))` is called, then plugging in the passed in callback function `doSomething`, Line 4 becomes `newArray.push(doSomething(array[i]))`. Then for each iteration of the loop, `doSomething(array[i])` is called, passing in the current element `array[i]` into the `doSomething(num)` function for the parameter `num`. In `doSomething(num)`, `num` is multiplied by 2 and then returned to be used as the value for the parameter in the `newArr.push(value)` function. For example, when `i == 0`, Line 4 calls `newArray.push(doSomething(1))`, then `doSomething(1)` returns `2`, then Line 4 becomes `newArray.push(2)` resulting in the `newArr` array being `[2]`. The loop does this for the rest of the passed in array `[1,2,3]` resulting in `newArr` holding the array `[2,4,6]` which is returned by the function.

18. In `part2-question18.js` file

19. The output of the above code is 
    - `1`
    - `4`
    - `3`
    - `2`

The reason for this ordering is because `setTimeout()` is an asynchronous function and asynchronous functions don't prevent other functions from executing on the function stack. In this case, Line 2 is executed, printing out `1`. Then Lines 3 and 4 are ran, but nothing is printed yet until Line 5 is finished executing and `4` is printed out. Then, Line 3 has a delay of 1 second so Line 4 will be the first to print out `3` since it has a delay of 0, then Line 3 will print out `2` after its delay is over. Essentially, non-asynchronous functions take priority before asynchronous functions.
