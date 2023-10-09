const evaluate = (expression) => {
    let stack = [];
    let operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    for(let i = 0; i < expression.length; i++) {
        if(expression[i] === ' ') continue;

        if(expression[i] in operators) {
            let [b, a] = [stack.pop(), stack.pop()];
            stack.push(operators[expression[i]](a, b));
        } else {
            stack.push(Number(expression[i]));
        }
    }

    return stack.pop();
};

module.exports = evaluate;