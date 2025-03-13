// Primitive types: Variables directly hold the value, and assigning them to another variable creates an independent copy.
// Non - primitive types: Variables hold a reference to the memory location of the value, so assigning them to another variable shares the reference.


let obj1 = { name: "Sams" };  // `obj1` holds a reference to the object in memory.
let obj2 = obj1;              // `obj2` is assigned the same reference.

obj2.name = "Raitul";         // Modify the object through `obj2`.
console.log(obj1.name);       // "Raitul" (because `obj1` and `obj2` point to the same object)

// Here in the above code, obj1 and obj2 are referring the same object data.Thus, if i change the value in either object, it reflects on both

let arr1 = [1, 2, 3];  // `arr1` holds a reference to the array in memory.
let arr2 = arr1;       // `arr2` is assigned the same reference.

arr2[0] = 99;          // Modify the array through `arr2`.
console.log(arr1);     // [99, 2, 3] (both refer to the same array)


// Memory Management for Primitive Types(Stack Allocation)
// Memory Management for Non - Primitive Types(Heap Allocation)

// Stack Memory is used for storing primitive types and function calls. Each time you assign a value, a new copy is created in the Stack.
// Heap Memory is used for storing objects and arrays.Variables that reference the same object share the same location in memory, so changes to one variable affect the others.