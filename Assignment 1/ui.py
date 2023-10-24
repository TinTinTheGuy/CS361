import time

while True:
    user_input = input("Enter 1 for SuperCar Pictures or Enter 2 for Exit ")
    if user_input == '1':
        with open('prng-service.txt', 'w') as prng_file:
            prng_file.write('run')
        time.sleep(5)
        with open('prng-service.txt', 'r') as prng_file:
            random_num = prng_file.readline()
        with open('image-service.txt', 'w') as img_service_file:
            img_service_file.seek(0)
            img_service_file.truncate()
            img_service_file.write(random_num)
        print('*')
        print('**')
        print('***')
        print('Fancy Car Coming : )')
        time.sleep(5)
        with open('image-service.txt', 'r') as img_service_file:
            img_path = img_service_file.readline()
            time.sleep(5)
            print('Here is your super car:', img_path)

    elif user_input == '2':
        print('Goodbye!')
        break
    else:
        print("unknown option")