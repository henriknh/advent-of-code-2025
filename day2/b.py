lines = []
with open('input.txt', 'r') as file:
    lines = file.readlines()

sum = 0
sq = lines[0].split(',')

for s in sq:
    [sa, sb] = s.split('-')
    ia = int(sa)
    ib = int(sb)

    for i in range(ia, ib + 1):
        si = str(i)


        for j in range(1, len(si)):
            u = len(si) / j
            if u.is_integer():

                parts = []
                jump = len(si) // int(u)

                for jj in range(0, len(si), jump):
                    parts.append(si[jj:jj + jump])

                all_equal = all(part == parts[0] for part in parts)
                if all_equal:
                    print(parts)
                    sum += i
                    break

print('Sum is:', sum)