function print(register) {
  console.log(register);
}

function isStackError(stack) {
  if (!stack.length) {
    console.log(`Error: Stack is empty.`);
  }
}

function push(stack, register) {
  stack.push(register);
}

function pop(stack, register) {
  isStackError(stack);
  register = stack.pop();
  return register;
}

function add(stack, register) {
  register += stack.pop();
  return register;
}

function sub(stack, register) {
  register -= stack.pop();
  return register;
}

function mult(stack, register) {
  register *= stack.pop();
  return register;
}

function div(stack, register) {
  return Math.floor(register / stack.pop());
}

function remainder(stack, register) {
  return Math.floor(register % stack.pop());
}

let minilang = prog => {
  let stack = [];
  let register = 0;

  prog.split(' ').forEach((op,idx) => {
    if (op === 'PRINT') print(register);
    if (op === 'PUSH') push(stack, register);
    if (op === 'POP') register = pop(stack, register);
    if (op === 'ADD') register = add(stack, register);
    if (op === 'SUB') register = sub(stack, register);
    if (op === 'MULT') register = mult(stack, register);
    if (op === 'DIV') register = div(stack, register);
    if (op === 'REMAINDER') register = remainder(stack, register);
    if (Number.isInteger(parseInt(op, 10))) register = parseInt(op, 10);
    else {
      console.log(`Invalid token / operation detected at index ${idx}.`);
    }
  });
};

// minilang('POP PRINT'); // further exploration

// minilang('POPS PRINT'); // further exploration

minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)