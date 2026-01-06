---
sidebar_position: 4
---
# FILE SCRIPTS (LINUX EDITION)

**COPY A DIRECTORY TO ANOTHER DRIVE/DIRECTORY (PRESERVING TIMESTAMPS, PERMISSIONS, METADATA)**  
```bash
rsync -aH --progress "/home/krimp/OneDrive/" "/mnt/fuckonedrive/"
```

**MIRROR DIRECTORY WITH FULL PRESERVE (EXACT SYNC, PURGE EXTRAS)**  
```bash
rsync -aH --delete --progress "/source/shit/" "/dest/shit/"
```

**COPY ONLY NEWER FILES (INCREMENTAL BACKUP STYLE)**  
```bash
rsync -aH -u --progress "/bigdata/" "/mnt/backup/bigdata/"
```

**MOVE FILES (COPY THEN DELETE SOURCE)**  
```bash
rsync -aH --remove-source-files --progress "/temp/fuckthis/" "/mnt/archive/"
```

**COPY WITH FULL PRESERVE INCLUDING EXTENDED ATTRIBUTES/ACLS**  
```bash
rsync -aHAX --progress "/securefolder/" "/mnt/backup/secure/"
```

**EXCLUDE SPECIFIC CRAP FOLDERS**  
```bash
rsync -aH --exclude=".cache/" --exclude="Trash/" --progress "/home/krimp/" "/mnt/userbackup/"
```

**RESUMEABLE COPY OVER NETWORK (RESTARTABLE MODE)**  
```bash
rsync -aH -P --progress user@server:/share/data/ "/localdata/"
```

**COPY ONLY SPECIFIC FILE TYPES (E.G. IMAGES)**  
```bash
rsync -aH --include="*/" --include="*.jpg" --include="*.png" --include="*.gif" --exclude="*" --progress "/photos/" "/mnt/imagebackup/"
```

**PURGE DESTINATION OF DELETED SOURCE FILES WITHOUT FULL MIRROR**  
```bash
rsync -aH --delete --progress "/source/" "/dest/"
```

**DRY RUN TO CHECK WHAT WOULD HAPPEN**  
```bash
rsync -aH -n -v --progress "/hugefolder/" "/test/"
```

**BACKUP USER PROFILE EXCLUDING CRAP**  
```bash
rsync -aH --exclude="OneDrive/" --exclude=".cache/" --exclude="Downloads/temp/" --progress "/home/krimp/" "/mnt/profilebackup/"
```

Simple alternatives:

**RECURSIVE COPY (PRESERVES STRUCTURE)**  
```bash
cp -a "/source/" "/dest/"
```

**MOVE ENTIRE FOLDER**  
```bash
mv "/oldshit/" "/newshit/"
```

**DELETE RECURSIVELY (NUKE FOLDER)**  
```bash
rm -rf "/trash/"
```

**FIND AND COPY LARGE FILES (>1GB)**  
```bash
find "/data/" -type f -size +1G -exec cp --parents {} "/mnt/bigfiles/" \;
```

Here are some **pro-level file-fucking commands** for Linux. Bash, built-in shit that real admins abuse for bulk ops, permissions, timestamps, links, and nuking crap efficiently.

**TAKE OWNERSHIP AND RESET PERMISSIONS (WHEN ACL BULLSHIT BLOCKS YOU)**  
```bash
sudo chown -R $(whoami):$(whoami) "/lockedfolder/"
sudo chmod -R u+rwx "/lockedfolder/"
```

**BULK RENAME WITH COUNTERS**  
```bash
i=1; for f in *.jpg; do mv "$f" "photo_$((i++)).jpg"; done
```

**TOUCH TIMESTAMPS ON ALL FILES RECURSIVELY (CURRENT TIME)**  
```bash
find "/folder/" -exec touch {} \;
```

**FIND FILES BIGGER THAN 1GB**  
```bash
find "/data/" -type f -size +1G
```

**CREATE HARDLINK (SAME FILE, MULTIPLE NAMES, NO DUPE SPACE)**  
```bash
ln "/original/file.exe" "/link/to/file.exe"
```

**CREATE SYMBOLIC LINK TO DIRECTORY**  
```bash
ln -s "/real/folder/" "/shortcut/folder"
```

**CP MIRROR WITH PRESERVE**  
```bash
cp -a "/source/" "/dest/"
```

**ATTRIB BULK (STRIP WRITE PROTECT)**  
```bash
find "/folder/" -type f -exec chmod u+w {} \;
```

Bash pro shit:

**BULK RENAME WITH PREFIX AND ZERO-PADDED NUMBERS**  
```bash
i=1; for f in *.log; do mv "$f" "$(printf "backup_%03d.log" $i)"; ((i++)); done
```

**COPY ONLY FILES MODIFIED AFTER DATE**  
```bash
rsync -aH --min-age=$(date -d "2025-01-01" +%s) "/source/" "/newer/"
```

**DELETE FILES OLDER THAN 30 DAYS**  
```bash
find "/temp/" -type f -mtime +30 -delete
```

**CHANGE FILE EXTENSIONS IN BULK**  
```bash
for f in *.txt; do mv "$f" "${f%.txt}.bak"; done
```

**SET ALL FILES TO READ-ONLY RECURSIVELY**  
```bash
find "/archive/" -type f -exec chmod u-w {} \;
```

**GET HASHES FOR ALL FILES (VERIFY INTEGRITY)**  
```bash
find "/data/" -type f -exec sha256sum {} \; > hashes.txt
```

**COMPRESS FOLDER TO ZIP (NO EXTERNAL TOOLS)**  
```bash
zip -r "/mnt/bigfolder.zip" "/bigfolder/"
```

**FIND DUPLICATE FILES BY HASH**  
```bash
find "/photos/" -type f -exec sha256sum {} \; | sort | uniq -w64 -dD
```
