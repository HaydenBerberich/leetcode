class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (const str of strs) {
            const sorted = str.split("").sort().join("");
            if (groups.has(sorted)) groups.get(sorted).push(str);
            else groups.set(sorted, [str]);
        }

        const result = [];

        for (const value of groups.values()) result.push(value);

        return result;
    }
}
