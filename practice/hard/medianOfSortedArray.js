var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArray = [...nums1, ...nums2].sort((a,b)=>a-b)
    let length = sortedArray.length

    if(length % 2 === 1 ){
        return sortedArray[(length -1) / 2]
    }else{
        return (sortedArray[length/2] + sortedArray[length/2-1])/2
    }
};

let nums1 = [1,3], nums2 = [2 , 7]
console.log(findMedianSortedArrays(nums1, nums2))