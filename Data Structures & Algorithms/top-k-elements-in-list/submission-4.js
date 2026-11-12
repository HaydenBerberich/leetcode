class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();

        for (const num of nums) counts.set(num, (counts.get(num) || 0) + 1);

        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const [key, value] of counts) freq[value].push(key);

        const res = [];

        for (let i = nums.length + 1; i > 0; i--) {
            if (freq[i]) {
                for (const n of freq[i]) {
                    res.push(n);
                    if (res.length >= k) return res;
                }
            }
        }
    }
}
