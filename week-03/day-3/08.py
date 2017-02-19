# Create a new class called `Person` that has a first_name and a last_name (takes it in it's constructor)
# It should have a `greet` method that prints it's full name

# Create a `Student` class that is the child class of `Person`
# it should have a method to add grades
# it should have a `salute` method that prints it's full name and the average of it's grades as well

class Person():

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def greet(self):
        print("Good morning %s %s!" % (self.first_name, self.last_name))

class Student(Person):

    grades_list = []

    def add_grades(self, grade):
        self.grade = grade
        if self.grade >5 or self.grade < 1:
            print("Ooops, sg's wrong! Try again!")
        else:
            self.grades_list.append(self.grade)

    def salute(self):
        self.average = sum(self.grades_list) / len(self.grades_list)
        print("Your average is: %s." % (self.average))

student1 = Student("Emma", "Parker")
student1.greet()
student1.add_grades(5)
student1.add_grades(2)
student1.add_grades(3)
student1.add_grades(5)
student1.salute()
student1.add_grades(6)
