class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        l_to_r = []

        product = 1
        for i, n in enumerate(nums):
            product *= n
            l_to_r.append(product)

        r_to_l = [None] * len(nums)
        product = 1
        for i in range(len(nums))[::-1]:
            product *= nums[i]
            r_to_l[i] = product

        res = [None] * len(nums)
        res[0] = r_to_l[1]
        res[len(nums)-1] = l_to_r[len(nums)-2]

        for i in range(1, len(nums) - 1):
            res[i] = l_to_r[i-1] * r_to_l[i+1]

        return res