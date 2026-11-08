class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        for (const c of s) {
            if (c === "(" || c === "{" || c === "[") stack.push(c);
            else if (c === ")" && stack.at(-1) === "(") stack.pop();
            else if (c === "}" && stack.at(-1) === "{") stack.pop();
            else if (c === "]" && stack.at(-1) === "[") stack.pop();
            else return false;
        }

        return stack.length === 0;
    }
}
