(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6323],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1227:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(2784),r(3905)),i=["components"],s={slug:"introducing-remotion",title:"Introducing Remotion",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},c=void 0,l={permalink:"/blog/introducing-remotion",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/blog/2021-02-08-introducing-remotion.md",source:"@site/blog/2021-02-08-introducing-remotion.md",title:"Introducing Remotion",description:"I've been using After Effects for many years, but it's always been a dream of mine to code my videos instead. In the React ecosystem, I am used to being able to take advantage of powerful composition, reusability, to be able to customize the experience for every user. To use scripts, linters and external dependencies to make my life easier as a coder.",date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[],readingTime:1.28,truncated:!1,prevItem:{title:"Remotion 1.1",permalink:"/blog/1-1"}},u=[],m={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I've been using After Effects for many years, but it's always been a dream of mine to code my videos instead. In the React ecosystem, I am used to being able to take advantage of powerful composition, reusability, to be able to customize the experience for every user. To use scripts, linters and external dependencies to make my life easier as a coder."),(0,o.kt)("p",null,"So as a proof of concept I tried to make a trailer for my AnySticker app",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," in React, and to render each frame using Puppeteer and stitch them together using FFMPEG."),(0,o.kt)("p",null,"The final result was a video that I thought was the best one I created yet. And I realized there was something to the idea."),(0,o.kt)("p",null,"This is my attempt to create a tool for the community that allows you to write videos in React. Obviously this is a huge undertaking, so this is not a product with hundreds of different features built in. Rather, following the React philosophy, this is an attempt to create a minimal fundament for rendering videos in React. Basically, you get a blank canvas, and you create your motion graphics using existing web technologies built into the browser and your favorite external libraries. Remotion is so minimal in fact, it consists of only 5-6 APIs that you need to learn to get started."),(0,o.kt)("p",null,"To get started is super easy. Assuming you already have ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"Yarn"),", run:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"yarn create video"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"yarn create video")))))),(0,o.kt)("p",null,"and then read the ",(0,o.kt)("a",{parentName:"p",href:"/docs"},"documentation"),". ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/JNYBGR"},"Let me know on Twitter")," what you think!"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/JNYBGR/status/1319292595420291074"},"AnySticker beta trailer "),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);