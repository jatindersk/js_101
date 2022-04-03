let minilang = str => {
  let stack = [];
  let register = 0;

  str.split(' ').forEach(ops => {
    switch (ops) {
      case 'PUSH': {
        stack.push(register);
        break;
      }
      case 'PRINT': {
        console.log(register);
        break;
      }
      case 'MULT': {
        register *= stack.pop();
        break;
      }
      case 'ADD': {
        register += stack.pop();
        break;
      }
      case 'POP': {
        register = stack.pop();
        break;
      }
      case 'DIV': {
        register /= stack.pop();
        register = Math.floor(register);
        break;
      }
      case 'REMAINDER': {
        register = Math.floor(register % stack.pop());
        break;
      }
      case 'SUB': {
        register -= stack.pop();
        break;
      }
      default: {
        register = Number(ops);
      }
    }
  });
};

// minilang('PRINT');
// // 0

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

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)