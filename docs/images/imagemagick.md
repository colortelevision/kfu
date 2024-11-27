## automated PNG collages



```bash
brew install imagemagick
```

```bash
montage *.png -thumbnail 200x200 -geometry +2+2 -background white -density 300x300 -quality 100 collage.pdf
```


create collage of all pngs in a directory
```bash
montage *.png -geometry +0+0 -background white composite.png
```
create collage of all pngs in a directory xparent
```bash
magick montage *.png -geometry +0+0 -background none composite.png
```

create overlay
```bash
convert *.png -background none -layers flatten composite.png
```

create collage with green background

```bash
montage *.png -geometry +0+0 -background "#00ff00" composite.png
```

create collage with all png’s in cwd and it’s subdirectories
```bash
find . -iname "*.png" > pnglist.txt
montage @pnglist.txt -geometry +0+0 -background "#00ff00" composite.png
rm pnglist.txt
```

RESIZE ALL PNG’S TO 25%
```bash
for file in *.png; do sips -Z $(($(sips -g pixelWidth "$file" | awk '/pixelWidth/ {print $2}') / 4)) "$file"; done
```

TO AVOID OVERWRITING EXISTING FILES SPECIFY AN OUTPUT DIRECTORY
```bash
mkdir -p /path/to/resized
for img in /path/to/folder/*.jpg; do
    filename=$(basename "$img")
    sips --resampleWidth 25% "$img" --out "/path/to/resized/$filename"
done
```

DIVIDE PNG INTO SECTIONS OF 64x64
```bash
convert input.png -crop 64x64 +repage +adjoin tile_%d.png
```
script to combine all .png’s and organize them by size for montage

```bash
#!/bin/bash

# Create a temporary file to hold filenames and dimensions
tempfile=$(mktemp)

# Find all PNG files excluding ones starting with ._ and get their dimensions
find . -iname "*.png" ! -name "._*" -exec identify -format "%w %h %i\n" {} \; > "$tempfile"

# Sort the files by dimensions (width then height)
# Adjust the sort command as needed; here, it's numeric sort by width and then height
sort -n -k 1,1 -k 2,2 "$tempfile" | awk '{print $3}' > sorted_files.txt

# Now, use the sorted list of files for the montage or composite command
# Example with montage, to arrange sorted images side by side with a green background
montage @sorted_files.txt -geometry +0+0 -background "#00ff00" composite.png

# Clean up temporary files
rm "$tempfile" sorted_files.txt
```

CONVERT .PDF TO .PNG
```bash
sips -s format png input.pdf --out output.png
```

ADD 4X WHITE BORDER TO IMAGE
```bash
convert input.png -bordercolor white -border 4x4 output.png
```

SCAN FOR IMAGE TYPE AND CREATE .PDF OF THUMBNAILS
```bash
sips -Z 200 *.{jpg,jpeg,png,} --out thumbnails/ && convert thumbnails/*.jpg thumbnails/*.jpeg thumbnails/*.png thumbnails/*.gif output.pdf
```

CROP ALL .PNG’S TO 500X500
```bash
for file in *.png; do convert "$file" -crop 500x500+0+0 "${file%.*}_cropped.png"; done
```
CONVERT ALL .JP2’S WITHIN DIRECTORY TO .PNG
```bash
find /path/to/folder -name "*.jp2" -exec sips -s format png {} --out {}.png \;
```

DETERMINE COLOR PALETTE OF PNG
```bash
convert input.png +dither -colors 256 -format %c histogram:info:- | awk '{print $NF}'
```
 ^ MORE DETAILED OUTPUT
```bash
convert yourimage.png +dither -colors 256 -format %c histogram:info:-
```
CONVERT ALL PNG’S IN A DIR TO A .PDF
```bash
convert *.png output.pdf
```

SHELL SCRIPT TO COMBINE LAYER OVERLAYS FROM DIRECTORIES HEADS>TAILS
```bash
#!/bin/bash

for head in heads/*.png; do
  for tail in tails/*.png; do
    head_name="$(basename "$head")"
    tail_name="$(basename "$tail")"
    combined_name="${head_name%.*}_${tail_name%.*}.png"
    convert "$tail" "$head" -composite "combined_images/$combined_name"
  done
done
```
