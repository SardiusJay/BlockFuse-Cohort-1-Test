// The Solution using the Brute Force Method

//Loop through each element in nums, then loop through it again to see whether there is a value equal to target - nums[i].


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
            return [i, j];
            }
         }
        }
        return [];
    }

// Time Complexity: O(n²)
//Space Complexity: O(1)