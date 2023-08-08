```py
def length_of_longest_substring(s):
    char_set = set()
    max_length = 0
    left = 0
    right = 0
    
    while right < len(s):
        if s[right] not in char_set:
            char_set.add(s[right])
            max_length = max(max_length, right - left + 1)
            right += 1
        else:
            char_set.remove(s[left])
            left += 1
            
    return max_length

# Test cases
s1 = "abcabcbb"
s2 = "bbbbb"
s3 = "pwwkew"
print(length_of_longest_substring(s1))  # Output: 3
print(length_of_longest_substring(s2))  # Output: 1
print(length_of_longest_substring(s3))  # Output: 3
```