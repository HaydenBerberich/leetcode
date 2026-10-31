class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) encoded += str.length + "#" + str;

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        
        let left = 0;
        while (left < str.length) {
            let right = left;
            while (str[right] !== "#") right++;
            const length = Number(str.slice(left, right));
            left = right + 1;
            right += length + 1;
            decoded.push(str.slice(left, right));
            left = right;
        }

        return decoded;
    }
}
