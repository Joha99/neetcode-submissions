class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        // when we hit an operator, we want to do some operation on the previous two numbers
        // as we go through items in tokens, push them to a stack if they are numbers
        // else pop the last two numbers, do the operation, and push them back onto the stack

        const stack: number[] = [];

        const doOperation = (operator: string) => {
            const first = stack.pop(); // most recent value 
            const second = stack.pop(); // older value 

            if (operator === "+") {
                stack.push(second + first);
            } else if (operator === "-") {
                stack.push(second - first);
            } else if (operator === "*") {
                stack.push(second * first);
            } else {
                stack.push(Math.trunc(second / first));
            }
        };

        for (const token of tokens) {
            switch (token) {
                case "+": {
                    doOperation("+");
                    break;
                }
                case "-": {
                    doOperation("-");
                    break;
                }
                case "*": {
                    doOperation("*");
                    break;
                }
                case "/": {
                    doOperation("/");
                    break;
                }
                default: {
                    stack.push(parseInt(token));
                }
            }

        }

        return stack.pop();
    }
}
