class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const match = (expression) => {
    let stack = new Stack();
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(' || expression[i] === '[' || expression[i] === '{') {
            stack.push(expression[i]);
        } else if (expression[i] === ')' || expression[i] === ']' || expression[i] === '}') {
            if (stack.isEmpty()) {
                return false;
            } else {
                let top = stack.pop();
                if (brackets[top] !== expression[i]) {
                    return false;
                }
            }
        }
    }

    return stack.isEmpty();
};

module.exports = match;