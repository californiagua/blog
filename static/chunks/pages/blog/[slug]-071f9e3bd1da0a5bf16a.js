(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492,179],{7300:function(e){"use strict";e.exports=JSON.parse('{"TN":"Californiagua Blog","v":"The Water Doctor","r9":"Californiagua","WL":"Reviewing all the sparkling water I can find","dK":"en-us","or":"https://californiagua.com","Vm":"https://github.com/californiagua/blog","BH":"/static/images/avatar.jpg","Ao":"/static/images/twitter-card.png","Do":"californiagua@gmail.com","km":"https://twitter.com/californiagua","SP":"en-US"}')},3905:function(e,t,r){"use strict";r.r(t),r.d(t,{MDXContext:function(){return d},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var n=r(9748);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.default.createContext({}),s=function(e){return function(t){var r=u(t.components);return n.default.createElement(e,c({},t,{components:r}))}},u=function(e){var t=n.default.useContext(d),r=t;return e&&(r="function"===typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.default.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.default.createElement(n.default.Fragment,{},t)}},m=n.default.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),p=a,m=s["".concat(i,".").concat(p)]||s[p]||f[p]||c;return r?n.default.createElement(m,o(o({ref:t},d),{},{components:r})):n.default.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"===typeof e?e:a,i[1]=o;for(var d=2;d<c;d++)i[d]=r[d];return n.default.createElement.apply(null,i)}return n.default.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4693:function(e,t,r){r(5139);var n=r(9748),a=r(3905);e.exports=function(e,t){var r=e.compiledSource,c=e.renderedOutput,i=e.scope||{},o=t&&t.components||{},l=t&&t.provider,d=n.useState(n.createElement("div",{dangerouslySetInnerHTML:{__html:c}})),s=d[0],u=d[1];return"undefined"===typeof window?s:(n.useEffect((function(){var e=window.requestIdleCallback((function(){var t=Object.assign({mdx:a.mdx},o,i),c=Object.keys(t),l=Object.values(t),d=Reflect.construct(Function,["React"].concat(c).concat(r+"\nreturn React.createElement(MDXContent, {});")),s=d.apply(d,[n].concat(l)),p=n.createElement(a.MDXProvider,{components:o},s);u(p),window.cancelIdleCallback(e)}))}),[r]),l?n.createElement(l.component,l.props||{},s):s)}},5139:function(){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},3848:function(e,t,r){"use strict";var n=r(6156),a=r(7146),c=r(7375),i=r(1664);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.href,r=(0,c.Z)(e,["href"]),n=t&&t.startsWith("/"),o=t&&t.startsWith("#");return n?(0,a.tZ)(i.default,{href:t,children:(0,a.tZ)("a",l({},r))}):o?(0,a.tZ)("a",l({href:t},r)):(0,a.tZ)("a",l({target:"_blank",rel:"noopener noreferrer",href:t},r))}},8e3:function(e,t,r){"use strict";var n=r(5675),a=r(3848),c={Image:n.default,a:a.Z};t.Z=c},2496:function(e,t,r){"use strict";r.d(t,{HJ:function(){return i},Is:function(){return o},JV:function(){return l}});var n=r(7146),a=r(2962),c=r(7300),i={title:c.TN,description:c.WL,openGraph:{type:"website",locale:c.dK,url:c.or,title:c.TN,description:c.WL,images:[{url:"".concat(c.or).concat(c.Ao),alt:c.TN,width:1200,height:600}]},twitter:{handle:c.km,site:c.km,cardType:"summary_large_image"},additionalMetaTags:[{name:"author",content:c.v}]},o=function(e){var t=e.title,r=e.description,i=e.url;return(0,n.tZ)(a.PB,{title:"".concat(t," \u2013 ").concat(c.TN),description:r,canonical:i,openGraph:{url:i,title:t,description:r}})},l=function(e){var t=e.title,r=e.summary,i=e.date,o=e.lastmod,l=e.url,d=e.tags,s=e.images,u=void 0===s?[]:s,p=new Date(i).toISOString(),f=new Date(o||i).toISOString(),m=(0===u.length?[c.Ao]:"string"===typeof u?[u]:u).map((function(e){return{url:"".concat(c.or).concat(e),alt:t}}));return(0,n.BX)(n.HY,{children:[(0,n.tZ)(a.PB,{title:"".concat(t," \u2013 ").concat(c.TN),description:r,canonical:l,openGraph:{type:"article",article:{publishedTime:p,modifiedTime:f,authors:["".concat(c.or,"/about")],tags:d},url:l,title:t,description:r,images:m},additionalMetaTags:[{name:"twitter:image",content:m[0].url}]}),(0,n.tZ)(a.dX,{authorName:c.v,dateModified:f,datePublished:p,description:r,images:m,publisherName:c.v,title:t,url:l})]})}},7290:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7146);function a(e){var t=e.children;return(0,n.tZ)("div",{className:"max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},164:function(e,t,r){"use strict";var n=r(7146),a=r(1664),c=r(8954);t.Z=function(e){var t=e.text;return(0,n.tZ)(a.default,{href:"/tags/".concat((0,c.G)(t)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400",children:t.split(" ").join("-")})})}},8954:function(e,t,r){"use strict";r.d(t,{G:function(){return n}});var n=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},8768:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return y},default:function(){return w}});var n=r(7146),a=r(4693),c=r.n(a),i=r(6156),o=r(3848);function l(e){var t=e.children;return(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}var d=r(7290),s=r(2496),u=r(164),p=r(7300);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){return"".concat(p.Vm,"/blob/master/data/blog/").concat(e)},g=function(e){return"https://mobile.twitter.com/search?q=".concat(encodeURIComponent("".concat(p.or,"/blog/").concat(e)))},b={weekday:"long",year:"numeric",month:"long",day:"numeric"};function v(e){var t=e.children,r=e.frontMatter,a=e.next,c=e.prev,i=r.slug,f=r.fileName,v=r.date,x=r.title,y=r.tags;return(0,n.BX)(d.Z,{children:[(0,n.tZ)(s.JV,m({url:"".concat(p.or,"/blog/").concat(r.slug)},r)),(0,n.tZ)("article",{children:(0,n.BX)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,n.tZ)("header",{className:"pt-6 xl:pb-6",children:(0,n.BX)("div",{className:"space-y-1 text-center",children:[(0,n.tZ)("dl",{className:"space-y-10",children:(0,n.BX)("div",{children:[(0,n.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.tZ)("time",{dateTime:v,children:new Date(v).toLocaleDateString(p.SP,b)})})]})}),(0,n.tZ)("div",{children:(0,n.tZ)(l,{children:x})})]})}),(0,n.BX)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.BX)("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",children:[(0,n.tZ)("dt",{className:"sr-only",children:"Authors"}),(0,n.tZ)("dd",{children:(0,n.tZ)("ul",{className:"flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",children:(0,n.BX)("li",{className:"flex items-center space-x-2",children:[(0,n.tZ)("img",{src:p.BH,alt:"avatar",className:"w-10 h-10 rounded-full"}),(0,n.BX)("dl",{className:"text-sm font-medium leading-5 whitespace-nowrap",children:[(0,n.tZ)("dt",{className:"sr-only",children:"Name"}),(0,n.tZ)("dd",{className:"text-gray-900 dark:text-gray-100",children:p.v}),(0,n.tZ)("dt",{className:"sr-only",children:"Twitter"}),(0,n.tZ)("dd",{children:(0,n.tZ)(o.Z,{href:p.km,className:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",children:p.km.replace("https://twitter.com/","@")})})]})]})})})]}),(0,n.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:[(0,n.tZ)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",children:t}),(0,n.BX)("div",{className:"pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",children:[(0,n.tZ)(o.Z,{href:g(i),rel:"nofollow",children:"Discuss on Twitter"})," \u2022 ",(0,n.tZ)(o.Z,{href:h(f),children:"View on GitHub"})]})]}),(0,n.BX)("footer",{children:[(0,n.BX)("div",{className:"text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",children:[y&&(0,n.BX)("div",{className:"py-4 xl:py-8",children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,n.tZ)("div",{className:"flex flex-wrap",children:y.map((function(e){return(0,n.tZ)(u.Z,{text:e},e)}))})]}),(a||c)&&(0,n.BX)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[c&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,n.tZ)("div",{className:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",children:(0,n.tZ)(o.Z,{href:"/blog/".concat(c.slug),children:c.title})})]}),a&&(0,n.BX)("div",{children:[(0,n.tZ)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,n.tZ)("div",{className:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",children:(0,n.tZ)(o.Z,{href:"/blog/".concat(a.slug),children:a.title})})]})]})]}),(0,n.tZ)("div",{className:"pt-4 xl:pt-8",children:(0,n.tZ)(o.Z,{href:"/blog",className:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",children:"\u2190 Back to the blog"})})]})]})]})})]})}var x=r(8e3),y=!0;function w(e){var t=e.post,r=e.prev,a=e.next,i=t.mdxSource,o=t.frontMatter,d=c()(i,{components:x.Z});return(0,n.tZ)(n.HY,{children:!0!==o.draft?(0,n.tZ)(v,{frontMatter:o,prev:r,next:a,children:d}):(0,n.tZ)("div",{className:"mt-24 text-center",children:(0,n.BX)(l,{children:["Under Construction"," ",(0,n.tZ)("span",{role:"img","aria-label":"roadwork sign",children:"\ud83d\udea7"})]})})})}},4163:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return r(8768)}])},4453:function(){}},function(e){e.O(0,[351,433,66,42],(function(){return t=4163,e(e.s=t);var t}));var t=e.O();_N_E=t}]);