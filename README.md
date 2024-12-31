# JavaScript Loose Typing and the + Operator

This example demonstrates a common issue in JavaScript stemming from its loose typing system. Specifically, it highlights the unexpected behavior of the `+` operator when dealing with mixed data types.

The `foo` function intends to add two numbers, but due to JavaScript's flexibility, the results vary depending on the input types.  String concatenation takes precedence over numerical addition, while booleans are coerced to strings.

This repo contains two files:

- `bug.js`: Illustrates the unexpected behavior.
- `bugSolution.js`: Presents a solution using type checking to handle various input types correctly.