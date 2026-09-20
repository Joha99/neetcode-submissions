class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const brackets: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const curr = s[i];
            const lastBracket = brackets.length !== 0 ? brackets[brackets.length - 1] : undefined;

            switch (curr) {
                case "(":
                case "[":
                case "{":
                    brackets.push(curr);
                    break;
                case ")": {
                    if (lastBracket === "(") {
                        brackets.pop();
                        break;
                    } else {
                        return false;
                    }
                }
                case "]": {
                    if (lastBracket === "[") {
                        brackets.pop();
                        break;
                    } else {
                        return false;
                    }
                }
                case "}": {
                    if (lastBracket === "{") {
                        brackets.pop();
                        break;
                    } else {
                        return false;
                    }
                }
            }
        }
        return brackets.length === 0;
    }
}
