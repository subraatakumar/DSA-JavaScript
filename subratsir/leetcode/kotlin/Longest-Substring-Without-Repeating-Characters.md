```kt
fun lengthOfLongestSubstring(s: String): Int {
    val charSet = HashSet<Char>()
    var maxLength = 0
    var left = 0
    var right = 0

    while (right < s.length) {
        if (!charSet.contains(s[right])) {
            charSet.add(s[right])
            maxLength = maxOf(maxLength, right - left + 1)
            right++
        } else {
            charSet.remove(s[left])
            left++
        }
    }

    return maxLength
}

fun main() {
    val s1 = "abcabcbb"
    val s2 = "bbbbb"
    val s3 = "pwwkew"
    println(lengthOfLongestSubstring(s1))  // Output: 3
    println(lengthOfLongestSubstring(s2))  // Output: 1
    println(lengthOfLongestSubstring(s3))  // Output: 3
}
```