---
sidebar_position: 4
---

# FFMPEG & SOX COMMAND EXAMPLES

SPEED VIDEO UP BY 2x
```bash
ffmpeg -i input.mp4 -vf "setpts=0.5*PTS™ output.mp4
```

SLOW VIDEO DOWN BY 2 x
```bash
ffmpeg -i input.mp4 -vf "setpts=2.0*PTS" output.mp4
```

EXTRACT FRAMES FROM VIDEO AT A SPECIFIC INTERVAL
```bash
ffmpeg -i input.Mp4 -vf "fps=1" frame_%04d.png
```

CONCATENATE VIDEOS INTO ONE

CREATE A TXT FILE WITH LIST OF VIDEOS LIKE
```bash
file "video1.mp4"
file "video2.mp4"
file "vide03.mp4"
```

THEN RUN
```bash
ffmpeg -f concat -safe 0 -i input.txt -c copy output.mp4
```

ADD SUBTITLES TO A VIDEO
```bash
fimpeg -i input.mp4 -vf subtitles=subtitles.srt output.mp4
```

CONVERT AUDIO FORMAT
```bash
ffmpeg -i input.wav output.mp3
```

NORMALIZE AUDIO
```bash
ffmpeg -i input.mp3 -filter:a loudnorm output.mp3
```

REMOVE AUDIO FROM VIDEO
```bash
ffmpeg -i input.mp4 -an output.mp4
```


INTERPOLATE MP4
```bash
ffmpeg -i input.mp4 -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[outv]" -map "[outv]" output.mp4
```
