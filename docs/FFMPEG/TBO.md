# CHEAT SHEET

PLACE .MP4 ONTO .PNG (VIDEO ON PORTRAIT IMAGE)
```bash
ffmpeg -i video1.mp4 -i back.png -filter_complex "[0:v]scale=-1:720[video];[1:v][video]overlay=(W-w)/2:(H-h)/2" -c:a copy video2.mp4
```
PLACE IMAGE IN TOP RIGHT CORNER, FADES IN @ 0:00; FADES OUT @ 0:03
```bash
ffmpeg -i video2.mp4 -loop 1 -i icon.png -filter_complex "[1:v]fade=in:st=0:d=1,fade=out:st=3:d=1[ov];[0:v][ov]overlay=W-w-10:10:shortest=1" -pix_fmt yuv420p -c:a copy video3.mp4
```

REPLACE VIDEO’S AUDIO W/ .MP3
```bash
ffmpeg -i video3.mp4 -i music.mp3 -c:v copy -map 0:v:0 -map 1:a:0 -shortest video4.mp4
```


LOOP GIF IN TOP LEFT
```bash
ffmpeg -i video4.mp4 -ignore_loop 0 -i animation.gif -filter_complex "[1:v]scale=320:-1[ovrl], [0:v][ovrl]overlay=10:10" -pix_fmt yuv420p -c:a copy -t $(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video4.mp4) video5.mp4
```
CREATE VERTICAL VERSION
```bash
ffmpeg -i input.mp4 -vf 'split[original][copy];[copy]scale=-1:ih*(16/9)*(16/9),crop=w=ih*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2' output.mp4
```

INCREASE VOLUME
```bash
ffmpeg -i input.mp4 -af "volume=2.0" output.mp4
```

CLIPS
```bash
ffmpeg -i input.mp4 -c copy -segment_time 17 -reset_timestamps 1 -f segment output%d.mp4
```
REMOVE AUDIO
```bash
ffmpeg -i input.mp4 -c:v copy -an output.mp4
```

COMBINE IMG & AUDIO TO VIDEO
```bash
ffmpeg -loop 1 -i image.jpg -i audio.mp3 -c:v libx264 -c:a aac -strict experimental -b:a 192k -shortest output2.mp4
```

EDGE
```bash
ffmpeg -i input.mp4 -vf "edgedetect" output.mp4
```

GAMEBOY FILTER
```bash
ffmpeg -i input.mp4 -i custom_palette_256.png -filter_complex "eq=brightness=0.1:contrast=2:saturation=0,format=gray,unsharp=5:5:1.0,format=gbrp,paletteuse=dither=none" output.mp4
```
