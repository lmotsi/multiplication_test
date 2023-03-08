import sys
import select
import random
import os

def ask(timeout):
    incorrect = []
    correct = []
    timed_out = []
    total = 0
    for i in range(10):
        x = random.randint(1,12)
        y = random.randint(1,12)
        q = f"{x} x {y}" 
        print(f"{q}")
        rlist, _, _ = select.select([sys.stdin], [], [], timeout)
        if rlist:
            answer = sys.stdin.readline().strip()
            try:
                if int(answer) == x*y:
                    total += 1
                    correct.append(q)
                else:
                    incorrect.append(q)
            except:
                incorrect.append(q)
        else:
            timed_out.append(q)
            print("Time Out!!!!!")

    os.system('cls' if os.name == 'nt' else 'clear')
    print(f"You got {total} questions right.")
    print("\n")
    print("These are the questions you got RIGHT:")
    for i in correct:
        print("                " + i)
    print()
    print("These are the questions you got WRONG:")
    for i in incorrect:
        print("                " + i)
    print()    
    print("These are the questions you ran out of time for:")
    for i in timed_out:
        print("                " + i)

if __name__=="__main__":        
    ask(5)