```kt
fun isPalindrome(x: Int): Boolean {
    if (x < 0 || (x != 0 && x % 10 == 0)) {
        return false
    }

    var reversedHalf = 0
    var num = x
    while (num > reversedHalf) {
        reversedHalf = reversedHalf * 10 + num % 10
        num /= 10
    }

    return num == reversedHalf || num == reversedHalf / 10
}
```