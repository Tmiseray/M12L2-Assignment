import time

# Task 1:
def square_nums(n):
    start_time = time.time()
    squares = [num ** 2 for num in range(1, n + 1)]
    print(f"Squared Numbers List: {squares}")
    end_time = time.time()
    square_time = end_time - start_time
    print(f"Squared numbers list created in {square_time:.7f} seconds.")

square_nums(10)

# Task 2:
def sublist_reversal(arr, i, j):
    start_time = time.time()
    sublist = arr[i:j + 1]
    print(f"Reversed Sublist: {sublist[::-1]}")
    end_time = time.time()
    reversal_time = end_time - start_time
    print(f"Sublist reversal completed in {reversal_time:.7f} seconds.")

sublist_reversal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 2, 7)


# Task 3:
def merge_sort(arr1, arr2):
    start_time = time.time()
    new_arr = arr1 + arr2
    new_arr.sort()
    print(f"New Sorted Array: {new_arr}")
    end_time = time.time()
    merge_sort_time = end_time - start_time
    print(f"Merging and Sorting completed in {merge_sort_time:.7f} seconds.")


arr1 = [1, 3, 5, 7, 9]
arr2 = [0, 2, 4, 6, 8]
merge_sort(arr1, arr2)