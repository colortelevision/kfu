"use strict";(self.webpackChunkkfu=self.webpackChunkkfu||[]).push([[7378],{2401:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"images/imagemagick","title":"imagemagick","description":"automated PNG collages","source":"@site/docs/images/imagemagick.md","sourceDirName":"images","slug":"/images/imagemagick","permalink":"/kfu/docs/images/imagemagick","draft":false,"unlisted":false,"editUrl":"https://github.com/colortelevision/kfu/tree/main/docs/images/imagemagick.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Welcome to KRIMP UNIVERSITY \ud83c\udf93","permalink":"/kfu/docs/home"},"next":{"title":"csv","permalink":"/kfu/docs/info/csv"}}');var i=a(4848),t=a(8453);const o={},r=void 0,c={},l=[{value:"automated PNG collages",id:"automated-png-collages",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"automated-png-collages",children:"automated PNG collages"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install imagemagick\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"montage *.png -thumbnail 200x200 -geometry +2+2 -background white -density 300x300 -quality 100 collage.pdf\n"})}),"\n",(0,i.jsx)(n.p,{children:"create collage of all pngs in a directory"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"montage *.png -geometry +0+0 -background white composite.png\n"})}),"\n",(0,i.jsx)(n.p,{children:"create collage of all pngs in a directory xparent"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"magick montage *.png -geometry +0+0 -background none composite.png\n"})}),"\n",(0,i.jsx)(n.p,{children:"create overlay"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"convert *.png -background none -layers flatten composite.png\n"})}),"\n",(0,i.jsx)(n.p,{children:"create collage with green background"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'montage *.png -geometry +0+0 -background "#00ff00" composite.png\n'})}),"\n",(0,i.jsx)(n.p,{children:"create collage with all png\u2019s in cwd and it\u2019s subdirectories"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'find . -iname "*.png" > pnglist.txt\nmontage @pnglist.txt -geometry +0+0 -background "#00ff00" composite.png\nrm pnglist.txt\n'})}),"\n",(0,i.jsx)(n.p,{children:"RESIZE ALL PNG\u2019S TO 25%"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'for file in *.png; do sips -Z $(($(sips -g pixelWidth "$file" | awk \'/pixelWidth/ {print $2}\') / 4)) "$file"; done\n'})}),"\n",(0,i.jsx)(n.p,{children:"TO AVOID OVERWRITING EXISTING FILES SPECIFY AN OUTPUT DIRECTORY"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'mkdir -p /path/to/resized\nfor img in /path/to/folder/*.jpg; do\n    filename=$(basename "$img")\n    sips --resampleWidth 25% "$img" --out "/path/to/resized/$filename"\ndone\n'})}),"\n",(0,i.jsx)(n.p,{children:"DIVIDE PNG INTO SECTIONS OF 64x64"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"convert input.png -crop 64x64 +repage +adjoin tile_%d.png\n"})}),"\n",(0,i.jsx)(n.p,{children:"script to combine all .png\u2019s and organize them by size for montage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Create a temporary file to hold filenames and dimensions\ntempfile=$(mktemp)\n\n# Find all PNG files excluding ones starting with ._ and get their dimensions\nfind . -iname "*.png" ! -name "._*" -exec identify -format "%w %h %i\\n" {} \\; > "$tempfile"\n\n# Sort the files by dimensions (width then height)\n# Adjust the sort command as needed; here, it\'s numeric sort by width and then height\nsort -n -k 1,1 -k 2,2 "$tempfile" | awk \'{print $3}\' > sorted_files.txt\n\n# Now, use the sorted list of files for the montage or composite command\n# Example with montage, to arrange sorted images side by side with a green background\nmontage @sorted_files.txt -geometry +0+0 -background "#00ff00" composite.png\n\n# Clean up temporary files\nrm "$tempfile" sorted_files.txt\n'})}),"\n",(0,i.jsx)(n.p,{children:"CONVERT .PDF TO .PNG"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sips -s format png input.pdf --out output.png\n"})}),"\n",(0,i.jsx)(n.p,{children:"ADD 4X WHITE BORDER TO IMAGE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"convert input.png -bordercolor white -border 4x4 output.png\n"})}),"\n",(0,i.jsx)(n.p,{children:"SCAN FOR IMAGE TYPE AND CREATE .PDF OF THUMBNAILS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sips -Z 200 *.{jpg,jpeg,png,} --out thumbnails/ && convert thumbnails/*.jpg thumbnails/*.jpeg thumbnails/*.png thumbnails/*.gif output.pdf\n"})}),"\n",(0,i.jsx)(n.p,{children:"CROP ALL .PNG\u2019S TO 500X500"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'for file in *.png; do convert "$file" -crop 500x500+0+0 "${file%.*}_cropped.png"; done\n'})}),"\n",(0,i.jsx)(n.p,{children:"CONVERT ALL .JP2\u2019S WITHIN DIRECTORY TO .PNG"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'find /path/to/folder -name "*.jp2" -exec sips -s format png {} --out {}.png \\;\n'})}),"\n",(0,i.jsx)(n.p,{children:"DETERMINE COLOR PALETTE OF PNG"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"convert input.png +dither -colors 256 -format %c histogram:info:- | awk '{print $NF}'\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u2028^ MORE DETAILED OUTPUT"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"convert yourimage.png +dither -colors 256 -format %c histogram:info:-\n"})}),"\n",(0,i.jsx)(n.p,{children:"CONVERT ALL PNG\u2019S IN A DIR TO A .PDF"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"convert *.png output.pdf\n"})}),"\n",(0,i.jsx)(n.p,{children:"SHELL SCRIPT TO COMBINE LAYER OVERLAYS FROM DIRECTORIES HEADS>TAILS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nfor head in heads/*.png; do\n  for tail in tails/*.png; do\n    head_name="$(basename "$head")"\n    tail_name="$(basename "$tail")"\n    combined_name="${head_name%.*}_${tail_name%.*}.png"\n    convert "$tail" "$head" -composite "combined_images/$combined_name"\n  done\ndone\n'})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);