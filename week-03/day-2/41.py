students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Teodor', 'age': 3, 'candies': 2}
]

# create a function that counts the students that
# has more than 4 candies

def studets_with_candies(students):
    number_of_students = 0
    for x in students:
        if x['candies'] > 4:
            number_of_students = number_of_students + 1
    return number_of_students



print(studets_with_candies(students), "students have more than 4 candies")
