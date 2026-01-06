---
sidebar_position: 2
---

# FILE SCRIPTS

COPY A DIRECTORY TO ANOTHER DRIVE/DIRECTORY (EXCLUDING BULLSHIT SECURITIES)
```bash
robocopy "C:\Users\Krimp\OneDrive\" "D:\fuckonedrive" /MIR /COPY:DAT /DCOPY:DAT /R:3 /W:5 /MT:32 /V /X /LOG:robolog.txt
```

**MIRROR DIRECTORY WITH FULL PRESERVE (DATA, ATTRIBUTES, TIMESTAMPS)**
```bash
robocopy "C:\source\shit" "D:\dest\shit" /MIR /COPY:DAT /DCOPY:DAT /MT:64 /R:1 /W:1 /LOG:mirrorlog.txt /V
```

**COPY ONLY NEWER FILES (INCREMENTAL BACKUP STYLE)**
```bash
robocopy "C:\bigdata" "E:\backup\bigdata" /E /XO /COPY:DAT /DCOPY:DAT /MT:32 /R:2 /W:3 /LOG+:incremental.txt
```

**MOVE FILES (COPY THEN DELETE SOURCE)**
```bash
robocopy "C:\temp\fuckthis" "D:\archive" /MOV /E /COPY:DAT /MT:16 /LOG:movelog.txt
```

**COPY WITH FULL NTFS PRESERVE INCLUDING OWNER/SECURITY (IF YOU NEED THAT SHIT)**
```bash
robocopy "C:\securefolder" "D:\backup\secure" /MIR /COPYALL /DCOPY:DAT /MT:32 /SEC /LOG:securecopy.txt
```

**EXCLUDE JUNCTIONS AND SPECIFIC CRAP FOLDERS (E.G. APPDATA BULLSHIT)**
```bash
robocopy "C:\Users\Krimp" "D:\userbackup" /MIR /COPY:DAT /XJ /XD AppData "OneDrive" /MT:48 /LOG:userbackup.txt
```

**RESUMEABLE COPY OVER NETWORK (RESTARTABLE MODE)**
```bash
robocopy "\\server\share\data" "D:\localdata" /Z /E /COPY:DAT /MT:16 /R:5 /W:10 /LOG:networkcopy.txt
```

**COPY ONLY SPECIFIC FILE TYPES (E.G. IMAGES)**
```bash
robocopy "C:\photos" "D:\imagebackup" *.jpg *.png *.gif /S /COPY:DT /MT:32 /LOG:images.txt
```

**PURGE DESTINATION OF DELETED SOURCE FILES WITHOUT FULL MIRROR**
```bash
robocopy "C:\source" "D:\dest" /E /PURGE /COPY:DAT /MT:32 /LOG:purge.txt
```

**MULTI-THREAD LIST ONLY (DRY RUN TO CHECK WHAT WOULD HAPPEN)**
```bash
robocopy "C:\hugefolder" "D:\test" /L /E /MT:32 /V /LOG:dryrun.txt
```

**BACKUP USER PROFILE EXCLUDING ONEDRIVE AND TEMP CRAP**
```bash
robocopy "C:\Users\Krimp" "D:\profilebackup" /MIR /XD "OneDrive" "AppData" "Downloads\temp" /COPY:DAT /MT:64 /LOG:profile.txt
```

PowerShell alternatives for simple shit:

**RECURSIVE COPY (PRESERVES STRUCTURE)**
```powershell
Copy-Item -Path "C:\source\*" -Destination "D:\dest" -Recurse -Force
```

**MOVE ENTIRE FOLDER**
```powershell
Move-Item -Path "C:\oldshit" -Destination "D:\newshit" -Force
```

**DELETE RECURSIVELY (NUKE FOLDER)**
```powershell
Remove-Item -Path "C:\trash" -Recurse -Force
```

**FIND AND COPY LARGE FILES (>1GB)**
```powershell
Get-ChildItem "C:\data" -Recurse -File | Where-Object Length -gt 1GB | Copy-Item -Destination "D:\bigfiles"
```

Here are some **pro-level file-fucking commands** for Windows. CMD, PowerShell, and built-in shit that real admins abuse for bulk ops, permissions, timestamps, hardlinks, and nuking crap efficiently.

**TAKE OWNERSHIP AND RESET PERMISSIONS (WHEN ACL BULLSHIT BLOCKS YOU)**
```cmd
takeown /F "C:\lockedfolder" /R /D Y
icacls "C:\lockedfolder" /reset /T /C
```

**BULK RENAME WITH COUNTERS (CMD FOR LOOP)**
```cmd
set i=1
for %f in (*.jpg) do ren "%f" "photo_!i!.jpg" & set /a i+=1
```

**TOUCH TIMESTAMPS ON ALL FILES RECURSIVELY (COPY CURRENT TIME)**
```cmd
forfiles /S /C "cmd /c copy /b @file +,,"
```

**FIND FILES BIGGER THAN 1GB**
```cmd
forfiles /S /M * /C "cmd /c if @fsize GTR 1073741824 echo @path"
```

**CREATE HARDLINK (SAME FILE, MULTIPLE NAMES, NO DUPE SPACE)**
```cmd
mklink /H "C:\link\to\file.exe" "C:\original\file.exe"
```

**CREATE SYMBOLIC LINK TO DIRECTORY**
```cmd
mklink /D "C:\shortcut\folder" "D:\real\folder"
```

**XCOPY MIRROR WITH EXCLUDES (OLDER THAN ROBOCOPY BUT STILL SOLID)**
```cmd
xcopy "C:\source" "D:\dest" /E /H /C /I /Y /EXCLUDE:exclude.txt
```

**ATTRIB BULK (STRIP READ-ONLY/HIDDEN/SYSTEM)**
```cmd
attrib -R -H -S "C:\folder\*.*" /S /D
```

PowerShell pro shit:

**BULK RENAME WITH PREFIX AND ZERO-PADDED NUMBERS**
```powershell
Get-ChildItem *.log | ForEach-Object -Begin {$i=1} -Process {Rename-Item $_ -NewName ("backup_{0:D3}.log" -f $i++)}
```

**COPY ONLY FILES MODIFIED AFTER DATE**
```powershell
Get-ChildItem "C:\source" -Recurse | Where-Object {$_.LastWriteTime -gt "2025-01-01"} | Copy-Item -Destination "D:\newer"
```

**DELETE FILES OLDER THAN 30 DAYS**
```powershell
Get-ChildItem "C:\temp" -Recurse | Where-Object {!$_.PSIsContainer -and $_.CreationTime -lt (Get-Date).AddDays(-30)} | Remove-Item -Force
```

**CHANGE FILE EXTENSIONS IN BULK**
```powershell
Get-ChildItem *.txt | Rename-Item -NewName {[System.IO.Path]::ChangeExtension($_.Name, ".bak")}
```

**SET ALL FILES TO READ-ONLY RECURSIVELY**
```powershell
Get-ChildItem "C:\archive" -Recurse -File | ForEach-Object { $_.IsReadOnly = $true }
```

**GET HASHES FOR ALL FILES (VERIFY INTEGRITY)**
```powershell
Get-ChildItem "D:\data" -Recurse -File | Get-FileHash -Algorithm SHA256 | Export-Csv hashes.csv
```

**COMPRESS FOLDER TO ZIP (NO EXTERNAL TOOLS)**
```powershell
Compress-Archive -Path "C:\bigfolder\*" -DestinationPath "D:\bigfolder.zip" -CompressionLevel Optimal
```

**FIND DUPLICATE FILES BY HASH**
```powershell
Get-ChildItem "C:\photos" -Recurse -File | Get-FileHash | Group-Object -Property Hash | Where-Object Count -gt 1
```
