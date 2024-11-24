---
sidebar_position: 2
---

# FFMPEG & SOX COMMAND EXAMPLES


## FRAME EXTRACTION AND MANIPULATION
COMBINE PNG’S INTO A VIDEO AT 6 FPS
```bash
ffmpeg -framerate 6 -i %04d.png -c:v libx264 -pix_fmt yuv420p output2.mp4
```

EXTRACT PNG FRAMES FROM MP4 @ 6 FPS
```bash
ffmpeg -i input.mp4 -vf "fps=6" output_%04d.png
```

COMBINE PNG FRAMES INTO VIDEO AT 12 FPS
```bash
ffmpeg -framerate 12 -i %04d.png -c:v libx264 -pix_fmt yuv420p out1put.mp4
```
GENERATE PNG FRAMES FROM AN MP4 AT 6 FPS
```bash
ffmpeg -i input.mp4 -vf fps=6 output_%03d.png
```
COMBINE PNG FRAMES INTO GIF AT 12 FPS
```bash
ffmpeg -framerate 6 -pattern_type glob -i '/volumes/x1/vids/ref/fightframes/*.png' -preset best -crf 0 output.gif
```
IDENTIFY FPS
```bash
ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of default=noprint_wrappers=1:nokey=1 input.mp4
```
IDENTIFY FPS
```bash
ffmpeg -i input.mp4 2>&1 | grep "fps"
```
EXTRACT FRAMES FROM A VIDEO
```bash
ffmpeg -i input.mp4 -vf "fps=1" output%d.png
```
##VIDEO FILTERS AND EFFECTS

CREATE VERTICAL VERSION
```bash
ffmpeg -i input.mp4 -vf 'split[original][copy];[copy]scale=-1:ih*(16/9)*(16/9),crop=w=ih*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2' output.mp4
```
EDGE
```bash
ffmpeg -i input.mp4 -vf "edgedetect" output.mp4
```
CONTRAST
```bash
ffmpeg -i input.mp4 -vf "eq=contrast=1.5:brightness=0.1" output.mp4
```
INVERT
```bash
ffmpeg -i input.mp4 -vf lutrgb="r=negval:g=negval:b=negval" output.mp4
```
FLIP VIDEO HORIZONTALLY
```bash
ffmpeg -i input.mp4 -vf "hflip" output.mp4
```
GAMEBOY FILTER
```bash
ffmpeg -i input.mp4 -i custom_palette_256.png -filter_complex "eq=brightness=0.1:contrast=2:saturation=0,format=gray,unsharp=5:5:1.0,format=gbrp,paletteuse=dither=none" output.mp4
```
SPEED 114%
```bash
ffmpeg -i input.mp4 -vf "setpts=0.877*PTS" -c:a copy output.mp4
```
VHS AESTHETIC WITH TEXTS
```bash
ffmpeg -i input.mp4 -vf "curves=vintage,noise=alls=40:allf=t+u,eq=saturation=1.5:contrast=1.2,drawtext=text='textfile.txt':x=10:y=10:fontsize=24:fontcolor=white@0.6,drawtext=text='151121 01:19':x=10:y=h-40:fontsize=18:fontcolor=white@0.6,drawtext=text='TEXT':x=w-160:y=h-40:fontsize=18:fontcolor=white@0.6,drawbox=x=0:y=ih-1:w=iw:h=1:color=black@0.6,drawbox=x=iw-1:y=0:w=1:h=ih:color=black@0.6" -c:v libx264 -crf 18 -c:a aac -strict experimental output.mp4
```
## AUDIO MANIPULATION

INCREASE VOLUME
```bash
ffmpeg -i input.mp4 -af "volume=2.0" output.mp4
```
LOWER PITCH BY ONE SEMITONE
```bash
sox input.mp3 output.mp3 pitch -100
```
separate L & R
```bash
sox input.wav output_left.wav remix 1
sox input.wav output_right.wav remix 2
```
REPLACE VIDEO’S AUDIO W/ .MP3
```bash
ffmpeg -i video3.mp4 -i music.mp3 -c:v copy -map 0:v:0 -map 1:a:0 -shortest video4.mp4
```
REMOVE AUDIO
```bash
ffmpeg -i input.mp4 -c:v copy -an output.mp4
```
FLIP PHASE
```bash
ffmpeg -i input.mp4 -af "pan=stereo|c0=-1*c0|c1=-1*c1" output.mp4
```
CLIPS
```bash
ffmpeg -i input.mp4 -c copy -segment_time 17 -reset_timestamps 1 -f segment output%d.mp4
```
## COMP AND CONVERSION

.M4A TO .MP3
```bash
ffmpeg -i input.m4a -c:a libmp3lame -q:a 2 output.mp3
```
COMBINE IMAGE & AUDIO
```bash
ffmpeg -loop 1 -i image.png -i audio.mp3 -vf "scale=ceil(iw/2)*2:ceil(ih/2)*2" -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest output.mp4
```
CONVERT ALL .MP4’S IN CURRENT DIRECTORY TO WAV AND OUTPUT TO ‘./WAV’ FOLDER
```bash
for file in ./*.mp4; do ffmpeg -i "$file" -acodec pcm_s16le -ar 44100 "./wav/$(basename "$file" .mp4).wav"; done
```
PLACE .MP4 ONTO .PNG (VIDEO ON PORTRAIT IMAGE)
```bash
ffmpeg -i video1.mp4 -i back.png -filter_complex "[0:v]scale=-1:720[video];[1:v][video]overlay=(W-w)/2:(H-h)/2" -c:a copy video2.mp4
```
PLACE IMAGE IN TOP RIGHT CORNER, FADES IN @ 0:00; FADES OUT @ 0:03
```bash
ffmpeg -i video2.mp4 -loop 1 -i icon.png -filter_complex "[1:v]fade=in:st=0:d=1,fade=out:st=3:d=1[ov];[0:v][ov]overlay=W-w-10:10:shortest=1" -pix_fmt yuv420p -c:a copy video3.mp4
```
LOOP GIF IN TOP LEFT
```bash
ffmpeg -i video4.mp4 -ignore_loop 0 -i animation.gif -filter_complex "[1:v]scale=320:-1[ovrl], [0:v][ovrl]overlay=10:10" -pix_fmt yuv420p -c:a copy -t $(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video4.mp4) video5.mp4
```
RESIZE ALL PNG’S IN A FOLDER
```bash
for file in *.png; do
    sips -z 1920 3412 "$file" --out "scaled_$file"
```
## SCRIPTS

ENABLE SCRIPT
```bash
chmod +x script.sh
```
RUN SCRIPTS
```bash
./script.sh
```
SCRIPT FOR MOVING ALL PNG’S IN A SET OF FOLDERS INTO ONE FOLDER AND RENAMING THEM 00X ASCENDING NUMBERS:
```bash
#!/bin/bash

# The directory where you want to move all the PNGs
destination_directory="destination_folder"

# Ensure the destination directory exists
mkdir -p "$destination_directory"

# Counter for renaming
counter=1

# Find all PNGs, sort them, and then process each one
find out_* -type f -name "*.png" | sort | while read -r file; do
    # Construct the new filename
    new_filename=$(printf "%04d.png" "$counter")

    # Move and rename the file
    mv "$file" "$destination_directory/$new_filename"

    # Increment the counter
    ((counter++))
done

```
