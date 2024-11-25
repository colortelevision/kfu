---
sidebar_position: 5
---

#FFMPEG 101 - THE BASICS

CONVERT VIDEO FORMATS
```bash
ffmpeg -i input.mkv -codec copy output.mp4
```

EXTRACT AUDIO FROM VIDEO
```bash
ffmpeg -i input.mp4 -vn -acodec copy output.mp3
```

RESIZE A VIDEO
```bash
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4
```

COMPRESS A VIDEO TO REDUCE IT'S FILE SIZE
```bash
ffmpeg -i input.mp4 -vcodc libx256 -crf 28 output.mp4
```

COMBINE AUDIO & VIDEO
```bash
ffmpeg -i video.mp4 -i audio.mp4 -c:v copy -c:a aac output.mp4
```

CREATE A VIDEO FROM IMAGES
```bash
ffmpeg -framerate 24 -i img%03d.png -c:v libx264 -pix_fmt yuv420p output.mp4
```

ADD WATERMARK TO A VIDEO
```bash
ffmpeg -i input.mp4 -i watermark.png -filter_complex "overlay=10:10" output.mp4
```

SPLIT A VIDEO INTO 2 PARTS
```bash
ffmpeg -i input.mp4 -t 00:00:30 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:00:30 -c copy part2.mp4
