"use strict";(self.webpackChunkkfu=self.webpackChunkkfu||[]).push([[9262],{8877:(e,n,s)=>{s.r(n),s.d(n,{Highlight:()=>l,assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tutorial-basics/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","source":"@site/docs/tutorial-basics/markdown-features.mdx","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/markdown-features","permalink":"/kfu/docs/tutorial-basics/markdown-features","draft":false,"unlisted":false,"editUrl":"https://github.com/colortelevision/kfu/tree/main/docs/tutorial-basics/markdown-features.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Create a Blog Post","permalink":"/kfu/docs/tutorial-basics/create-a-blog-post"},"next":{"title":"Deploy your site","permalink":"/kfu/docs/tutorial-basics/deploy-your-site"}}');var t=s(4848),r=s(8453);const i={sidebar_position:4},a="Markdown Features",c={},l=({children:e,color:n})=>(0,t.jsx)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)},children:e}),d=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"markdown-features",children:"Markdown Features"})}),"\n",(0,t.jsxs)(n.p,{children:["Docusaurus supports ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,t.jsx)(n.strong,{children:"additional features"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,t.jsxs)(n.p,{children:["Markdown documents have metadata at the top called ",(0,t.jsx)(n.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,t.jsx)(n.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Result:"})," Let's see how to ",(0,t.jsx)(n.a,{href:"/kfu/docs/tutorial-basics/create-a-page",children:"Create a page"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,t.jsx)(n.p,{children:"Regular Markdown images are supported."}),"\n",(0,t.jsxs)(n.p,{children:["You can use absolute paths to reference images in the static directory (",(0,t.jsx)(n.code,{children:"static/img/docusaurus.png"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](/img/docusaurus.png)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docusaurus logo",src:s(3563).A+"",width:"200",height:"200"})}),"\n",(0,t.jsx)(n.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"![Docusaurus logo](./img/docusaurus.png)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,t.jsx)(n.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n```\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:":::tip[My tip]\n\nUse this awesome feature option\n\n:::\n\n:::danger[Take care]\n\nThis action is dangerous\n\n:::\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"My tip",type:"tip",children:(0,t.jsx)(n.p,{children:"Use this awesome feature option"})}),"\n",(0,t.jsx)(n.admonition,{title:"Take care",type:"danger",children:(0,t.jsx)(n.p,{children:"This action is dangerous"})}),"\n",(0,t.jsx)(n.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,t.jsx)(n.strong,{children:"interactive"})," and allows using any ",(0,t.jsx)(n.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,t.jsxs)(n.p,{children:["This is ",(0,t.jsx)(l,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,t.jsxs)(n.p,{children:["This is ",(0,t.jsx)(l,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},3563:(e,n,s)=>{s.d(n,{A:()=>o});const o="data:image/png;base64,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"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(6540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);