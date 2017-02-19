# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():



    def __init__(self, name):
        self.name = name
        self.grades = []

    def add_grade(self, g):
        self.g = g
        if g < 6 and g > 0:
            self.grades.append(self.g)
            return self.grades
        else:
            print("sg's wrong! add your grade again!")


    def get_average(self):
        return sum(self.grades) // len(self.grades)


student1 = Student("Emma")
student1.add_grade(5)
student1.add_grade(4)
student1.add_grade(3)
student1.add_grade(4)
print(student1.get_average())
