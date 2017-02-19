# 1. write a recursive function
# that takes one parameter: n
# and counts down from n

list = []
def recursive(n):

    if n <= -100: #base case
        list.append(1)
        return list
    else:
        list.append(n)
        recursive(n-1)
        return list


print(recursive(5))
