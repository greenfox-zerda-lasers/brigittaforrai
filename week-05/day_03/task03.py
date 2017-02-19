# Write a Person class that have a name and a birth_date property
# It should raise an error of the birthdate is less than 0 or more than 2016

class Person():


    def __init__(self, name, birth_date):
        self.name = name
        self.birth_date = birth_date

        if int(birth_date) < 0 or int(birth_date) > 2016:
            raise ValueError('birth_date should be between 0 and 2016')
        print(name, int(birth_date))



student = Person("emma", 2000)
