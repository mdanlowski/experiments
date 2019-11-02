import os
import sys

root_path = ''
if len(sys.argv) > 1:
    root_path = sys.argv[1]
else:
    root_path = os.getcwd()

for r, d, p in os.walk(root_path):
    files += [os.path.join(r, x) for x in p]