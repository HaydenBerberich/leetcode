class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        function letterCount(str) {
            let count = new Map();
            for (let char of str) {
                if (count.has(char)) count.set(char, count.get(char) + 1);
                else count.set(char, 1)
            }
            console.log(count)
            return count;
        }

        const sMap = letterCount(s);
        const tMap = letterCount(t);

        if (sMap.size !== tMap.size) return false;

        for (const [key, value] of sMap) {
            if (tMap.get(key) !== value) return false;
        }

        return true;
    }
}
