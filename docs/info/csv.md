## CSV CLEANUP WHEN STARTING WITH .TXT

INSTALL CSVKIT
```bash
brew install csvkit
```
CONVERT .TXT TO PROPERLY FORMATTED CSV (CORRECT DELIMITER)
```bash
awk 'BEGIN {FS=","; OFS=","} {print $0}' input.txt > output.csv
```

OTHER OPTIONS

PREVIEW FILE IN A READABLE TABLE FORMAT
```bash
column -s, -t input.txt | less -S
```

PROCESS THE FILE WITHOUT RENAMING
```bash
csvlook -d ‘,’ input.txt
```

PLAIN OL’ RENAME
```bash
mv input.txt output.csv
csvlook output.csv
```

SAVE TO NEW ALIGNED FILE
```bash
column -s, -t input.txt > output.txt
```
## TOOLS FOR .CSV FILES

SHOW DATA IN READABLE FORMAT
```bash
csvlook input.csv
```

FILTER AND FORMAT DATA - EX. CSVCUT & CSVGREP

SPECIFY COLUMNS
```bash
csvcut -c Quantity,Name,Price input.csv
```
FILTER ROWS BY CONDITION
```bash
csvgrep -c Name -m “Bidoof” input.csv
```
SORT CSV BY A COLUMN
```bash
csvsort -c Price input.csv
```
SAVE OUTPUT TO A NEW FILE
```bash
csvlook input.csv > output.txt
```
AD-HOC FORMATTING - IF YOU NEED LITE XFORMATIONS WITHOUT INSTALLING ADDITIONAL TOOLS
```bash
awk -F, ‘{print $1, $2, $15}’ input.csv
```
PRETTY-PRINT WITH COLUMN ALIGHTNMENT
```bash
column -s, -t input.csv | less -S
```
