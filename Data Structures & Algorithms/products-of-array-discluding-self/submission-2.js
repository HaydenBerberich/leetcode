class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const ascending = [1];
        for (const num of nums) ascending.push(num * ascending.at(-1));

        const descending = [1];
        for (let i = nums.length - 1; i >= 0; i--) descending.unshift(nums[i] * descending[0]);

        const res = [];
        for (let i = 0; i < nums.length; i++) res.push(ascending[i] * descending[i + 1]);

        return res;
    }
}
