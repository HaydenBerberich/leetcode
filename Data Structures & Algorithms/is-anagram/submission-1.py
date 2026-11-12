class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        def letterCount(string):
            count = {}

            for char in string:
                if (char in count):
                    count[char] += 1
                else:
                    count[char] = 1

            return count

        return letterCount(s) == letterCount(t)