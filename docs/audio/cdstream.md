IMPORT CD CONTENTS
```bash
brew install cdparanoia
```
```bash
cdparanoia -B
```

COMBINE ALL .WAV’S IN A DIR WITH A 2 SECOND CROSSFADE - crossfade.sh
```bash
#!/bin/bash

# Duration of the crossfade
crossfade_duration=2

# Temporary file for intermediate merges
temp_file="temp_combined.wav"
final_file="final_combined.wav"

# Get a sorted list of .wav files
files=($(ls *.wav | sort))

# Use the first file as the starting point
cp "${files[0]}" "$final_file"

# Remove the first file from the list
unset files[0]

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        # Get the duration of the current final file
        duration=$(ffprobe -i "$final_file" -show_entries format=duration -v quiet -of csv="p=0")
        # Calculate the start time for the crossfade effect
        crossfade_start=$(echo "$duration - $crossfade_duration" | bc)
        # Create the crossfade effect between the current final file and the next .wav file
        ffmpeg -i "$final_file" -i "$file" -filter_complex \
        "[0:a][1:a] acrossfade=d=$crossfade_duration:o=0:c1=tri:c2=tri" \
        "$temp_file"
        # Move the temporary file to be the new final file
        mv "$temp_file" "$final_file"
    fi
done

# Clean up temporary file if it exists
[ -f "$temp_file" ] && rm "$temp_file"

echo "All files have been combined into $final_file with a $crossfade_duration second crossfade between tracks."
```

GIVE PERMISSION TO SCRIPT TO RUN
```bash
chmod +x crossfade.sh
```

RUN SCRIPT
```bash
./crossfade.sh
```
