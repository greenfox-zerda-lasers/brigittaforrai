# create a function that returns it's input factorial

def factorial(number):
    result = 1
    while number > 1:
        result = result * number * (number-1)
        number = number -2
    return result


print(factorial(5))
