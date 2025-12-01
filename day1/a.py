print("Hello, World!")

current = 50
numberOfZeros = 0


lines = []
with open('input.txt', 'r') as file:
    lines = file.readlines()

for line in lines:
    times = int(line[1:])

    if line[0] == 'L':
        current =  (current - times) % 100
    else:
        current =  (current + times) % 100

    print('Current is now:', current, 'after', line.strip())
    if current == 0:
        numberOfZeros += 1




print("Number of zeros:", numberOfZeros)