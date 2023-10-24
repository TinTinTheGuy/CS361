import random
import time

while True:
    time.sleep(1)
    with open('prng-service.txt', 'r+') as prng_file:
        read_file = prng_file.readline()
        if read_file == 'run':
            random_num = str(random.randint(0, 392))
            prng_file.seek(0)      
            prng_file.truncate()
            prng_file.write(random_num)