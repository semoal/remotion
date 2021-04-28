(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{157:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||r;return a?i.a.createElement(u,c(c({ref:t},b),{},{components:a})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(157)),o={title:"CLI options",id:"cli"},c={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI options",description:"The default command in package.json that powers npm run build is:",source:"@site/docs/cli.md",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/cli.md",version:"current",sidebar:"someSidebar",previous:{title:"Using legacy Babel transpilation",permalink:"/docs/legacy-babel"},next:{title:"Configuration file",permalink:"/docs/config"}},l=[{value:"Flags",id:"flags",children:[]},{value:"Example command",id:"example-command",children:[]},{value:"See also",id:"see-also",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The default command in package.json that powers ",Object(r.b)("inlineCode",{parentName:"p"},"npm run build")," is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx remotion render <entry-file> <composition-id> <output-location>\n")),Object(r.b)("h2",{id:"flags"},"Flags"),Object(r.b)("p",null,"Besides choosing a video and output location with the command line arguments, the following flags are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--props"),": React Props to pass to the root component of your video. Must be a serialized JSON string (",Object(r.b)("inlineCode",{parentName:"li"},'--props=\'{"hello": "world"}\''),") or a path to a JSON file (",Object(r.b)("inlineCode",{parentName:"li"},"./path/to/props.json"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--concurrency"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setconcurrency"}),"How many CPU threads to use.")," Minimum 1. The maximum is the amount of threads you have."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--pixel-format"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setpixelformat"}),"Set a custom pixel format. See here for available values.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--image-format"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setimageformat"}),Object(r.b)("inlineCode",{parentName:"a"},"jpeg")," or ",Object(r.b)("inlineCode",{parentName:"a"},"png")," - JPEG is faster, but supports transparency.")," The default image format is ",Object(r.b)("inlineCode",{parentName:"li"},"jpeg")," since v1.1. Flag available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--config"),": Specify a location for the Remotion config file. Available in v1.2 and later."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--quality"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setquality"}),"Value between 0 and 100 for JPEG rendering quality"),". Doesn't work when PNG frames are rendered. Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--overwrite"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setoverwriteoutput"}),"Write to output even if file already exists.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--sequence"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setimagesequence"}),"Pass this flag if you want an image sequence as the output instead of a video.")," Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--codec"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setcodec"}),Object(r.b)("inlineCode",{parentName:"a"},"h264")," or ",Object(r.b)("inlineCode",{parentName:"a"},"h265")," or ",Object(r.b)("inlineCode",{parentName:"a"},"png")," or ",Object(r.b)("inlineCode",{parentName:"a"},"vp8")," or ",Object(r.b)("inlineCode",{parentName:"a"},"vp9")," or ",Object(r.b)("inlineCode",{parentName:"a"},"mp3")," or ",Object(r.b)("inlineCode",{parentName:"a"},"aac")," or ",Object(r.b)("inlineCode",{parentName:"a"},"wav")),". If you don't supply ",Object(r.b)("inlineCode",{parentName:"li"},"--codec"),", it will use the H.264 encoder. Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--crf"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setcrf"}),"To set Constant Rate Factor (CRF) of the output"),". Minimum 0. Use this rate control mode if you want to keep the best quality and care less about the file size. Available since v1.4."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--browser-executable"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setbrowserexecutable"}),"Path to a Chrome executable"),". If not specified and Remotion cannot find one, it will download one during rendering. Available since v1.5."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--frames"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setframerange"}),"Render a still frame or a subset of a video"),". Example: ",Object(r.b)("inlineCode",{parentName:"li"},"--frames=0-9")," (To select the first 10 frames) or ",Object(r.b)("inlineCode",{parentName:"li"},"--frames=50")," (To render a still of the 51st frame). Available since v2.0."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--bundle-cache"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setcachingenabled"}),"Enable or disable Webpack caching"),". This flag is enabled by default, use ",Object(r.b)("inlineCode",{parentName:"li"},"--bundle-cache=false")," to disable caching. Available since v2.0."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--log"),": ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config#setlevel"}),"Set the log level"),". Increase or decrease the amount of output. Acceptable values: ",Object(r.b)("inlineCode",{parentName:"li"},"error"),", ",Object(r.b)("inlineCode",{parentName:"li"},"warning"),", ",Object(r.b)("inlineCode",{parentName:"li"},"info")," (",Object(r.b)("em",{parentName:"li"},"default"),"), ",Object(r.b)("inlineCode",{parentName:"li"},"verbose"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you don't feel like passing command line flags every time, consider creating a ",Object(r.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/config"}),"config file"),"."))),Object(r.b)("h2",{id:"example-command"},"Example command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"npx remotion render --codec=vp8 src/index.tsx HelloWorld video.mp4\n")),Object(r.b)("h2",{id:"see-also"},"See also"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/render"}),"Render your video")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/config"}),"Configuration file"))))}p.isMDXComponent=!0}}]);