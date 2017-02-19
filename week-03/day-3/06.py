# create a function that takes a list and returns a new list that is reversed

list = [1, 2, 3, 4, 5]

def reverse_list(list):
    new_list = []
    new_list = list[::-1]
    return new_list


print(reverse_list(list))
