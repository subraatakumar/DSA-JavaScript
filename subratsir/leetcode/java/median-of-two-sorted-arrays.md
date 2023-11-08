```java
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) {
        int[] temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    
    int m = nums1.length;
    int n = nums2.length;
    int halfLen = (m + n + 1) / 2;
    
    int min = 0;
    int max = m;
    
    while (min <= max) {
        int i = (min + max) / 2;
        int j = halfLen - i;
        
        if (i < m && nums2[j - 1] > nums1[i]) {
            min = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            max = i - 1;
        } else {
            int maxOfLeft;
            if (i == 0) {
                maxOfLeft = nums2[j - 1];
            } else if (j == 0) {
                maxOfLeft = nums1[i - 1];
            } else {
                maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            
            if ((m + n) % 2 == 1) {
                return maxOfLeft;
            }
            
            int minOfRight;
            if (i == m) {
                minOfRight = nums2[j];
            } else if (j == n) {
                minOfRight = nums1[i];
            } else {
                minOfRight = Math.min(nums1[i], nums2[j]);
            }
            
            return (maxOfLeft + minOfRight) / 2.0;
        }
    }
    
    return 0;
}

// Example usage:
int[] nums1 = {1, 3};
int[] nums2 = {2};
double median = findMedianSortedArrays(nums1, nums2);
System.out.println(median); // Output: 2.0
```