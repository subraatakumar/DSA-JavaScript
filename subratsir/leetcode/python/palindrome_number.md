```py
def isPalindrome(x):
    if x < 0 or (x != 0 and x % 10 == 0):
        return False
    
    reversed_half = 0
    num = x
    while num > reversed_half:
        reversed_half = reversed_half * 10 + num % 10
        num //= 10
    
    return num == reversed_half or num == reversed_half // 10
```