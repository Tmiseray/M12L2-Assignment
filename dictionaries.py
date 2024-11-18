import time

# Task 1:
def merge_dicts(dict1, dict2):
    start_time = time.time()
    new_dict = {**dict1, **dict2}
    for key, value in new_dict.items():
        if key in dict1 and key in dict2:
            new_dict[key] = [dict1[key], value]
    print(f"New Dictionary: {new_dict}")
    end_time = time.time()
    merge_time = end_time - start_time
    print(f"Merge of dictionaries completed in {merge_time:.7f} seconds.")

dict1 = {1: 'one', 2: 'two', 3: 'three'}
dict2 = {3: 'second-three', 4: 'four', 5: 'five'}
merge_dicts(dict1, dict2)


# Task 2:
def dict_intersection(dict1, dict2):
    start_time = time.time()
    intersect_dict = dict(dict1.items() & dict2.items())
    print(f"Intersection: {intersect_dict}")
    end_time = time.time()
    intersect_time = end_time - start_time
    print(f"Intersection of dictionaries completed in {intersect_time:.7f} seconds.")

dict1 = {1: 'one', 2: 'two', 3: 'three'}
dict2 = {3: 'three', 4: 'four', 5: 'five'}
dict_intersection(dict1, dict2)


# Task 3:
def count_word_frequency(word_list):
    start_time = time.time()
    
    word_count = {}
    
    for word in word_list:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    
    end_time = time.time()
    execution_time = end_time - start_time
    
    print(f"Word Frequency: {word_count}")
    print(f"Time taken: {execution_time:.7f} seconds.")
    
    return word_count

words = ["apple", "banana", "apple", "orange", "banana", "apple"]
count_word_frequency(words)
