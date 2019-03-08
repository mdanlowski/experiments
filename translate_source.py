import re
import csv
import timeit

start = timeit.default_timer()

paths = "C:/Source/transfile_list.csv"
rex = ":.{0,1}'[A-Z]{1}[A-ząćęłńóśżź\s].*'"


def fetch_translation(lnum):
    with open("C:/Source/trans_csv.csv", 'r') as translated_source:
        translated_source_lines = csv.reader(translated_source, delimiter=';', quotechar='"')
        for l in translated_source_lines:
            # print(translated_source_lines.line_num, l)
            test = translated_source_lines.line_num == lnum
            if test:
                return l[2]
            else: continue
            
trans_counter = 1
with open(paths, 'r') as filepaths: # open address list
    filepathsdata = csv.reader(filepaths, delimiter=';', quotechar='"')
    for address in filepathsdata: # for each single file from address list
        with open(address[0], 'r') as fin:
            # single_file_data = csv.reader(csvfile, delimiter=';', quotechar='"')
            fout = open("C:/Source/translated" + fin.name[fin.name.rfind('/'):], 'w')
            for line in fin.readlines():
                try:
                    fout.write(re.sub(rex, fetch_translation(trans_counter), line))
                except TypeError:
                    print(trans_counter)
                if isinstance(re.search(rex, line), re.Match):
                    trans_counter += 1
                # print(trans_counter)
                
            fout.close()
            
print(timeit.default_timer() - start, "Sub count:", trans_counter)
