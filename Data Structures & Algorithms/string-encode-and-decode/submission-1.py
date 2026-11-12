class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded = ""
        for s in strs:
            length = len(s)
            encoded += str(length) + "#" + s
        return encoded

    def decode(self, s: str) -> List[str]:
        res = []
        start = 0
        while start < len(s):
            end = start
            while end < len(s) and s[end] != "#":
                end += 1
            length = s[start:end]
            res.append(s[end+1:end+int(length)+1])
            start += len(length) + 1 + int(length)
        return res