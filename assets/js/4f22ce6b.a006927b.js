"use strict";(self.webpackChunkkfu=self.webpackChunkkfu||[]).push([[7749],{714:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"info/csv","title":"csv","description":"CSV CLEANUP WHEN STARTING WITH .TXT","source":"@site/docs/info/csv.md","sourceDirName":"info","slug":"/info/csv","permalink":"/kfu/docs/info/csv","draft":false,"unlisted":false,"editUrl":"https://github.com/colortelevision/kfu/tree/main/docs/info/csv.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"imagemagick","permalink":"/kfu/docs/images/imagemagick"},"next":{"title":"wsl","permalink":"/kfu/docs/wsl"}}');var t=s(4848),i=s(8453);const l={},r=void 0,a={},o=[{value:"CSV CLEANUP WHEN STARTING WITH .TXT",id:"csv-cleanup-when-starting-with-txt",level:2},{value:"TOOLS FOR .CSV FILES",id:"tools-for-csv-files",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"csv-cleanup-when-starting-with-txt",children:"CSV CLEANUP WHEN STARTING WITH .TXT"}),"\n",(0,t.jsx)(n.p,{children:"INSTALL CSVKIT"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install csvkit\n"})}),"\n",(0,t.jsx)(n.p,{children:"CONVERT .TXT TO PROPERLY FORMATTED CSV (CORRECT DELIMITER)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'awk \'BEGIN {FS=","; OFS=","} {print $0}\' input.txt > output.csv\n'})}),"\n",(0,t.jsx)(n.p,{children:"OTHER OPTIONS"}),"\n",(0,t.jsx)(n.p,{children:"PREVIEW FILE IN A READABLE TABLE FORMAT"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"column -s, -t input.txt | less -S\n"})}),"\n",(0,t.jsx)(n.p,{children:"PROCESS THE FILE WITHOUT RENAMING"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"csvlook -d \u2018,\u2019 input.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"PLAIN OL\u2019 RENAME"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mv input.txt output.csv\ncsvlook output.csv\n"})}),"\n",(0,t.jsx)(n.p,{children:"SAVE TO NEW ALIGNED FILE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"column -s, -t input.txt > output.txt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"tools-for-csv-files",children:"TOOLS FOR .CSV FILES"}),"\n",(0,t.jsx)(n.p,{children:"SHOW DATA IN READABLE FORMAT"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"csvlook input.csv\n"})}),"\n",(0,t.jsx)(n.p,{children:"FILTER AND FORMAT DATA - EX. CSVCUT & CSVGREP"}),"\n",(0,t.jsx)(n.p,{children:"SPECIFY COLUMNS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"csvcut -c Quantity,Name,Price input.csv\n"})}),"\n",(0,t.jsx)(n.p,{children:"FILTER ROWS BY CONDITION"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"csvgrep -c Name -m \u201cBidoof\u201d input.csv\n"})}),"\n",(0,t.jsx)(n.p,{children:"SORT CSV BY A COLUMN"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"csvsort -c Price input.csv\n"})}),"\n",(0,t.jsx)(n.p,{children:"SAVE OUTPUT TO A NEW FILE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"csvlook input.csv > output.txt\n"})}),"\n",(0,t.jsx)(n.p,{children:"AD-HOC FORMATTING - IF YOU NEED LITE XFORMATIONS WITHOUT INSTALLING ADDITIONAL TOOLS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"awk -F, \u2018{print $1, $2, $15}\u2019 input.csv\n"})}),"\n",(0,t.jsx)(n.p,{children:"PRETTY-PRINT WITH COLUMN ALIGHTNMENT"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"column -s, -t input.csv | less -S\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var c=s(6540);const t={},i=c.createContext(t);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);