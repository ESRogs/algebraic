// What's in a name?

// // // Algebraic Data Types // // // 

// "algebraic" => an "algebra" of operations on a set
// in particular: sums(addition) and products(multiplication)

// These names make sense if you think in terms of set theory - a type is
// a set of possible values.

// sum types - adding two sets
// OR types
// key example
type Maybe<T> = T | undefined;

// product types - multiplying two sets
// AND types
// key example
type NumAndString = [number, string];
