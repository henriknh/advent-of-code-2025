print("Hello, World!")

current = 50
numberOfZeros = 0


lines = []
with open('input.txt', 'r') as file:
    lines = file.readlines()

for line in lines:
    times = int(line[1:])

    if line[0] == 'L':
        for i in range(times):
            current -= 1
            if current < 0:
                current = 99
            if current == 0:
                numberOfZeros += 1

    else:
        for i in range(times):
            current += 1
            if current > 99:
                current = 0
            if current == 0:
                numberOfZeros += 1
   




print("Number of zeros:", numberOfZeros)