---
sidebar_position: 3
---
# FILE SCRIPTS (MACOS EDITION)

**COPY A DIRECTORY TO ANOTHER DRIVE/DIRECTORY (PRESERVING TIMESTAMPS, PERMISSIONS, METADATA)**  
```bash
rsync -aE --progress "/Users/krimp/Library/CloudStorage/OneDrive/" "/Volumes/fuckonedrive/"
```

**MIRROR DIRECTORY WITH FULL PRESERVE (EXACT SYNC, PURGE EXTRAS)**  
```bash
rsync -aE --delete --progress "/source/shit/" "/dest/shit/"
```

**COPY ONLY NEWER FILES (INCREMENTAL BACKUP STYLE)**  
```bash
rsync -aE -u --progress "/bigdata/" "/Volumes/backup/bigdata/"
```

**MOVE FILES (COPY THEN DELETE SOURCE)**  
```bash
rsync -aE --remove-source-files --progress "/temp/fuckthis/" "/Volumes/archive/"
```

**COPY WITH FULL PRESERVE INCLUDING EXTENDED ATTRIBUTES/RESOURCE FORKS**  
```bash
rsync -aEX --progress "/securefolder/" "/Volumes/backup/secure/"
```

**EXCLUDE SPECIFIC CRAP FOLDERS (E.G. LIBRARY BULLSHIT)**  
```bash
rsync -aE --exclude="Library/Containers/" --exclude="Library/Caches/" --progress "/Users/krimp/" "/Volumes/userbackup/"
```

**RESUMEABLE COPY OVER NETWORK (RESTARTABLE MODE)**  
```bash
rsync -aE -P --progress user@server:/share/data/ "/localdata/"
```

**COPY ONLY SPECIFIC FILE TYPES (E.G. IMAGES)**  
```bash
rsync -aE --include="*/" --include="*.jpg" --include="*.png" --include="*.gif" --exclude="*" --progress "/photos/" "/Volumes/imagebackup/"
```

**PURGE DESTINATION OF DELETED SOURCE FILES WITHOUT FULL MIRROR**  
```bash
rsync -aE --delete --progress "/source/" "/dest/"
```

**DRY RUN TO CHECK WHAT WOULD HAPPEN**  
```bash
rsync -aE -n -v --progress "/hugefolder/" "/test/"
```

**BACKUP USER PROFILE EXCLUDING CRAP**  
```bash
rsync -aE --exclude="Library/CloudStorage/OneDrive/" --exclude="Library/Caches/" --exclude="Downloads/temp/" --progress "/Users/krimp/" "/Volumes/profilebackup/"
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
find "/data/" -type f -size +1G -exec cp {} "/Volumes/bigfiles/" \;
```

Here are some **pro-level file-fucking commands** for macOS. Terminal, bash/zsh, built-in shit that real admins abuse for bulk ops, permissions, timestamps, links, and nuking crap efficiently.

**TAKE OWNERSHIP AND RESET PERMISSIONS (WHEN ACL BULLSHIT BLOCKS YOU)**  
```bash
sudo chown -R $(whoami) "/lockedfolder/"
sudo chmod -R u+rwx "/lockedfolder/"
```

**BULK RENAME WITH COUNTERS**  
```bash
i=1; for f in *.jpg; do mv "$f" "photo_$i.jpg"; ((i++)); done
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

**ATTRIB BULK (STRIP READ-ONLY)**  
```bash
find "/folder/" -type f -exec chmod u+w {} \;
```

Bash/zsh pro shit:

**BULK RENAME WITH PREFIX AND ZERO-PADDED NUMBERS**  
```bash
i=1; for f in *.log; do mv "$f" "$(printf "backup_%03d.log" $i)"; ((i++)); done
```

**COPY ONLY FILES MODIFIED AFTER DATE**  
```bash
rsync -aE --min-time="2025-01-01" "/source/" "/newer/"
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
find "/data/" -type f -exec shasum -a 256 {} \; > hashes.txt
```

**COMPRESS FOLDER TO ZIP (NO EXTERNAL TOOLS)**  
```bash
ditto -c -k --sequesterRsrc --keepParent "/bigfolder/" "/Volumes/bigfolder.zip"
```

**FIND DUPLICATE FILES BY HASH**  
```bash
find "/photos/" -type f -exec shasum -a 256 {} \; | awk '{print $1}' | sort | uniq -d
```
