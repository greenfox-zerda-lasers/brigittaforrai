numbers = [3, 4, 5, 6, 7, 665, 54, 54, 534, 21, 45, 56, 765, 4, 43, 34,43, 43, 3]
# write a function that reverses a list

def reverse(numbers):
    x = 0
    y = len(numbers)
    while y >= 0:
        numbers.insert(y, numbers[x])
        numbers.remove(numbers[x])
        y = y -1
    print(numbers)



reverse(numbers)
