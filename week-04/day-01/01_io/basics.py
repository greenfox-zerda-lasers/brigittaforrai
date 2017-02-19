# 1. Create a method that reads all contents of a file when its name given as param
def readfile(file_name):
    f = open(file_name)
    result = f.read()
    f.close()
    return result

print(readfile('./texts/zen_of_python.txt'))

# 2. Create a method that gets a file_name and a number as param and reads the numberth line of the file
def readline(file_name, number):
    f = open(file_name)
    result = f.readlines()[number-1].rstrip()
    f.close()
    return result

#print(readline('texts/zen_of_python.txt', 2))

# 3. Create a method that gets a long sentence as param and gives back the contained words in a list
def words(sentence):
    return sentence[:len(sentence)-1].split(" ")

long= "This is a long sentence."
print(words(long))

# 4. Create a method that gets a list of words and creates a sentence with the words separated by spaces
words_string = ['This', 'is', 'a', 'long', 'sentence']
def sentence(words):
    s = " "
    return s.join(words) + "."

print(sentence(words_string))

# 5. Create a method that gets a string and gives back the character codes in a list
string= "almafa"
def char_codes(string):
    character_list = []
    for c in string:
        character_list.append(ord(c))
    return character_list

print(char_codes(string))

# 6. Create a method that gets a list of integers and gives back a string which characters are created from the numbers used as character codes
char_codes_list = [97, 108, 109, 97, 102, 97]
def string(char_codes):
    word = ""
    for x in char_codes:
        word = word + chr(x)
    return word

print(string(char_codes_list))
