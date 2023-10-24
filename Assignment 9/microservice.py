import sys
import csv

def read_file(csv_file):
    data = []
    with open (csv_file, 'r') as file:
        csvFile = csv.reader(file)
        for row in csvFile:
            sex = int(row[0])
            duration = float(row[1])
            body_weight = float(row[2])
            data.append((sex, duration, body_weight))
    return data

def calculation(lists):
    if (lists[0] == 1):
        calores = lists[1] * lists[2] * 0.0713
    if (lists[0] == 2):
        calores = lists[1] * lists[2] * 0.0637
    calores = "{:.2f}".format(calores)
    return calores

def write_file(output_file):
    l = len(data)
    with open (output_file, 'w') as file:
        for i in range(l):
            file.write(calculation(data[i]))
            file.write("\n")
    return

if(len(sys.argv) < 2):
    print("Usage: microservice.py input.csv")
    exit(1)
input_csv = sys.argv[1]
output_file = "output.txt"


data = read_file(input_csv) # store data from input.csv to data

write_file(output_file)
