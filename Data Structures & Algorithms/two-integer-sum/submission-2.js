class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indices = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diff in indices) {
                return [indices[diff], i]
            }
            indices[nums[i]] = i;
        }
    }
}
