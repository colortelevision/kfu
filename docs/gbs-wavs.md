#SPLIT AUDIO FILE INTO INDIVIDUAL CLIPS, THEN CONVERT FOR GB-STUDIO


DETECT SILENCE AND CREATE .TXT WITH TIMESTAMPS
```bash
ffmpeg -i input.wav -af silencedetect=n=-30dB:d=0.5 -f null - 2> silence_log.txt
```

PYTHON SCRIPT TO EXTRACT AUDIO CLIPS (split.py)
```bash
import re
import subprocess

# Configuration
input_audio = "input.wav"
output_prefix = "output_segment"
silence_log = "silence_log.txt"
silence_threshold = 0.5  # Minimum non-silent duration in seconds

# Parse silence_log.txt
with open(silence_log, "r") as f:
    log = f.readlines()

# Extract silence start and end times
silence_times = []
for line in log:
    silence_start = re.search(r"silence_start: (\d+\.?\d*)", line)
    silence_end = re.search(r"silence_end: (\d+\.?\d*)", line)
    if silence_start:
        silence_times.append((float(silence_start.group(1)), "start"))
    if silence_end:
        silence_times.append((float(silence_end.group(1)), "end"))

# Ensure silence_times is sorted
silence_times.sort()

# Calculate non-silent intervals
non_silent_segments = []
last_end = 0
for time, event in silence_times:
    if event == "start" and time - last_end >= silence_threshold:
        non_silent_segments.append((last_end, time))
    if event == "end":
        last_end = time

# Handle the final segment
total_duration = float(
    subprocess.run(
        [
            "ffprobe",
            "-i", input_audio,
            "-show_entries", "format=duration",
            "-v", "quiet",
            "-of", "csv=p=0"
        ],
        capture_output=True,
        text=True,
    ).stdout.strip()
)
if total_duration - last_end >= silence_threshold:
    non_silent_segments.append((last_end, total_duration))

# Create output audio segments
for i, (start, end) in enumerate(non_silent_segments, start=1):
    output_file = f"{output_prefix}_{i:03d}.wav"
    subprocess.run([
        "ffmpeg",
        "-i", input_audio,
        "-ss", str(start),
        "-to", str(end),
        "-c", "copy",
        output_file
    ])
    print(f"Created segment: {output_file}")
```

RUN PYTHON SCRIPT
```bash
python3 split.py
```

SHELL SCRIPT TO CONVERT ALL .WAV’S TO GAMEBOY FORMAT
```bash
#!/bin/bash

# Create an output directory if it doesn't exist
OUTPUT_DIR="output"
mkdir -p "$OUTPUT_DIR"

# Iterate over all .wav files in the current directory
for file in *.wav; do
  # Skip if no .wav files are found
  if [[ ! -e $file ]]; then
    echo "No .wav files found in the current directory."
    exit 1
  fi

  # Extract the base filename (without extension)
  base_name=$(basename "$file" .wav)

  # Define the output file name with the '-gb' suffix
  output_file="$OUTPUT_DIR/${base_name}-gb.wav"

  # Convert the .wav file using ffmpeg
  ffmpeg -i "$file" -ar 8000 -ac 1 -f wav -acodec pcm_u8 "$output_file" || {
    echo "Failed to convert $file"
    continue
  }

  echo "Converted $file to $output_file"
done

echo "All conversions are done! Check the '$OUTPUT_DIR' directory."
```

INCREASE VOLUME BY 10DB
```bash
#!/bin/bash

for file in *.wav; do
  sox "$file" "${file%.wav}_louder.wav" gain 10
done
```
