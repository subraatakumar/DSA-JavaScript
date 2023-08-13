```py
def romanToInt(s: str) -> int:
    roman_values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    result = 0
    i = 0

    while i < len(s):
        current = roman_values[s[i]]
        next = roman_values[s[i + 1]] if i + 1 < len(s) else 0

        if current < next:
            result += next - current
            i += 1  # Skip the next character since it was already processed
        else:
            result += current

        i += 1

    return result

# Test cases
print(romanToInt("III"))      # Output: 3
print(romanToInt("LVIII"))    # Output: 58
print(romanToInt("MCMXCIV"))  # Output: 1994
```