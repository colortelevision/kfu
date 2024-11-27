## PREPARING AN MP3 FILE


```bash
ffmpeg -i input.mp3 -acodec pcm_s16le -ar 44100 -ac 2 output.wav
```

```bash
sox output.wav output-eq.wav equalizer 80 0.8q 50
```

```bash
sox output-eq.wav output-comp.wav compand 0.3,1-80,-80,-55,-15,-10,-5,0,0
```

```bash
sox output-comp.wav output-gain.wav gain -n -3
```

```bash
ffmpeg -i output-gain.wav -codec:a libmp3lame -q:a 0 output.mp3
```
