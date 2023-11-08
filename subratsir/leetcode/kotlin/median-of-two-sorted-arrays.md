```kt
fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
    if (nums1.size > nums2.size) {
        return findMedianSortedArrays(nums2, nums1)
    }

    val m = nums1.size
    val n = nums2.size
    val halfLen = (m + n + 1) / 2

    var min = 0
    var max = m

    while (min <= max) {
        val i = (min + max) / 2
        val j = halfLen - i

        if (i < m && nums2[j - 1] > nums1[i]) {
            min = i + 1
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            max = i - 1
        } else {
            val maxOfLeft: Int
            if (i == 0) {
                maxOfLeft = nums2[j - 1]
            } else if (j == 0) {
                maxOfLeft = nums1[i - 1]
            } else {
                maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1])
            }

            if ((m + n) % 2 == 1) {
                return maxOfLeft.toDouble()
            }

            val minOfRight: Int
            if (i == m) {
                minOfRight = nums2[j]
            } else if (j == n) {
                minOfRight = nums1[i]
            } else {
                minOfRight = Math.min(nums1[i], nums2[j])
            }

            return (maxOfLeft + minOfRight) / 2.0
        }
    }

    return 0.0
}

// Example usage:
val nums1 = intArrayOf(1, 3)
val nums2 = intArrayOf(2)
val median = findMedianSortedArrays(nums1, nums2)
println(median) // Output: 2.0
```
