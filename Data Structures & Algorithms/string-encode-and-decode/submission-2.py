class Solution:

    def encode(self, strs: List[str]) -> str:
        encode = ""

        for s in strs:
            encode += str(len(s)) + "*" + s

        return encode

    def decode(self, s: str) -> List[str]:
        res = []
        start = 0
        while start < len(s):
            stop = start
            while s[stop] != "*":
                stop += 1
            length = int(s[start:stop])
            start = stop + 1
            stop = start + length
            res.append(s[start:stop])
            start = stop
        return res