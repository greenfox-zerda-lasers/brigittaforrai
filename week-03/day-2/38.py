numbers = [7, 5, 8, -1, 2]
# Write a function that returns the minimal element
# in a list (your own min function)

def minimum(numbers):
    numbers.sort()
    return numbers[0]

smallest_number = minimum(numbers)
print(smallest_number)
