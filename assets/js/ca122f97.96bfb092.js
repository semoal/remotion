(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1703],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return N}});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),N=i,v=c["".concat(s,".").concat(N)]||c[N]||m[N]||r;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function N(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},692:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(2122),i=a(9756),r=(a(2784),a(3905)),o=["components"],l={title:"getVideoMetadata()",id:"get-video-metadata"},s=void 0,d={unversionedId:"get-video-metadata",id:"get-video-metadata",isDocsHomePage:!1,title:"getVideoMetadata()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/get-video-metadata.md",sourceDirName:".",slug:"/get-video-metadata",permalink:"/docs/get-video-metadata",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-video-metadata.md",version:"current",frontMatter:{title:"getVideoMetadata()",id:"get-video-metadata"},sidebar:"someSidebar",previous:{title:"getAudioDuration()",permalink:"/docs/get-audio-duration"},next:{title:"getWaveformPortion()",permalink:"/docs/get-waveform-portion"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Caching behavior",id:"caching-behavior",children:[]},{value:"See also",id:"see-also",children:[]}],m={toc:p};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Part of the ",(0,r.kt)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),(0,r.kt)("p",null,"Takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," to a video, loads it and returns metadata for the specified source."),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"src"},(0,r.kt)("inlineCode",{parentName:"h3"},"src")),(0,r.kt)("p",null,"A string pointing to an asset."),(0,r.kt)("h2",{id:"return-value"},"Return value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<VideoMetadata>")," - object with information about the video data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"durationInSeconds"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," The duration of the video in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"width"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," The width of the video in pixels."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," The height of the video in pixels."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aspectRatio"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," Video width divided by video height."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isRemote"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," Whether the video was imported locally or from a different origin.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const getVideoMetadata: (src: string) => Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'@remotion/media-utils'")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video")," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'../video.mp4'")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video"),") "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  durationInSeconds: 100.00,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  width: 1280,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  height: 720,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  aspectRatio: 1.77777778,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  isRemote: false")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"} */")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata")),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'https://example.com/remote-audio.webm'"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  durationInSeconds: 40.213,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  width: 1920,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  height: 1080,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  aspectRatio: 1.77777778,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"  isRemote: true")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"} */"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) const getVideoMetadata: (src: string) => Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"} "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'@remotion/media-utils'")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video")," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'../video.mp4'")),(0,r.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"(",(0,r.kt)("data-lsp",{parentName:"span",lsp:'(alias) module "*.mp4"\nimport video'},"video"),") "),(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"/* {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  durationInSeconds: 100.00,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  width: 1280,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  height: 720,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  aspectRatio: 1.77777778,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  isRemote: false")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"} */")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.kt)("data-lsp",{parentName:"span",lsp:"(alias) getVideoMetadata(src: string): Promise<VideoMetadata>\nimport getVideoMetadata"},"getVideoMetadata"),"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"'https://example.com/remote-audio.webm'"),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"/* {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  durationInSeconds: 40.213,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  width: 1920,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  height: 1080,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  aspectRatio: 1.77777778,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"  isRemote: true")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#4E5761"}},"} */")))))),(0,r.kt)("h2",{id:"caching-behavior"},"Caching behavior"),(0,r.kt)("p",null,"This function is memoizing the results it returns.\nIf you pass in the same argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," multiple times, it will return a cached version from the second time on, regardless of if the file has changed. To clear the cache, you have to reload the page."),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/assets#using-videos"},"Using videos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/video"},(0,r.kt)("inlineCode",{parentName:"a"},"<Video/>")))))}c.isMDXComponent=!0}}]);