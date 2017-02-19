# Create a method that decrypts texts/encoded_zen_lines.txt
def decrypt(file_name):
    f = open(file_name)
    text = f.read()
    new_text =''


    for char in text:
        if char == " " or char == "\n":
            new_text = new_text + char
        elif char != " " or char != "\n":
            new_text = new_text + chr((ord(char)-1))

    return new_text

print(decrypt('./texts/encoded_zen_lines.txt'))
