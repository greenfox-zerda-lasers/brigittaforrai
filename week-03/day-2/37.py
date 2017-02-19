numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def filtering(numbers):
    even_numbers = []
    for i in numbers:
        if i%2 == 0:
            numbers.remove(i)
            even_numbers.append(i)
    print("filtered odd numbers are: %s" %(numbers))
    return even_numbers


even_list = filtering(numbers)
print("even numbers in new list, called even_list, are: ", even_list)
