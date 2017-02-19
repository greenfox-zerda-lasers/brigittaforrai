numbers = [15, 57832, 782, 463281, 65, 9823, 673]
even = []
odd = []

for e in numbers:
    if e%2 == 0:
        even.append(e)
    else:
        odd. append(e)



print("Number of even numbers: " + str(len(even)))
print("Number of odd numbers: " + str(len(odd)))
