# Q 3 => Write a program to check whether a person is eligible for voting or not. (accept age from user)
# Answer =>
age = int(input("Enter Age : "))
if age>=18:
        status="Eligible"
else:
    status="Not Eligible"

print("You are ",status," for Vote.")