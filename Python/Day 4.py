#Q1. Python program to print Highest Common Factor (HCF) of two numbers
#Example : Take values according to you

 x = int (input ("Enter first number: ")) 
  y = int (input ("Enter second number: ")) 
 if x > y:
x, y = y
  , x 
 for i
  in range (1, x + 1):
if x
    %i == 0 and y % i == 0:
hcf = i 
	
print ("HCF of", x, "and", y, "is:", hcf) 
"""
Q2. What will be the output of the following Python code?
i=0
def change(i):
i=i+1
return i
change(1)
print(i)

output is = 0

Q3. What will be the output of the following Python code?
def a(b):
b = b + [5]
c = [1, 2, 3, 4]
a(c)
print(len(c))

output is = 5

Q4 . What will be the output of the following Python code?
a=10
b=20
def change():
global b
a=45
b=56
change()
print(a)
print(b)

output is = 10 ,56

Q5. What will be the output of the following Python code?
def change(i = 1, j = 2):
i = i + j
j = j + 1
print(i, j)
change(j = 1, i = 2)

output is = 3 , 2



