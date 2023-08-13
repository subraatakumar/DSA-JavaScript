```js
fun romanToInt(s: String): Int {
    val romanValues = mapOf(
        'I' to 1,
        'V' to 5,
        'X' to 10,
        'L' to 50,
        'C' to 100,
        'D' to 500,
        'M' to 1000
    )

    var result = 0
    var i = 0

    while (i < s.length) {
        val current = romanValues[s[i]]!!
        val next = if (i + 1 < s.length) romanValues[s[i + 1]]!! else 0

        if (current < next) {
            result += next - current
            i++ // Skip the next character since it was already processed
        } else {
            result += current
        }

        i++
    }

    return result
}

fun main() {
    println(romanToInt("III"))     // Output: 3
    println(romanToInt("LVIII"))   // Output: 58
    println(romanToInt("MCMXCIV")) // Output: 1994
}
```