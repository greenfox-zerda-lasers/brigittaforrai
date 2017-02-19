names = ['Zakarias', 'Hans', 'Otto', 'Ole']
# create a function that returns the shortest string
# from a list

def shortest(names):
    shortest = names[0]
    for i in names:
        if len(i) < len(shortest):
            shortest = i
    return shortest

print(shortest(names))
