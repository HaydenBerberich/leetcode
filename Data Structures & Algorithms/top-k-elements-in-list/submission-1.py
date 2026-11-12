class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_count = Counter(nums)

        sorted_count = dict(sorted(num_count.items(), key=lambda x: x[1]))

        return(list(sorted_count.keys())[::-1][:k])