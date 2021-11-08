The tasks of the topic "ESLint"
There is some project.

Implement a configuration of ESLint for this project to provide next rules:

Enforce indent of 4 spaces

incorrect code for this rule

if (a) {
 b = c;
}
correct code for this rule

if (a) {
    b = c;
}
Require spaces around operators

incorrect code for this rule

a=b+c;
correct code for this rule

a = b + c;
Enforce the consistent use of single quotes

incorrect code for this rule

a = "double";
correct code for this rule

a = 'single';
Require let or const instead of var

incorrect code for this rule

var a = 0;
correct code for this rule

let a = 0;
Require const declarations for variables that are never reassigned after declared

incorrect code for this rule

let a = 'it`s initialized and never reassigned';
correct code for this rule

const a = 'it`s initialized and never reassigned';
Enforce the use of === and !==

incorrect code for this rule

a == b
сorrect code for this rule

a === b
Disallow the use of console

incorrect code for this rule

console.log("Some message");
Disallow assignment operators in conditional expressions

incorrect code for this rule

if (a = 0) {
  b = c;
}
сorrect code for this rule

if (a === 0) {
  b = c;
}
Disallow unnecessary semicolons

incorrect code for this rule

a = b;;
сorrect code for this rule

a = b;
Disallow comments on the same line as code

incorrect code for this rule

a = 1; // a to 1
сorrect code for this rule

// a to 1
a = 1;
Disallow else blocks after return statements in if statements

incorrect code for this rule

function demo() {
  if (a) {
    return b;
  } else {
    return c;
  }
}
сorrect code for this rule

function demo() {
  if (a) {
    return b;
  }
  return c;
}
The last rule should be defined based on message of the autograding tests.
