lines = []
with open('input.txt', 'r') as file:
    lines = file.readlines()

print(lines)


sum = 0
sq = lines[0].split(',')

for s in sq:

    [sa, sb] = s.split('-')
    ia = int(sa)
    ib = int(sb)

    print(ia, ib)

    for i in range(ia, ib + 1):
        si = str(i)
        if len(si) % 2 == 0:
            mid = len(si) // 2
            first_half = si[:mid]
            second_half = si[mid:]
            if first_half == second_half:
                sum += i
                print("Added", i)
print('Sum is:', sum)