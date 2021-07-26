import os
def create_file(text, email):
    # check if file exists
    file_exists = os.path.exists(email + ".txt")

    if file_exists:
        with open(email + ".txt", "a+") as f:
            f.write('\n\n' + text)
    else:
        file = open(email + ".txt", "w") 
        file.write(text)
        file.close() 


create_file("sample text", "someemail@gmail.com")
