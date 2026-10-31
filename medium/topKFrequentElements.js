class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();

        for (const num of nums) {
            if (counts.has(num)) counts.set(num, counts.get(num) + 1);
            else counts.set(num, 1)
        }

        const sorted = [...counts].sort((a, b) => b[1] - a[1]);

        const res = [];

        for (let i = 0; i < k; i++) {
            res.push(sorted[i][0]);
        }

        return res;
    }
}
