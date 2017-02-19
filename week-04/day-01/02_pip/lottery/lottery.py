# Create a method that returns the five most frequent lottery number in a pretty table format

from prettytable import PrettyTable

def five_most_frequent():
    f = open("otos.csv", "r")
    text = f.readlines()
    numbers = []
    lista = []
    dictionary = {}


    for x in text:
        line_1 = x.split(";")
        numbers= numbers + line_1[len(line_1)-5:]
    for n in range(0, len(numbers)-1):
        numbers[n] = int(numbers[n])
    for i in numbers:
         dictionary.update({numbers.count(i):i})
    return dictionary



print(five_most_frequent())
