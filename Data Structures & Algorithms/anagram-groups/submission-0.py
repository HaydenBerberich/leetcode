class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}

        for s in strs:
            sorted_s = ''.join(sorted(s))
            if sorted_s in groups:
                groups[sorted_s].append(s)
            else:
                groups[sorted_s] = [s]

        ans = []

        for g in groups.values():
            ans.append(g)

        return ans