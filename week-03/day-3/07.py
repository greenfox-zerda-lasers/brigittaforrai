# create a function that takes a list and returns a new list with all the elements doubled

list = [1, 2, 3, 4, 5, 33, 54, 67]

def double_list(list):
    new_list = []
    for e in list:
        new_list.append(e*2)
    return new_list

print(double_list(list))
