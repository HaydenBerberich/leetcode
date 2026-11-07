class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const currWater = Math.min(heights[left], heights[right]) * (right - left);
            maxWater = Math.max(maxWater, currWater);

            if (heights[left] < heights[right]) {
                const currHeight = heights[left];
                left++;
                while (left < right && currHeight >= heights[left]) left++;
            } else if (left < right && heights[left] > heights[right]) {
                const currHeight = heights[right];
                right--;
                while (currHeight >= heights[right]) right--;
            } else {
                left++;
                right--;
            }
        }

        return maxWater;
    }
}
