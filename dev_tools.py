import pathlib
import shutil

import time

def main_menu():
    print("="*10)
    print("1. Delete all python compiled files")
    print("2. Delete all databases")
    print("3. Delete all logs")
    print("4. Delete node_modules")

    answer = input("Select an option: ")
    try:
        answer = int(answer)
    except ValueError:
        invalid_input(answer)
    
    if answer == 1:
        del_python_compiled()
    elif answer == 2:
        del_databases()
    elif answer == 3:
        del_logs()
    elif answer == 4:
        del_node_modules()
    else:
        invalid_input(answer)

def invalid_input(input):
    print("{} isn't a valid option, try again!".format(str(input)))
    main_menu()

def del_python_compiled():
    for cfile in pathlib.Path("./").rglob("*.py[co]"):
        print(f"Deleting {cfile}")
        cfile.unlink()
    
    for directory in pathlib.Path("./").rglob("__pycache__"):
        print(f"Deleting {directory}")
        directory.rmdir()

def del_databases():
    for db in pathlib.Path("./database").rglob("*.db"):
        print(f"Deleting {db}")
        db.unlink()
    
def del_logs():
    for log in pathlib.Path("./logs").rglob("*.log*"):
        print(f"Deleting {log}")
        log.unlink()

def del_node_modules():
    print("Deleting node_modules")
    shutil.rmtree("./wms/server/webclient/node_modules")

if __name__ == '__main__':
    main_menu()
